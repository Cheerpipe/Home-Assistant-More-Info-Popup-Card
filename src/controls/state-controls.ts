/**
 * The big native controls of the more-info dialog (`src/state-control/*`)
 * and the rules more-info uses to pick one per entity.
 */
import { computeDomain } from "../ha/entity";
import type { HassEntity } from "../ha/types";

export interface StateControlSpec {
  tag: string;
  /** Domain whose more-info control imports the element. */
  load: string;
}

export const STATE_CONTROLS = {
  toggle: { tag: "ha-state-control-toggle", load: "switch" },
  brightness: { tag: "ha-state-control-light-brightness", load: "light" },
  fan_speed: { tag: "ha-state-control-fan-speed", load: "fan" },
  position: { tag: "ha-state-control-cover-position", load: "cover" },
  tilt: { tag: "ha-state-control-cover-tilt-position", load: "cover" },
  cover_toggle: { tag: "ha-state-control-cover-toggle", load: "cover" },
  cover_buttons: { tag: "ha-state-control-cover-buttons", load: "cover" },
  valve_position: { tag: "ha-state-control-valve-position", load: "valve" },
  valve_toggle: { tag: "ha-state-control-valve-toggle", load: "valve" },
  valve_buttons: { tag: "ha-state-control-valve-buttons", load: "valve" },
  lock: { tag: "ha-state-control-lock-toggle", load: "lock" },
  alarm_modes: {
    tag: "ha-state-control-alarm_control_panel-modes",
    load: "alarm_control_panel",
  },
  temperature: { tag: "ha-state-control-climate-temperature", load: "climate" },
  climate_humidity: {
    tag: "ha-state-control-climate-humidity",
    load: "climate",
  },
  humidity: { tag: "ha-state-control-humidifier-humidity", load: "humidifier" },
  water_heater: {
    tag: "ha-state-control-water_heater-temperature",
    load: "water_heater",
  },
  vacuum_status: { tag: "ha-state-control-vacuum-status", load: "vacuum" },
  lawn_mower_status: {
    tag: "ha-state-control-lawn_mower-status",
    load: "lawn_mower",
  },
} as const satisfies Record<string, StateControlSpec>;

export type StateControlName = keyof typeof STATE_CONTROLS;

const BRIGHTNESS_MODES = [
  "brightness",
  "color_temp",
  "hs",
  "xy",
  "rgb",
  "rgbw",
  "rgbww",
  "white",
];

const supports = (stateObj: HassEntity, feature: number) =>
  ((stateObj.attributes.supported_features ?? 0) & feature) !== 0;

/** Same choice as the native more-info controls (`more-info-<domain>.ts`). */
export const autoStateControl = (
  stateObj: HassEntity,
): StateControlName | undefined => {
  const domain = computeDomain(stateObj.entity_id);
  switch (domain) {
    case "light":
      return (
        stateObj.attributes.supported_color_modes as string[] | undefined
      )?.some((mode) => BRIGHTNESS_MODES.includes(mode))
        ? "brightness"
        : "toggle";
    case "switch":
    case "input_boolean":
    case "siren":
    case "automation":
    case "remote":
      return "toggle";
    case "fan":
      return supports(stateObj, 1) ? "fan_speed" : "toggle";
    case "cover":
      if (supports(stateObj, 4)) return "position";
      if (supports(stateObj, 128)) return "tilt";
      return "cover_buttons";
    case "valve":
      return supports(stateObj, 4) ? "valve_position" : "valve_toggle";
    case "lock":
      return "lock";
    case "alarm_control_panel":
      return "alarm_modes";
    case "climate":
      return "temperature";
    case "humidifier":
      return "humidity";
    case "water_heater":
      return "water_heater";
    case "vacuum":
      return "vacuum_status";
    case "lawn_mower":
      return "lawn_mower_status";
    default:
      return undefined;
  }
};

/** Domains whose native more-info has no state header (they show their own). */
export const DOMAINS_WITHOUT_STATE_HEADER = [
  "climate",
  "humidifier",
  "water_heater",
];
