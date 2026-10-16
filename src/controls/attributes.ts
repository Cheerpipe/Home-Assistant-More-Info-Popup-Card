/**
 * Selectable attributes shown as chips at the bottom of the native more-info
 * controls, with the service each one calls (see `more-info-light`, `-fan`,
 * `-climate`, `-vacuum`, `-humidifier`, `-water_heater`, `-media_player`).
 */
import {
  mdiArrowOscillating,
  mdiCreation,
  mdiFan,
  mdiLoginVariant,
  mdiMusicNote,
  mdiPower,
  mdiRotateRight,
  mdiThermostat,
  mdiTuneVariant,
  mdiWaterBoiler,
  mdiAccountArrowLeft,
  mdiAccountArrowRight,
  mdiArrowOscillatingOff,
} from "@mdi/js";
import { computeDomain } from "../ha/entity";
import type { HassEntity } from "../ha/types";

export interface AttributeSelect {
  /** Option values, as strings (booleans are "true"/"false"). */
  options: (stateObj: HassEntity) => string[];
  value: (stateObj: HassEntity) => string | undefined;
  service: (stateObj: HassEntity) => [string, string];
  data: (value: string) => Record<string, unknown>;
  icon: string;
  /** hvac_mode / select options are states: format them as states. */
  formatAsState?: boolean;
  /** Fixed icons per option, like the native control (on/off style attributes). */
  optionIcons?: Record<string, string>;
  /** false: no per-option attribute icons (the native chip only has its own icon). */
  attributeIcons?: boolean;
}

const list = (attribute: string) => (stateObj: HassEntity) =>
  ((stateObj.attributes[attribute] as unknown[] | undefined) ?? []).map(String);

const attr = (attribute: string) => (stateObj: HassEntity) => {
  const value = stateObj.attributes[attribute];
  return value == null ? undefined : String(value);
};

const simple = (
  listAttribute: string,
  attribute: string,
  service: string,
  icon: string,
): AttributeSelect => ({
  options: list(listAttribute),
  value: attr(attribute),
  service: (stateObj) => [computeDomain(stateObj.entity_id), service],
  data: (value) => ({ [attribute]: value }),
  icon,
});

const boolean = (
  attribute: string,
  service: string,
  icon: string,
  offIcon: string,
): AttributeSelect => ({
  optionIcons: { true: icon, false: offIcon },
  options: () => ["true", "false"],
  value: (stateObj) =>
    stateObj.attributes[attribute] == null
      ? undefined
      : String(Boolean(stateObj.attributes[attribute])),
  service: (stateObj) => [computeDomain(stateObj.entity_id), service],
  data: (value) => ({ [attribute]: value === "true" }),
  icon,
});

export const ATTRIBUTE_SELECTS: Record<string, AttributeSelect> = {
  effect: {
    ...simple("effect_list", "effect", "turn_on", mdiCreation),
  },
  preset_mode: simple(
    "preset_modes",
    "preset_mode",
    "set_preset_mode",
    mdiTuneVariant,
  ),
  fan_mode: simple("fan_modes", "fan_mode", "set_fan_mode", mdiFan),
  swing_mode: simple(
    "swing_modes",
    "swing_mode",
    "set_swing_mode",
    mdiArrowOscillating,
  ),
  swing_horizontal_mode: simple(
    "swing_horizontal_modes",
    "swing_horizontal_mode",
    "set_swing_horizontal_mode",
    mdiArrowOscillating,
  ),
  hvac_mode: {
    options: list("hvac_modes"),
    value: (stateObj) => stateObj.state,
    service: () => ["climate", "set_hvac_mode"],
    data: (value) => ({ hvac_mode: value }),
    icon: mdiThermostat,
    formatAsState: true,
  },
  fan_speed: {
    ...simple("fan_speed_list", "fan_speed", "set_fan_speed", mdiFan),
    attributeIcons: false,
  },
  mode: simple("available_modes", "mode", "set_mode", mdiTuneVariant),
  direction: {
    options: () => ["forward", "reverse"],
    value: attr("direction"),
    service: () => ["fan", "set_direction"],
    data: (value) => ({ direction: value }),
    icon: mdiRotateRight,
  },
  oscillating: boolean(
    "oscillating",
    "oscillate",
    mdiArrowOscillating,
    mdiArrowOscillatingOff,
  ),
  operation_mode: simple(
    "operation_list",
    "operation_mode",
    "set_operation_mode",
    mdiWaterBoiler,
  ),
  away_mode: {
    options: () => ["on", "off"],
    value: attr("away_mode"),
    service: () => ["water_heater", "set_away_mode"],
    data: (value) => ({ away_mode: value === "on" }),
    icon: mdiAccountArrowRight,
    optionIcons: { on: mdiAccountArrowRight, off: mdiAccountArrowLeft },
  },
  source: {
    ...simple("source_list", "source", "select_source", mdiLoginVariant),
    attributeIcons: false,
  },
  sound_mode: {
    ...simple(
      "sound_mode_list",
      "sound_mode",
      "select_sound_mode",
      mdiMusicNote,
    ),
    attributeIcons: false,
  },
};

/** `select` / `input_select` entities: the state is the selected option. */
export const ENTITY_SELECT: AttributeSelect = {
  options: list("options"),
  value: (stateObj) => stateObj.state,
  service: (stateObj) => [computeDomain(stateObj.entity_id), "select_option"],
  data: (value) => ({ option: value }),
  icon: mdiTuneVariant,
  formatAsState: true,
};

/** `humidifier` on/off is a select chip natively ("State"). */
export const STATE_SELECT: AttributeSelect = {
  options: () => ["off", "on"],
  value: (stateObj) => stateObj.state,
  service: (stateObj) => [computeDomain(stateObj.entity_id), "toggle"],
  data: () => ({}),
  icon: mdiPower,
  formatAsState: true,
};

export const SELECT_DOMAINS = ["select", "input_select"];
export const NUMBER_DOMAINS = ["number", "input_number"];
export const TOGGLE_DOMAINS = [
  "switch",
  "input_boolean",
  "light",
  "fan",
  "siren",
  "automation",
  "script",
  "group",
  "media_player",
  "humidifier",
  "climate",
  "water_heater",
  "remote",
  "valve",
  "cover",
  "lock",
];

/** Attributes the editor offers for an entity (the ones it actually has). */
export const availableAttributes = (
  stateObj: HassEntity | undefined,
): string[] =>
  stateObj
    ? Object.entries(ATTRIBUTE_SELECTS)
        .filter(([, spec]) => spec.options(stateObj).length > 0)
        .map(([name]) => name)
    : Object.keys(ATTRIBUTE_SELECTS);
