/**
 * User colors (`ui_color` selector values or any CSS color) and the state
 * color variables the native controls read (`stateColorCss`,
 * `src/common/entity/state_color.ts`).
 */
import { computeDomain } from "./entity";
import type { HassEntity } from "./types";

/** `THEME_COLORS` (`src/common/color/compute-color.ts`). */
const THEME_COLORS = new Set([
  "primary",
  "accent",
  "red",
  "pink",
  "purple",
  "deep-purple",
  "indigo",
  "blue",
  "light-blue",
  "cyan",
  "teal",
  "green",
  "light-green",
  "lime",
  "yellow",
  "amber",
  "orange",
  "deep-orange",
  "brown",
  "light-grey",
  "grey",
  "dark-grey",
  "blue-grey",
  "black",
  "white",
  "disabled",
]);

/** `computeCssColor`: theme color names become their CSS variable. */
export const computeCssColor = (color: string): string =>
  THEME_COLORS.has(color) ? `var(--${color}-color)` : color;

/** States drawn with the inactive color (close to `stateActive`). */
const INACTIVE_STATES = [
  "off",
  "unavailable",
  "unknown",
  "idle",
  "standby",
  "closed",
  "locked",
  "disarmed",
  "docked",
  "not_home",
];

export const isActiveState = (stateObj: HassEntity): boolean =>
  !INACTIVE_STATES.includes(stateObj.state);

/**
 * Variables that recolor the native controls of an entity: `color` for its
 * active states, `colorOff` for the inactive ones. The variable of the
 * current state is set too, since themes define some per state
 * (`--state-lock-locked-color`) and those win over the generic ones.
 */
export const stateColorVars = (
  stateObj: HassEntity,
  color?: string,
  colorOff?: string,
): Record<string, string> => {
  const vars: Record<string, string> = {};
  const domain = computeDomain(stateObj.entity_id);
  const state = stateObj.state.toLowerCase().replace(/[^a-z0-9]+/g, "_");
  const deviceClass = stateObj.attributes.device_class as string | undefined;
  const set = (value: string | undefined, active: boolean) => {
    if (!value) return;
    const css = computeCssColor(value);
    const [key, activeKey] = active ? ["on", "active"] : ["off", "inactive"];
    vars[`--state-${activeKey}-color`] = css;
    vars[`--state-${domain}-${activeKey}-color`] = css;
    vars[`--state-${domain}-${key}-color`] = css;
    if (isActiveState(stateObj) === active) {
      vars[`--state-${domain}-${state}-color`] = css;
      if (deviceClass) {
        vars[`--state-${domain}-${deviceClass}-${state}-color`] = css;
      }
    }
  };
  set(color, true);
  set(colorOff, false);
  return vars;
};
