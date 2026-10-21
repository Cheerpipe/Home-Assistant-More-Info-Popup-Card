import { describe, expect, it } from "vitest";
import {
  ATTRIBUTE_SELECTS,
  availableAttributes,
  ENTITY_SELECT,
} from "../src/controls/attributes";
import { inferControlType } from "../src/controls/items";
import {
  autoStateControl,
  remountsStateCard,
  showsStateRow,
} from "../src/controls/state-controls";
import type { HassEntity } from "../src/ha/types";

const entity = (
  entity_id: string,
  state: string,
  attributes: Record<string, unknown> = {},
) => ({ entity_id, state, attributes }) as unknown as HassEntity;

describe("autoStateControl (same choice as more-info)", () => {
  it.each([
    [entity("light.a", "on", { supported_color_modes: ["onoff"] }), "toggle"],
    [entity("light.b", "on", { supported_color_modes: ["hs"] }), "brightness"],
    [entity("switch.a", "off"), "toggle"],
    [entity("fan.a", "off", { supported_features: 1 }), "fan_speed"],
    [entity("fan.b", "off", { supported_features: 0 }), "toggle"],
    [entity("cover.a", "open", { supported_features: 15 }), "position"],
    [entity("cover.b", "open", { supported_features: 128 }), "tilt"],
    [entity("cover.c", "open", { supported_features: 3 }), "cover_toggle"],
    [entity("cover.d", "open", { supported_features: 11 }), "cover_buttons"],
    [entity("cover.e", "open", { supported_features: 51 }), "cover_buttons"],
    [entity("valve.a", "open", { supported_features: 15 }), "valve_position"],
    [entity("valve.b", "open", { supported_features: 3 }), "valve_toggle"],
    [entity("valve.c", "open", { supported_features: 11 }), "valve_buttons"],
    [entity("climate.a", "heat"), "temperature"],
    [entity("vacuum.a", "docked"), "vacuum_status"],
    [entity("media_player.a", "playing"), "media_player"],
    [entity("script.a", "off"), "trigger"],
    [entity("button.a", "unknown"), "trigger"],
    [entity("input_button.a", "unknown"), "trigger"],
    [entity("automation.a", "on"), "trigger"],
    [entity("counter.a", "1"), "more_info"],
    [entity("weather.a", "sunny"), "more_info"],
    [entity("remote.a", "on"), "more_info"],
    [entity("input_number.a", "1"), "more_info"],
    [entity("sensor.a", "1"), undefined],
  ])("%o → %s", (stateObj, expected) => {
    expect(autoStateControl(stateObj)).toBe(expected);
  });
});

describe("showsStateRow (state row above the more-info content)", () => {
  it.each([
    [entity("counter.a", "1"), true],
    [entity("remote.a", "on"), true],
    [entity("camera.a", "idle"), false],
    [entity("weather.a", "sunny"), false],
    [entity("timer.a", "idle"), false],
    [entity("group.a", "on", { entity_id: ["light.a", "light.b"] }), false],
    [entity("group.b", "on", { entity_id: ["light.a", "sensor.b"] }), true],
  ])("%o → %s", (stateObj, expected) => {
    expect(showsStateRow(stateObj)).toBe(expected);
  });
});

describe("inferControlType", () => {
  it.each([
    [{ entity: "light.a", attribute: "effect" }, "select"],
    [{ entity: "select.speed" }, "select"],
    [{ entity: "input_number.x" }, "number"],
    [{ entity: "switch.a" }, "toggle"],
    [{ entity: "sensor.a" }, "action"],
    [{ name: "Go", tap_action: { action: "navigate" } }, "action"],
    [{ type: "button" as const, entity: "vacuum.a" }, "button"],
  ])("%o → %s", (item, expected) => {
    expect(inferControlType(item)).toBe(expected);
  });
});

describe("attribute selects", () => {
  const fan = entity("fan.a", "on", {
    preset_modes: ["auto", "sleep"],
    preset_mode: "auto",
    oscillating: false,
    direction: "forward",
  });

  it("maps values and services like the native controls", () => {
    const preset = ATTRIBUTE_SELECTS.preset_mode;
    expect(preset.options(fan)).toEqual(["auto", "sleep"]);
    expect(preset.value(fan)).toBe("auto");
    expect(preset.service(fan)).toEqual(["fan", "set_preset_mode"]);
    expect(preset.data("sleep")).toEqual({ preset_mode: "sleep" });
  });

  it("handles boolean attributes", () => {
    const osc = ATTRIBUTE_SELECTS.oscillating;
    expect(osc.value(fan)).toBe("false");
    expect(osc.data("true")).toEqual({ oscillating: true });
  });

  it("uses the state for hvac modes and select entities", () => {
    const climate = entity("climate.a", "cool", {
      hvac_modes: ["off", "cool"],
    });
    expect(ATTRIBUTE_SELECTS.hvac_mode.value(climate)).toBe("cool");
    const select = entity("select.a", "b", { options: ["a", "b"] });
    expect(ENTITY_SELECT.value(select)).toBe("b");
    expect(ENTITY_SELECT.service(select)).toEqual(["select", "select_option"]);
    expect(ENTITY_SELECT.data("a")).toEqual({ option: "a" });
  });

  it("offers only attributes the entity has", () => {
    expect(availableAttributes(fan)).toEqual(
      expect.arrayContaining(["preset_mode", "direction", "oscillating"]),
    );
    expect(availableAttributes(fan)).not.toContain("effect");
  });
});

describe("remountsStateCard", () => {
  const base = { entity: "switch.coffee", control: "toggle" as const };

  it("mounts the first config", () => {
    expect(remountsStateCard(undefined, base)).toBe(true);
  });

  it("keeps the control when only text or colors change", () => {
    const next = { ...base, state_override: "Heating", color: "red" };
    expect(remountsStateCard(base, next)).toBe(false);
  });

  it.each([
    { entity: "switch.grinder" },
    { control: "trigger" as const },
    { show_state: false },
    { show_last_changed: false },
  ])("remounts when %o changes", (change) => {
    expect(remountsStateCard(base, { ...base, ...change })).toBe(true);
  });
});
