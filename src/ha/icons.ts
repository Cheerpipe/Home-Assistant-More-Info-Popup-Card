/**
 * SVG path of an icon name (`mdi:…` or a custom iconset), for native
 * elements that only take paths (`ha-control-switch`). Resolved by HA's own
 * `ha-icon`, so custom iconsets work too.
 */
import { whenDefined } from "./internals";

const cache = new Map<string, Promise<string | undefined>>();

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const load = async (icon: string): Promise<string | undefined> => {
  if (!(await whenDefined("ha-icon"))) return undefined;
  const el = document.createElement("ha-icon") as HTMLElement & {
    icon?: string;
    updateComplete?: Promise<unknown>;
  };
  el.style.cssText = "position:fixed;visibility:hidden;pointer-events:none";
  el.icon = icon;
  document.body.append(el);
  try {
    // The icon database is asynchronous: wait for the inner icon's path.
    for (let i = 0; i < 50; i++) {
      await el.updateComplete;
      const svg = el.shadowRoot?.querySelector("ha-svg-icon") as
        (Element & { path?: string }) | null;
      if (svg?.path) return svg.path;
      await sleep(100);
    }
    return undefined;
  } finally {
    el.remove();
  }
};

export const resolveIconPath = (icon: string): Promise<string | undefined> => {
  let path = cache.get(icon);
  if (!path) {
    path = load(icon);
    cache.set(icon, path);
  }
  return path;
};
