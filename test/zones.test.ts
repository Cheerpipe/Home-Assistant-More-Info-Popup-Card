import { describe, expect, it } from "vitest";
import { resolveConfig, type PopupCardConfig } from "../src/config";
import { bindEntity } from "../src/match";
import { allCards, popupZones, withZoneCards } from "../src/zones";

const tile = (entity: string) => ({ type: "tile", entity });

const zoned = {
  type: "custom:more-info-popup-card",
  popup_id: "room",
  layout: "zones",
  vertical_align: "center",
  header: { cards: [tile("light.a")], horizontal_align: "right" },
  footer: { cards: [tile("light.c")], min_height: "80px" },
  cards: [tile("light.b")],
} as PopupCardConfig;

describe("popupZones", () => {
  it("has only the main zone with one zone", () => {
    const zones = popupZones({ ...zoned, layout: "single" });
    expect(zones.map((zone) => zone.id)).toEqual(["main"]);
    expect(zones[0]).toMatchObject({ vertical_align: "center" });
  });

  it("orders header, main and footer with their options", () => {
    const zones = popupZones(zoned);
    expect(zones.map((zone) => zone.id)).toEqual(["header", "main", "footer"]);
    expect(zones[0]).toMatchObject({
      horizontal_align: "right",
      vertical_align: "top",
    });
    expect(zones[2]).toMatchObject({ min_height: "80px" });
    expect(allCards(zoned)).toHaveLength(3);
  });
});

describe("withZoneCards", () => {
  it("replaces the cards of a zone", () => {
    const next = withZoneCards(zoned, "header", [tile("light.x")]);
    expect(next.header).toEqual({
      cards: [tile("light.x")],
      horizontal_align: "right",
    });
    expect(withZoneCards(zoned, "main", []).cards).toEqual([]);
  });

  it("drops an empty zone from the YAML", () => {
    const next = withZoneCards(
      { ...zoned, header: { cards: [] } },
      "header",
      [],
    );
    expect(next).not.toHaveProperty("header");
    expect(withZoneCards(zoned, "footer", []).footer).toEqual({
      min_height: "80px",
    });
  });
});

describe("bindEntity", () => {
  it("fills entity: this in every zone", () => {
    const config = resolveConfig({
      ...zoned,
      header: { cards: [tile("this")] },
      footer: { cards: [tile("this")] },
      cards: [tile("this")],
    });
    const bound = bindEntity(config, "light.z");
    expect(allCards(bound).map((card) => card.entity)).toEqual([
      "light.z",
      "light.z",
      "light.z",
    ]);
  });
});
