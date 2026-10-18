/**
 * Single entry point for every Home Assistant frontend internal this card
 * depends on. Everything here is feature-detected so a frontend refactor
 * degrades gracefully (and is easy to spot) instead of breaking at random.
 */

/** Elements registered by the (preloaded) native more-info dialog chunk. */
export const DIALOG_ELEMENTS = [
  "ha-adaptive-dialog",
  "ha-dialog",
  "ha-bottom-sheet",
  "ha-dialog-header",
  "ha-icon-button",
  "ha-icon-button-prev",
  "ha-dropdown",
  "ha-dropdown-item",
  "hui-section",
] as const;

/** Native more-info sub-views reused inline. */
export const VIEW_ELEMENTS = {
  info: "ha-more-info-info",
  history: "ha-more-info-history-and-logbook",
  settings: "ha-more-info-settings",
  related: "ha-more-info-related",
  details: "ha-more-info-details",
  add_to: "ha-more-info-add-to",
} as const;

export const isDefined = (tag: string): boolean =>
  customElements.get(tag) !== undefined;

export const whenDefined = async (
  tag: string,
  timeout = 5000,
): Promise<boolean> => {
  if (isDefined(tag)) return true;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const result = await Promise.race([
    customElements.whenDefined(tag).then(() => true),
    new Promise<boolean>((resolve) => {
      timer = setTimeout(() => resolve(false), timeout);
    }),
  ]);
  clearTimeout(timer);
  return result;
};

let dialogReady: Promise<string[]> | undefined;

/**
 * Resolves once the native dialog building blocks are available.
 * HA imports `ha-more-info-dialog` right after its first render
 * (`src/state/more-info-mixin.ts`), which registers all of them.
 * Returns the list of missing elements (empty when everything is there).
 */
export const ensureDialogElements = (): Promise<string[]> => {
  dialogReady ??= (async () => {
    await whenDefined("ha-more-info-dialog");
    const missing: string[] = [];
    for (const tag of DIALOG_ELEMENTS) {
      if (!(await whenDefined(tag, 2000))) missing.push(tag);
    }
    if (missing.length) {
      console.warn(
        "[more-info-popup-card] Missing Home Assistant elements:",
        missing.join(", "),
      );
    }
    return missing;
  })();
  return dialogReady;
};

const loadEditorOf = async (tag: string): Promise<void> => {
  const cls = customElements.get(tag) as
    { getConfigElement?: () => Promise<unknown> } | undefined;
  try {
    await cls?.getConfigElement?.();
  } catch {
    // The element itself is not needed; we only want its imports.
  }
};

let editorReady: Promise<void> | undefined;

/**
 * Loads the lazily imported editor building blocks (`ha-form`,
 * `hui-card-picker`, `hui-card-element-editor`) by asking native cards for
 * their editors, which import them.
 */
export const ensureEditorElements = (): Promise<void> => {
  editorReady ??= (async () => {
    await Promise.all([
      whenDefined("hui-tile-card"),
      whenDefined("hui-grid-card"),
    ]);
    await Promise.all([
      loadEditorOf("hui-tile-card"), // ha-form
      loadEditorOf("hui-grid-card"), // hui-stack-card-editor → picker + element editor
    ]);
    await Promise.all([
      whenDefined("ha-form"),
      whenDefined("hui-card-picker"),
      whenDefined("hui-card-element-editor"),
    ]);
  })();
  return editorReady;
};

/** Parses `hass.config.version` ("2026.10.1", "2026.11.0b0", "2026.11.0.dev…"). */
export const parseHaVersion = (
  version: string | undefined,
): [number, number] | undefined => {
  const match = version?.match(/^(\d{4})\.(\d{1,2})/);
  return match ? [Number(match[1]), Number(match[2])] : undefined;
};

export const MIN_HA_VERSION: [number, number] = [2026, 10];

export const isSupportedHaVersion = (version: string | undefined): boolean => {
  const parsed = parseHaVersion(version);
  if (!parsed) return true;
  const [year, month] = parsed;
  return (
    year > MIN_HA_VERSION[0] ||
    (year === MIN_HA_VERSION[0] && month >= MIN_HA_VERSION[1])
  );
};

/**
 * Runs a method of a native more-info control (`more-info-<domain>`) whose
 * only job is to fire an event that opens a lazily imported view or dialog
 * (siren advanced controls, vacuum clean areas): only that element knows how
 * to import it. The method runs on a hidden stand-in carrying `props`, placed
 * inside `host` so the event bubbles from where the user clicked.
 * Returns false when the method is gone (frontend refactor).
 */
export const runNativeMethod = (
  host: ShadowRoot,
  tag: string,
  method: string,
  props: Record<string, unknown>,
): boolean => {
  const fn = (
    customElements.get(tag)?.prototype as Record<string, unknown> | undefined
  )?.[method];
  if (typeof fn !== "function") {
    console.warn("[more-info-popup-card] Missing", `${tag}.${method}`);
    return false;
  }
  const standIn = Object.assign(document.createElement("span"), props);
  standIn.hidden = true;
  host.appendChild(standIn);
  try {
    fn.call(standIn);
  } finally {
    standIn.remove();
  }
  return true;
};
