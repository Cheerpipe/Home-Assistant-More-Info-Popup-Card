import type { LovelaceCardConfig } from "./ha/types";
import type { EntityMatch } from "./match";

export const CARD_TYPE = "more-info-popup-card";
export const CARD_TAG = "more-info-popup-card";
export const DIALOG_TAG = "more-info-popup-dialog";
export const EDITOR_TAG = "more-info-popup-card-editor";

export type PopupMode = "auto" | "dialog" | "bottom_sheet" | "top_sheet";
export type PopupWidth = "small" | "medium" | "large" | "full" | "custom";
export type PopupHeight = "auto" | "custom";
export type NestedMoreInfo = "inline" | "dialog";

export interface PopupCardConfig extends LovelaceCardConfig {
  type: `custom:${typeof CARD_TYPE}`;
  popup_id: string;
  entity?: string;
  name?: string;
  icon?: string;
  /** "auto" (area ▸ device), "none", or a custom text. */
  breadcrumb?: string;
  mode?: PopupMode;
  width?: PopupWidth;
  custom_width?: string;
  height?: PopupHeight;
  min_height?: string;
  max_height?: string;
  column_span?: number;
  show_header_actions?: boolean;
  replace_more_info?: boolean;
  /** Template popup: the other entities whose more-info it replaces. */
  match?: EntityMatch;
  nested_more_info?: NestedMoreInfo;
  dismissable?: boolean;
  /** Seconds of inactivity before closing; 0 disables it. */
  auto_close?: number;
  keep_alive?: boolean;
  /** UIX styles (https://github.com/Lint-Free-Technology/uix) for the popup. */
  uix?: unknown;
  card_mod?: unknown;
  cards: LovelaceCardConfig[];
}

type OptionalKeys =
  | "entity"
  | "match"
  | "name"
  | "icon"
  | "custom_width"
  | "min_height"
  | "max_height"
  | "uix"
  | "card_mod";

export type ResolvedPopupConfig = Required<
  Omit<PopupCardConfig, OptionalKeys>
> &
  Pick<PopupCardConfig, OptionalKeys>;

export const DEFAULTS = {
  breadcrumb: "auto",
  mode: "auto",
  width: "medium",
  height: "auto",
  column_span: 1,
  show_header_actions: true,
  replace_more_info: false,
  nested_more_info: "inline",
  dismissable: true,
  auto_close: 0,
  keep_alive: false,
} as const satisfies Partial<PopupCardConfig>;

const MODES: PopupMode[] = ["auto", "dialog", "bottom_sheet", "top_sheet"];
const WIDTHS: PopupWidth[] = ["small", "medium", "large", "full", "custom"];
const HEIGHTS: PopupHeight[] = ["auto", "custom"];
const NESTED: NestedMoreInfo[] = ["inline", "dialog"];

export const POPUP_ID_PATTERN = /^[a-z0-9][a-z0-9_-]*$/;

/** CSS length accepted for custom sizes (px, %, vw, vh, dvh, svh, em, rem). */
const CSS_LENGTH = /^\d+(\.\d+)?(px|%|vw|vh|dvh|svh|lvh|em|rem)$/;

export const slugify = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "_")
    .replace(/^[_-]+|[_-]+$/g, "")
    .slice(0, 48);

const assertOneOf = <T extends string>(
  key: string,
  value: unknown,
  allowed: readonly T[],
) => {
  if (value !== undefined && !allowed.includes(value as T)) {
    throw new Error(`"${key}" must be one of: ${allowed.join(", ")}`);
  }
};

const assertLength = (key: string, value: unknown) => {
  if (value !== undefined && value !== "" && !CSS_LENGTH.test(String(value))) {
    throw new Error(`"${key}" must be a CSS length such as 720px or 80vh`);
  }
};

const MATCH_KEYS = ["integration", "domain", "entities", "entity_glob"];

const validateMatch = (match: unknown) => {
  if (match === undefined) return;
  if (!match || typeof match !== "object" || Array.isArray(match)) {
    throw new Error(`"match" must be an object with: ${MATCH_KEYS.join(", ")}`);
  }
  const m = match as Record<string, unknown>;
  const unknown = Object.keys(m).find((key) => !MATCH_KEYS.includes(key));
  if (unknown) {
    throw new Error(
      `Unknown "match.${unknown}"; use: ${MATCH_KEYS.join(", ")}`,
    );
  }
  if (!MATCH_KEYS.some((key) => m[key] !== undefined)) {
    throw new Error(`"match" needs one of: ${MATCH_KEYS.join(", ")}`);
  }
  for (const key of ["integration", "domain", "entity_glob"]) {
    if (m[key] !== undefined && (typeof m[key] !== "string" || !m[key])) {
      throw new Error(`"match.${key}" must be a text`);
    }
  }
  if (m.domain !== undefined && !/^[a-z0-9_]+$/.test(m.domain as string)) {
    throw new Error('"match.domain" must be a domain such as light');
  }
  if (
    m.entities !== undefined &&
    (!Array.isArray(m.entities) ||
      m.entities.some((id) => typeof id !== "string" || !id.includes(".")))
  ) {
    throw new Error('"match.entities" must be a list of entity IDs');
  }
};

/** Validates a user config; throws errors that HA shows in its error card. */
export const validateConfig = (config: unknown): PopupCardConfig => {
  if (!config || typeof config !== "object") {
    throw new Error("Invalid configuration");
  }
  const c = config as PopupCardConfig;
  if (!c.popup_id || typeof c.popup_id !== "string") {
    throw new Error('"popup_id" is required');
  }
  if (!POPUP_ID_PATTERN.test(c.popup_id)) {
    throw new Error(
      '"popup_id" may only contain lowercase letters, digits, "_" and "-"',
    );
  }
  if (
    c.entity !== undefined &&
    (typeof c.entity !== "string" || !c.entity.includes("."))
  ) {
    throw new Error('"entity" must be an entity ID');
  }
  validateMatch(c.match);
  if (c.cards !== undefined && !Array.isArray(c.cards)) {
    throw new Error('"cards" must be a list');
  }
  assertOneOf("mode", c.mode, MODES);
  assertOneOf("width", c.width, WIDTHS);
  assertOneOf("height", c.height, HEIGHTS);
  assertOneOf("nested_more_info", c.nested_more_info, NESTED);
  assertLength("custom_width", c.custom_width);
  assertLength("min_height", c.min_height);
  assertLength("max_height", c.max_height);
  if (
    c.column_span !== undefined &&
    (!Number.isInteger(c.column_span) || c.column_span < 1 || c.column_span > 4)
  ) {
    throw new Error('"column_span" must be an integer between 1 and 4');
  }
  if (
    c.auto_close !== undefined &&
    (typeof c.auto_close !== "number" || c.auto_close < 0)
  ) {
    throw new Error('"auto_close" must be a positive number of seconds');
  }
  return c;
};

export const resolveConfig = (
  config: PopupCardConfig,
): ResolvedPopupConfig => ({
  ...DEFAULTS,
  ...config,
  cards: config.cards ?? [],
});

/** Dialog width preset for the native components. */
export const dialogWidth = (
  config: ResolvedPopupConfig,
): "small" | "medium" | "large" | "full" => {
  if (config.width === "custom") return "medium";
  if (config.width === "medium" && config.column_span > 1) return "large";
  return config.width;
};

/** CSS custom properties that size the native dialog / bottom sheet. */
export const sizeStyles = (
  config: ResolvedPopupConfig,
): Record<string, string> => {
  const styles: Record<string, string> = {};
  if (config.width === "custom" && config.custom_width) {
    styles["--ha-dialog-width-md"] = config.custom_width;
    styles["--ha-bottom-sheet-max-width"] = config.custom_width;
  }
  if (config.height === "custom") {
    if (config.min_height) {
      styles["--ha-dialog-min-height"] = config.min_height;
      styles["--ha-bottom-sheet-height"] = config.min_height;
    }
    if (config.max_height) {
      styles["--ha-dialog-max-height"] = config.max_height;
      styles["--ha-bottom-sheet-max-height"] = config.max_height;
    }
  }
  return styles;
};

/** Config keys that HA interprets on any card and must keep their meaning. */
export const RESERVED_KEYS = [
  "visibility",
  "grid_options",
  "layout_options",
  "disabled",
  "view_layout",
];
