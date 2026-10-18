/**
 * Horizontal alignment of the popup body. `hui-grid-section` lays its cards on
 * a fixed 12-column grid inside its shadow root, so a row that does not fill
 * every column always starts on the left. With `horizontal_align` the grid
 * becomes a wrapping flex row with the same column widths and gaps, which can
 * be centered or right-aligned.
 */
import type { HorizontalAlign } from "./config";

const ATTR = "popup-align";

const SHEET_CSS = `
  :host([${ATTR}]) .container {
    display: flex;
    flex-wrap: wrap;
  }
  :host([${ATTR}="center"]) .container {
    justify-content: center;
  }
  :host([${ATTR}="right"]) .container {
    justify-content: flex-end;
  }
  :host([${ATTR}]) .card {
    flex: 0 0 auto;
    box-sizing: border-box;
    width: calc(
      (100% + var(--column-gap)) *
        min(var(--column-size, 1), var(--grid-column-count)) /
        var(--grid-column-count) - var(--column-gap)
    );
  }
  :host([${ATTR}]) .card.full-width {
    width: 100%;
  }
  /* "Add card" button of the editor preview (3 columns wide) */
  :host([${ATTR}]) .add {
    flex: 0 0 auto;
    width: calc(
      (100% + var(--column-gap)) * 3 / var(--grid-column-count) -
        var(--column-gap)
    );
  }
`;

let sheet: CSSStyleSheet | undefined;

const alignGrid = (grid: Element, align: HorizontalAlign) => {
  const root = grid.shadowRoot;
  if (!root) return false;
  sheet ??= new CSSStyleSheet();
  if (!sheet.cssRules.length) sheet.replaceSync(SHEET_CSS);
  if (!root.adoptedStyleSheets.includes(sheet)) {
    root.adoptedStyleSheets = [...root.adoptedStyleSheets, sheet];
  }
  if (align === "left") grid.removeAttribute(ATTR);
  else grid.setAttribute(ATTR, align);
  return true;
};

const observers = new WeakMap<HTMLElement, MutationObserver>();
const alignments = new WeakMap<HTMLElement, HorizontalAlign>();

/**
 * Applies `align` to the grid rendered by `section` (`hui-section` renders in
 * its light DOM and replaces the grid when its config changes).
 */
export const setSectionAlign = (
  section: HTMLElement,
  align: HorizontalAlign,
): void => {
  alignments.set(section, align);
  const apply = () => {
    const grid = section.querySelector("hui-grid-section");
    if (!grid) return;
    if (!alignGrid(grid, alignments.get(section)!)) {
      // Not rendered yet: its shadow root appears on the first update.
      void (
        grid as HTMLElement & { updateComplete?: Promise<unknown> }
      ).updateComplete?.then(() => alignGrid(grid, alignments.get(section)!));
    }
  };
  if (!observers.has(section)) {
    const observer = new MutationObserver(apply);
    observer.observe(section, { childList: true });
    observers.set(section, observer);
  }
  apply();
};
