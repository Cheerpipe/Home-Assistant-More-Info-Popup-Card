/**
 * Template popups: one popup that replaces the native more-info of a whole
 * set of entities (`match:`), with `entity: this` in its cards replaced by
 * the entity that was opened.
 */
import type { ResolvedPopupConfig } from "./config";
import type { HomeAssistant, LovelaceCardConfig } from "./ha/types";

export interface EntityMatch {
  /** Integration that provides the entity (entity registry `platform`). */
  integration?: string;
  domain?: string;
  /** Explicit list; always matches, whatever the other criteria say. */
  entities?: string[];
  /** Entity ID pattern; `*` matches any text and `?` one character. */
  entity_glob?: string;
}

export const THIS_ENTITY = "this";

/** Keys whose `this` value is replaced by the opened entity. */
const ENTITY_KEYS = new Set(["entity", "entity_id"]);
const LIST_KEYS = new Set(["entities", "entity_id"]);

const SCORE_EXACT = 100;
const SCORE_LISTED = 10;

const globCache = new Map<string, RegExp>();

export const globToRegExp = (glob: string): RegExp => {
  let re = globCache.get(glob);
  if (!re) {
    const source = glob
      .split("")
      .map((char) =>
        char === "*"
          ? ".*"
          : char === "?"
            ? "."
            : char.replace(/[.+^${}()|[\]\\]/g, "\\$&"),
      )
      .join("");
    re = new RegExp(`^${source}$`);
    globCache.set(glob, re);
  }
  return re;
};

/**
 * How well a `replace_more_info` popup fits an entity: -1 when it does not
 * replace its more-info, otherwise higher is more specific. Its own `entity`
 * beats an explicit `match.entities` entry, which beats the filters
 * (`integration`, `domain`, `entity_glob`, all of them required), ranked by
 * how many are set.
 */
export const matchScore = (
  config: ResolvedPopupConfig,
  entityId: string,
  hass?: HomeAssistant,
): number => {
  if (!config.replace_more_info) return -1;
  if (config.entity === entityId) return SCORE_EXACT;
  const match = config.match;
  if (!match) return -1;
  if (match.entities?.includes(entityId)) return SCORE_LISTED;
  const filters = [
    match.integration === undefined ||
      hass?.entities?.[entityId]?.platform === match.integration,
    match.domain === undefined || entityId.split(".")[0] === match.domain,
    match.entity_glob === undefined ||
      globToRegExp(match.entity_glob).test(entityId),
  ];
  const count = [match.integration, match.domain, match.entity_glob].filter(
    (value) => value !== undefined,
  ).length;
  return count && filters.every(Boolean) ? count : -1;
};

/** Entities of `hass` that a template popup applies to (editor preview). */
export const matchingEntities = (
  config: ResolvedPopupConfig,
  hass: HomeAssistant,
): string[] =>
  Object.keys(hass.states).filter(
    (entityId) => matchScore(config, entityId, hass) > 0,
  );

const replaceThis = (
  value: unknown,
  key: string,
  entityId: string,
): unknown => {
  if (value === THIS_ENTITY && ENTITY_KEYS.has(key)) return entityId;
  if (Array.isArray(value)) {
    return value.map((item) =>
      item === THIS_ENTITY && LIST_KEYS.has(key)
        ? entityId
        : replaceThis(item, "", entityId),
    );
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, replaceThis(v, k, entityId)]),
    );
  }
  return value;
};

/**
 * Replaces `entity: this` (also `entity_id`, and `this` items of `entities`
 * lists) at any depth of the card configs.
 */
export const resolveThisEntity = (
  cards: LovelaceCardConfig[],
  entityId: string | undefined,
): LovelaceCardConfig[] =>
  entityId ? (replaceThis(cards, "", entityId) as LovelaceCardConfig[]) : cards;

/**
 * The popup as opened for an entity: that entity becomes the popup's entity
 * (header, history, settings, menu) and fills the `this` placeholders.
 */
export const bindEntity = (
  config: ResolvedPopupConfig,
  entityId: string | undefined,
): ResolvedPopupConfig => {
  if (!entityId || entityId === config.entity) {
    return { ...config, cards: resolveThisEntity(config.cards, config.entity) };
  }
  return {
    ...config,
    entity: entityId,
    cards: resolveThisEntity(config.cards, entityId),
  };
};

/** Drops empty criteria (editor); undefined when nothing is left. */
export const cleanMatch = (match: unknown): EntityMatch | undefined => {
  if (!match || typeof match !== "object") return undefined;
  const entries = Object.entries(match).filter(
    ([, value]) =>
      value !== undefined &&
      value !== null &&
      value !== "" &&
      !(Array.isArray(value) && !value.length),
  );
  return entries.length
    ? (Object.fromEntries(entries) as EntityMatch)
    : undefined;
};
