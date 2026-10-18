/**
 * `mode: top_sheet`: the native `ha-bottom-sheet` (same scrim, animation,
 * surface and theme variables) dropping from the top like a marquee. Its
 * `wa-drawer` is placed at the top, the rounded corners and the handle move
 * to the bottom edge, and the drag gesture is reversed: swiping up on the
 * header or the handle closes it.
 */
import type { LitElement } from "lit";

/** `BOTTOM_SHEET_ANIMATION_DURATION_MS` (`ha-bottom-sheet.ts`). */
const ANIMATION_MS = 300;
/** Distance (share of the sheet height) or speed that closes it. */
const CLOSE_RATIO = 0.25;
const CLOSE_VELOCITY = 0.5;

const RADIUS =
  "var(--ha-bottom-sheet-border-radius, var(--ha-dialog-border-radius, var(--ha-border-radius-2xl)))";

/** Added to the sheet's shadow root: `::part` can't reach these from outside. */
const SHEET_STYLE = `
  wa-drawer::part(body) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: ${RADIUS};
    border-bottom-right-radius: ${RADIUS};
  }
  .handle-wrapper {
    display: none;
  }
`;

type Sheet = LitElement & { open: boolean };

const prepared = new WeakSet<Element>();

/** Places the sheet's drawer at the top; resolves once it is. */
export const prepareTopSheet = async (sheet: Sheet): Promise<boolean> => {
  if (prepared.has(sheet)) return true;
  await sheet.updateComplete;
  const drawer = sheet.shadowRoot?.querySelector("wa-drawer") as
    (HTMLElement & { placement?: string }) | null;
  if (!drawer) return false;
  drawer.placement = "top";
  // Adopted after the sheet's own styles, so these win the cascade.
  const style = new CSSStyleSheet();
  style.replaceSync(SHEET_STYLE);
  const root = sheet.shadowRoot!;
  root.adoptedStyleSheets = [...root.adoptedStyleSheets, style];
  prepared.add(sheet);
  return true;
};

/**
 * Stops touches on the sheet's slotted nodes before they reach its drawer,
 * whose own gesture closes on a downward swipe. Controls inside still get
 * them first (they are deeper in the path).
 */
export const shieldSheetTouches = (ev: TouchEvent) => ev.stopPropagation();

/** Swipe up to close, from a touch on the header or the handle. */
export const startTopSheetSwipe = (
  ev: TouchEvent,
  sheet: Sheet,
  close: () => void,
) => {
  ev.stopPropagation();
  if (sheet.hasAttribute("prevent-scrim-close")) return;
  const startY = ev.touches[0]!.clientY;
  const startTime = ev.timeStamp;
  let delta = 0;

  const move = (moveEv: TouchEvent) => {
    delta = Math.min(0, moveEv.touches[0]!.clientY - startY);
    if (delta < 0) moveEv.preventDefault();
    sheet.style.setProperty("--dialog-transform", `translateY(${delta}px)`);
  };
  const end = (endEv: TouchEvent) => {
    document.removeEventListener("touchmove", move);
    document.removeEventListener("touchend", end);
    document.removeEventListener("touchcancel", end);
    const height =
      sheet.shadowRoot
        ?.querySelector("wa-drawer")
        ?.shadowRoot?.querySelector<HTMLElement>('[part="body"]')
        ?.offsetHeight ?? 0;
    const velocity = delta / Math.max(1, endEv.timeStamp - startTime);
    if (
      delta < 0 &&
      (velocity < -CLOSE_VELOCITY || -delta > height * CLOSE_RATIO)
    ) {
      close();
      setTimeout(
        () => sheet.style.removeProperty("--dialog-transform"),
        ANIMATION_MS,
      );
      return;
    }
    sheet.style.setProperty(
      "--dialog-transition",
      `transform ${ANIMATION_MS}ms ease-out`,
    );
    sheet.style.removeProperty("--dialog-transform");
    setTimeout(
      () => sheet.style.removeProperty("--dialog-transition"),
      ANIMATION_MS,
    );
  };
  document.addEventListener("touchmove", move, { passive: false });
  document.addEventListener("touchend", end);
  document.addEventListener("touchcancel", end);
};
