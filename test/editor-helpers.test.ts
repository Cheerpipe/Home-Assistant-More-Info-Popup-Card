import { describe, expect, it, vi } from "vitest";
import {
  cardIndexFromPath,
  createVirtualLovelace,
} from "../src/editor/virtual-lovelace";
import { decodeHash } from "../src/history";
import { computeEntityNameList } from "../src/ha/entity";
import { isSupportedHaVersion, parseHaVersion } from "../src/ha/internals";
import type { HomeAssistant } from "../src/ha/types";

describe("virtual lovelace", () => {
  it("exposes the popup as view 0 / section 0 and saves its cards", async () => {
    const onSave = vi.fn();
    const lovelace = createVirtualLovelace({
      section: { type: "grid", cards: [{ type: "tile" }] },
      locale: {},
      onSave,
      onToast: vi.fn(),
    });
    expect(lovelace.config.views[0].sections?.[0].cards).toEqual([
      { type: "tile" },
    ]);
    await lovelace.saveConfig({
      views: [{ sections: [{ type: "grid", cards: [{ type: "heading" }] }] }],
    });
    expect(onSave).toHaveBeenCalledWith([{ type: "heading" }]);
  });

  it("reads card indexes from event paths", () => {
    expect(cardIndexFromPath([0, 0, 3])).toBe(3);
    expect(cardIndexFromPath("x")).toBeUndefined();
  });
});

describe("helpers", () => {
  it("decodes hashes", () => {
    expect(decodeHash("#sal%C3%B3n")).toBe("salón");
    expect(decodeHash("#")).toBeUndefined();
    expect(decodeHash("")).toBeUndefined();
  });

  it("parses HA versions", () => {
    expect(parseHaVersion("2026.10.1")).toEqual([2026, 10]);
    expect(parseHaVersion("2026.11.0b0")).toEqual([2026, 11]);
    expect(isSupportedHaVersion("2026.9.3")).toBe(false);
    expect(isSupportedHaVersion("2027.1.0")).toBe(true);
    expect(isSupportedHaVersion(undefined)).toBe(true);
  });
});

describe("computeEntityNameList", () => {
  const hass = (patch: Partial<HomeAssistant>) =>
    ({
      states: {
        "light.ceiling": {
          entity_id: "light.ceiling",
          attributes: { friendly_name: "Living Lamp Ceiling" },
        },
      },
      entities: {},
      devices: {},
      areas: { living: { area_id: "living", name: "Living room" } },
      formatEntityName: (_s: unknown, { type }: { type: string }) =>
        type === "entity" ? "Ceiling" : "",
      ...patch,
    }) as unknown as HomeAssistant;

  it("builds area ▸ device ▸ entity for device-relative names", () => {
    const list = computeEntityNameList(
      hass({
        entities: {
          "light.ceiling": {
            entity_id: "light.ceiling",
            device_id: "d1",
            next_name_part: "device",
          },
        },
        devices: {
          d1: {
            id: "d1",
            name: "Living Lamp",
            name_by_user: null,
            area_id: "living",
            entry_type: null,
          },
        },
      }),
      "light.ceiling",
    );
    expect(list).toEqual(["Living room", "Living Lamp", "Ceiling"]);
  });

  it("falls back to the friendly name without registry entry", () => {
    expect(computeEntityNameList(hass({}), "light.ceiling")).toEqual([
      "Living Lamp Ceiling",
    ]);
  });
});
