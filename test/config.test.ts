import { describe, expect, it } from "vitest";
import {
  dialogWidth,
  resolveConfig,
  sizeStyles,
  slugify,
  validateConfig,
  type PopupCardConfig,
} from "../src/config";

const base = {
  type: "custom:more-info-popup-card",
  popup_id: "living_room",
  cards: [],
} as PopupCardConfig;

describe("validateConfig", () => {
  it("accepts a minimal config", () => {
    expect(validateConfig(base)).toBe(base);
  });

  it.each([
    [{ popup_id: undefined }, /required/],
    [{ popup_id: "Salón" }, /lowercase/],
    [{ entity: "light" }, /entity ID/],
    [{ mode: "drawer" }, /mode/],
    [{ width: "huge" }, /width/],
    [{ custom_width: "wide" }, /CSS length/],
    [{ column_span: 0 }, /column_span/],
    [{ auto_close: -1 }, /auto_close/],
    [{ cards: {} }, /list/],
  ])("rejects %o", (patch, error) => {
    expect(() => validateConfig({ ...base, ...patch })).toThrow(error);
  });

  it("accepts CSS lengths", () => {
    expect(() =>
      validateConfig({
        ...base,
        custom_width: "720px",
        min_height: "40dvh",
        max_height: "90%",
      }),
    ).not.toThrow();
  });
});

describe("resolveConfig", () => {
  it("applies defaults without overriding user values", () => {
    const resolved = resolveConfig({ ...base, mode: "bottom_sheet" });
    expect(resolved.mode).toBe("bottom_sheet");
    expect(resolveConfig({ ...base, mode: "top_sheet" }).mode).toBe(
      "top_sheet",
    );
    expect(resolved.width).toBe("medium");
    expect(resolved.dismissable).toBe(true);
    expect(resolved.nested_more_info).toBe("inline");
  });
});

describe("sizing", () => {
  it("uses a large dialog for wide grids", () => {
    expect(dialogWidth(resolveConfig({ ...base, column_span: 2 }))).toBe(
      "large",
    );
    expect(dialogWidth(resolveConfig({ ...base, width: "small" }))).toBe(
      "small",
    );
  });

  it("maps custom sizes to native CSS variables", () => {
    const styles = sizeStyles(
      resolveConfig({
        ...base,
        width: "custom",
        custom_width: "720px",
        height: "custom",
        max_height: "80vh",
      }),
    );
    expect(styles).toEqual({
      "--ha-dialog-width-md": "720px",
      "--ha-bottom-sheet-max-width": "720px",
      "--ha-dialog-max-height": "80vh",
      "--ha-bottom-sheet-max-height": "80vh",
    });
  });
});

describe("slugify", () => {
  it("creates valid popup ids", () => {
    expect(slugify("Salón principal")).toBe("salon_principal");
    expect(slugify("  --Luz #1  ")).toBe("luz_1");
  });
});
