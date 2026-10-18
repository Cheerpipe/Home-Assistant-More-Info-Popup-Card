import { describe, expect, it } from "vitest";
import {
  coverControls,
  deviceBattery,
  lockCanOpen,
  positionStateDisplay,
  showFavoritePositions,
  stateColorCss,
  valveControls,
} from "../src/controls/native-helpers";
import type {
  ExtEntityRegistryEntry,
  HassEntity,
  HomeAssistant,
} from "../src/ha/types";

const entity = (
  entity_id: string,
  state: string,
  attributes: Record<string, unknown> = {},
) => ({ entity_id, state, attributes }) as unknown as HassEntity;

const entry = (options: ExtEntityRegistryEntry["options"]) =>
  ({ entity_id: "x", options }) as ExtEntityRegistryEntry;

describe("cover / valve controls (more-info-cover, more-info-valve)", () => {
  it("shows position and tilt with a mode switch", () => {
    expect(
      coverControls(entity("cover.a", "open", { supported_features: 255 })),
    ).toEqual({
      position: true,
      tilt: true,
      buttons: "buttons",
      switchMode: true,
    });
  });

  it("uses the toggle for open / close only", () => {
    expect(
      coverControls(entity("cover.a", "open", { supported_features: 3 })),
    ).toEqual({
      position: false,
      tilt: false,
      buttons: "toggle",
      switchMode: false,
    });
  });

  it("has no switch without buttons", () => {
    const controls = coverControls(
      entity("cover.a", "open", { supported_features: 4 }),
    );
    expect(controls.switchMode).toBe(false);
    expect(controls.buttons).toBeUndefined();
  });

  it("handles valves", () => {
    expect(
      valveControls(entity("valve.a", "open", { supported_features: 15 })),
    ).toEqual({
      position: true,
      tilt: false,
      buttons: "buttons",
      switchMode: true,
    });
    expect(
      valveControls(entity("valve.b", "open", { supported_features: 3 }))
        .buttons,
    ).toBe("toggle");
  });
});

describe("showFavoritePositions", () => {
  const cover = entity("cover.a", "open", { supported_features: 4 });
  it("needs the registry entry", () => {
    expect(showFavoritePositions(cover, undefined)).toBe(false);
    expect(showFavoritePositions(cover, null)).toBe(false);
  });
  it("shows the defaults and hides an empty list", () => {
    expect(showFavoritePositions(cover, entry(null))).toBe(true);
    expect(
      showFavoritePositions(
        cover,
        entry({ cover: { favorite_positions: [] } }),
      ),
    ).toBe(false);
  });
  it("needs set position", () => {
    expect(
      showFavoritePositions(
        entity("cover.b", "open", { supported_features: 3 }),
        entry(null),
      ),
    ).toBe(false);
  });
});

describe("positionStateDisplay", () => {
  const hass = {
    formatEntityAttributeValue: (_s: HassEntity, _a: string, v: unknown) =>
      `${v} %`,
  } as unknown as HomeAssistant;
  it("shows the position only while partly open", () => {
    expect(
      positionStateDisplay(
        hass,
        entity("cover.a", "open", { current_position: 40 }),
      ),
    ).toBe("40 %");
    expect(
      positionStateDisplay(
        hass,
        entity("cover.a", "open", { current_position: 100 }),
      ),
    ).toBe("");
    expect(
      positionStateDisplay(
        hass,
        entity("cover.a", "closed", { current_position: 0 }),
      ),
    ).toBe("");
  });
  it("falls back to the tilt position for covers", () => {
    expect(
      positionStateDisplay(
        hass,
        entity("cover.a", "open", { current_tilt_position: 30 }),
      ),
    ).toBe("30 %");
  });
});

describe("lock and state color", () => {
  it("can open unless open, waiting or unavailable", () => {
    expect(lockCanOpen(entity("lock.a", "locked"))).toBe(true);
    expect(lockCanOpen(entity("lock.a", "open"))).toBe(false);
    expect(lockCanOpen(entity("lock.a", "unlocking"))).toBe(false);
    expect(lockCanOpen(entity("lock.a", "unavailable"))).toBe(false);
    expect(lockCanOpen(entity("lock.a", "open", { assumed_state: true }))).toBe(
      true,
    );
  });

  it("builds the native color variable chain", () => {
    expect(stateColorCss(entity("lock.a", "jammed"))).toBe(
      "var(--state-lock-jammed-color, var(--state-lock-active-color, var(--state-active-color)))",
    );
    expect(stateColorCss(entity("lock.a", "unavailable"))).toBe(
      "var(--state-unavailable-color)",
    );
  });
});

describe("deviceBattery", () => {
  const hass = {
    entities: {
      "vacuum.a": { entity_id: "vacuum.a", device_id: "d" },
      "binary_sensor.low": { entity_id: "binary_sensor.low", device_id: "d" },
      "sensor.battery": { entity_id: "sensor.battery", device_id: "d" },
      "sensor.other": { entity_id: "sensor.other", device_id: "e" },
    },
    states: {
      "binary_sensor.low": entity("binary_sensor.low", "off", {
        device_class: "battery",
      }),
      "sensor.battery": entity("sensor.battery", "80", {
        device_class: "battery",
      }),
      "sensor.other": entity("sensor.other", "10", {
        device_class: "battery",
      }),
    },
  } as unknown as HomeAssistant;

  it("prefers the sensor of the same device", () => {
    expect(deviceBattery(hass, "vacuum.a")?.battery.entity_id).toBe(
      "sensor.battery",
    );
  });

  it("needs a device", () => {
    expect(deviceBattery(hass, "vacuum.none")).toBeUndefined();
  });
});
