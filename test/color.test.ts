import { describe, expect, it } from "vitest";
import { computeCssColor, stateColorVars } from "../src/ha/color";
import type { HassEntity } from "../src/ha/types";

const entity = (
  entity_id: string,
  state: string,
  attributes: Record<string, unknown> = {},
) => ({ entity_id, state, attributes }) as unknown as HassEntity;

describe("computeCssColor", () => {
  it.each([
    ["red", "var(--red-color)"],
    ["light-blue", "var(--light-blue-color)"],
    ["primary", "var(--primary-color)"],
    ["#ff0000", "#ff0000"],
    ["rgb(1, 2, 3)", "rgb(1, 2, 3)"],
  ])("%s → %s", (color, expected) => {
    expect(computeCssColor(color)).toBe(expected);
  });
});

describe("stateColorVars", () => {
  it("sets the active variables and the current state's", () => {
    expect(stateColorVars(entity("switch.a", "on"), "red")).toEqual({
      "--state-active-color": "var(--red-color)",
      "--state-switch-active-color": "var(--red-color)",
      "--state-switch-on-color": "var(--red-color)",
    });
  });

  it("colors the current inactive state with color_off", () => {
    const vars = stateColorVars(
      entity("lock.a", "locked"),
      "orange",
      "#123456",
    );
    expect(vars["--state-lock-locked-color"]).toBe("#123456");
    expect(vars["--state-lock-active-color"]).toBe("var(--orange-color)");
    expect(vars["--state-lock-inactive-color"]).toBe("#123456");
  });

  it("covers device class variables", () => {
    const vars = stateColorVars(
      entity("cover.a", "open", { device_class: "garage" }),
      "green",
    );
    expect(vars["--state-cover-garage-open-color"]).toBe("var(--green-color)");
  });

  it("sets nothing without colors", () => {
    expect(stateColorVars(entity("light.a", "on"))).toEqual({});
  });
});
