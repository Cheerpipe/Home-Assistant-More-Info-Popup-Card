// Documentation generator.
//   node dev/docs.mjs dashboard   installs every example of docs/catalog.mjs in
//                                 the "Popup docs" dashboard (/popup-docs/<page>)
//   node dev/docs.mjs plan        prints the screenshot plan (JSON)
//   node dev/docs.mjs markdown    writes docs/*.md from the catalog
// Screenshots live in docs/images/<example id>.png (see docs/README.md).
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { PAGES } from "../docs/catalog.mjs";

const HA = process.env.HA_URL ?? "http://localhost:8123";
const URL_PATH = "popup-docs";
const DOCS = new URL("../docs/", import.meta.url);

const viewPath = (page) => page.file.replace(/\.md$/, "");

const examples = (page) => page.sections.flatMap((section) => section.examples);

// ---------------------------------------------------------------------------
// Minimal YAML writer (plain data only)
// ---------------------------------------------------------------------------

const SAFE = /^[A-Za-z_][\w./:-]*$/;
const scalar = (value) => {
  if (value === null || value === undefined) return "null";
  if (typeof value === "number" || typeof value === "boolean")
    return String(value);
  const text = String(value);
  if (
    SAFE.test(text) &&
    !["true", "false", "null", "yes", "no", "on", "off"].includes(
      text.toLowerCase(),
    )
  ) {
    return text;
  }
  return JSON.stringify(text);
};

const isPlain = (value) => value !== null && typeof value === "object";

export const toYaml = (value, indent = 0) => {
  const pad = " ".repeat(indent);
  if (Array.isArray(value)) {
    if (!value.length) return "[]";
    return value
      .map((item) => {
        if (isPlain(item) && !Array.isArray(item)) {
          const body = toYaml(item, indent + 2).trimStart();
          return `${pad}- ${body}`;
        }
        return `${pad}- ${isPlain(item) ? toYaml(item, indent + 2) : scalar(item)}`;
      })
      .join("\n");
  }
  if (isPlain(value)) {
    const entries = Object.entries(value);
    if (!entries.length) return "{}";
    return entries
      .map(([key, item]) => {
        if (isPlain(item) && Object.keys(item).length) {
          return `${pad}${key}:\n${toYaml(item, indent + 2)}`;
        }
        return `${pad}${key}: ${isPlain(item) ? toYaml(item) : scalar(item)}`;
      })
      .join("\n");
  }
  return pad + scalar(value);
};

// ---------------------------------------------------------------------------
// Dashboard
// ---------------------------------------------------------------------------

const ws = (token) =>
  new Promise((resolve, reject) => {
    const socket = new WebSocket(`${HA.replace(/^http/, "ws")}/api/websocket`);
    let id = 1;
    const pending = new Map();
    socket.onerror = reject;
    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.type === "auth_required") {
        socket.send(JSON.stringify({ type: "auth", access_token: token }));
      } else if (msg.type === "auth_ok") {
        resolve({
          call: (payload) =>
            new Promise((res, rej) => {
              const msgId = id++;
              pending.set(msgId, { res, rej });
              socket.send(JSON.stringify({ id: msgId, ...payload }));
            }),
          close: () => socket.close(),
        });
      } else if (msg.type === "auth_invalid") {
        reject(new Error(msg.message));
      } else if (msg.type === "result") {
        const p = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.success) p?.res(msg.result);
        else p?.rej(new Error(JSON.stringify(msg.error)));
      }
    };
  });

const accessToken = async () => {
  const credentials = JSON.parse(
    readFileSync(new URL("./.credentials.json", import.meta.url), "utf8"),
  );
  const res = await fetch(`${HA}/auth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: credentials.refresh_token,
      client_id: `${HA}/`,
    }),
  });
  return (await res.json()).access_token;
};

const dashboardConfig = () => ({
  title: "Popup docs",
  views: PAGES.map((page) => ({
    title: page.title,
    path: viewPath(page),
    type: "sections",
    max_columns: 4,
    sections: [
      {
        type: "grid",
        cards: [
          { type: "heading", heading: page.title },
          {
            type: "markdown",
            content:
              "Documentation examples (docs/catalog.mjs). The popup cards of this view are hidden: open them with `#popup_id` or fire-dom-event.",
          },
        ],
      },
      {
        type: "grid",
        cards: examples(page)
          .filter((example) => example.kind === "popup")
          .map((example) => example.config),
      },
    ],
  })),
});

const installDashboard = async () => {
  const conn = await ws(await accessToken());
  const dashboards = await conn.call({ type: "lovelace/dashboards/list" });
  if (!dashboards.some((d) => d.url_path === URL_PATH)) {
    await conn.call({
      type: "lovelace/dashboards/create",
      url_path: URL_PATH,
      title: "Popup docs",
      icon: "mdi:book-open-variant",
      mode: "storage",
      show_in_sidebar: true,
      require_admin: false,
    });
  }
  await conn.call({
    type: "lovelace/config/save",
    url_path: URL_PATH,
    config: dashboardConfig(),
  });
  conn.close();
  console.log(`Dashboard saved: ${HA}/${URL_PATH}/${viewPath(PAGES[0])}`);
};

// ---------------------------------------------------------------------------
// Screenshot plan
// ---------------------------------------------------------------------------

const plan = () =>
  PAGES.flatMap((page) =>
    examples(page)
      .filter((example) => example.kind === "popup")
      .map((example) => ({
        id: example.id,
        view: `/${URL_PATH}/${viewPath(page)}`,
        viewport: example.viewport ?? "desktop",
        entity: example.config.entity,
        open: example.open,
        setup: example.setup,
      })),
  );

// ---------------------------------------------------------------------------
// Markdown
// ---------------------------------------------------------------------------

const anchor = (title) =>
  title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const renderExample = (example) => {
  const lines = [`### ${example.title}`, "", example.text, ""];
  const image = new URL(`images/${example.id}.png`, DOCS);
  if (example.kind === "popup" && existsSync(image)) {
    lines.push(`![${example.title}](images/${example.id}.png)`, "");
  }
  const yaml = example.yaml ?? example.config;
  if (yaml) {
    if (example.yaml && example.kind === "popup") {
      lines.push(
        `<sub>Shown inside a popup bound to \`${example.config.entity}\`.</sub>`,
        "",
      );
    }
    lines.push("```yaml", toYaml(yaml), "```", "");
  }
  return lines.join("\n");
};

const renderPage = (page) => {
  const toc = page.sections
    .map(
      (section) =>
        `- [${section.title}](#${anchor(section.title)})\n` +
        section.examples
          .map((example) => `  - [${example.title}](#${anchor(example.title)})`)
          .join("\n"),
    )
    .join("\n");
  const body = page.sections
    .map((section) =>
      [
        `## ${section.title}`,
        "",
        ...(section.text ? [section.text, ""] : []),
        ...section.examples.map(renderExample),
      ].join("\n"),
    )
    .join("\n");
  return [
    `# ${page.title}`,
    "",
    "<!-- Generated by `node dev/docs.mjs markdown` from docs/catalog.mjs. Do not edit. -->",
    "",
    page.intro,
    "",
    "[← Documentation index](README.md)",
    "",
    toc,
    "",
    body,
  ].join("\n");
};

const writeMarkdown = () => {
  for (const page of PAGES) {
    writeFileSync(new URL(page.file, DOCS), `${renderPage(page).trimEnd()}\n`);
    console.log(`docs/${page.file}`);
  }
};

// ---------------------------------------------------------------------------

const command = process.argv[2];
if (command === "dashboard") {
  await installDashboard();
} else if (command === "plan") {
  console.log(JSON.stringify(plan(), null, 2));
} else if (command === "markdown") {
  writeMarkdown();
} else {
  console.log("Usage: node dev/docs.mjs dashboard | plan | markdown");
  process.exit(1);
}
