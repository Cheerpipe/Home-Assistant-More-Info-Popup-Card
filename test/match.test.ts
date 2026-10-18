import { describe, expect, it } from "vitest";
import { resolveConfig, type PopupCardConfig } from "../src/config";
import {
  bindEntity,
  cleanMatch,
  globToRegExp,
  matchScore,
  resolveThisEntity,
} from "../src/match";

const config = (patch: Partial<PopupCardConfig> = {}) =>
  resolveConfig({
    type: "custom:more-info-popup-card",
    popup_id: "wled",
    replace_more_info: true,
    cards: [],
    ...patch,
  } as PopupCardConfig);

describe("globToRegExp", () => {
  it("supports * and ? and escapes the rest", () => {
    expect(globToRegExp("light.wled_*").test("light.wled_segment_1")).toBe(
      true,
    );
    expect(globToRegExp("light.wled_*").test("lightXwled_a")).toBe(false);
    expect(globToRegExp("light.a?").test("light.ab")).toBe(true);
    expect(globToRegExp("light.a?").test("light.abc")).toBe(false);
  });
});

describe("matchScore", () => {
  it("needs every filter to match", () => {
    const c = config({ match: { domain: "light", entity_glob: "*.wled*" } });
    expect(matchScore(c, "light.wled")).toBe(2);
    expect(matchScore(c, "switch.wled")).toBe(-1);
  });

  it("does not match an integration without the entity registry", () => {
    expect(
      matchScore(config({ match: { integration: "wled" } }), "light.a"),
    ).toBe(-1);
  });
});

describe("resolveThisEntity", () => {
  it("replaces entity: this at any depth", () => {
    const cards = [
      { type: "custom:more-info-wled-state-card", entity: "this" },
      {
        type: "vertical-stack",
        cards: [{ type: "tile", entity: "this", name: "this" }],
      },
      { type: "entities", entities: ["this", { entity: "this" }, "light.x"] },
      {
        type: "button",
        tap_action: {
          action: "perform-action",
          target: { entity_id: ["this", "light.x"] },
        },
      },
    ];
    expect(resolveThisEntity(cards, "light.wled")).toEqual([
      { type: "custom:more-info-wled-state-card", entity: "light.wled" },
      {
        type: "vertical-stack",
        cards: [{ type: "tile", entity: "light.wled", name: "this" }],
      },
      {
        type: "entities",
        entities: ["light.wled", { entity: "light.wled" }, "light.x"],
      },
      {
        type: "button",
        tap_action: {
          action: "perform-action",
          target: { entity_id: ["light.wled", "light.x"] },
        },
      },
    ]);
  });

  it("leaves the cards untouched without an entity", () => {
    const cards = [{ type: "tile", entity: "this" }];
    expect(resolveThisEntity(cards, undefined)).toBe(cards);
  });
});

describe("bindEntity", () => {
  const cards = [{ type: "tile", entity: "this" }];

  it("makes the opened entity the popup's entity", () => {
    const bound = bindEntity(config({ cards }), "light.wled_segment_1");
    expect(bound.entity).toBe("light.wled_segment_1");
    expect(bound.cards).toEqual([
      { type: "tile", entity: "light.wled_segment_1" },
    ]);
  });

  it("falls back to the configured entity", () => {
    const bound = bindEntity(
      config({ cards, entity: "light.wled" }),
      undefined,
    );
    expect(bound.entity).toBe("light.wled");
    expect(bound.cards).toEqual([{ type: "tile", entity: "light.wled" }]);
  });
});

describe("cleanMatch", () => {
  it("drops empty criteria", () => {
    expect(cleanMatch({ integration: "", entities: [] })).toBeUndefined();
    expect(cleanMatch({ domain: "light", entities: [] })).toEqual({
      domain: "light",
    });
  });
});
