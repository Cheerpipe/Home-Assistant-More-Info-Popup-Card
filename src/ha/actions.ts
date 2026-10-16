import { fireEvent } from "./fire-event";

/**
 * Navigates through HA's own action handler (`state/action-mixin.ts`), so
 * the real `navigate()` runs: it closes open dialogs first and keeps the
 * router's history bookkeeping consistent.
 */
export const haNavigate = (node: EventTarget, path: string): void => {
  fireEvent(node, "hass-action", {
    config: { tap_action: { action: "navigate", navigation_path: path } },
    action: "tap",
  });
};
