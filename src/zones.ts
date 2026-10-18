/**
 * Popup body layout. `layout: single` is one grid of cards; `layout: zones`
 * stacks a header, a main zone that takes the free height and a footer. In
 * the dialog the header and footer stay pinned while the main zone scrolls
 * between them. Each zone is its own native `hui-section`.
 */
import { css, html, type TemplateResult } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import type {
  HorizontalAlign,
  PopupLayout,
  PopupZoneConfig,
  VerticalAlign,
} from "./config";
import { DEFAULTS } from "./config";
import { setSectionAlign } from "./grid-align";
import type {
  HomeAssistant,
  LovelaceCardConfig,
  LovelaceSectionConfig,
} from "./ha/types";

export type ZoneId = "header" | "main" | "footer";

/** The part of a popup config that describes its body. */
export interface BodyConfig {
  cards?: LovelaceCardConfig[];
  layout?: PopupLayout;
  header?: PopupZoneConfig;
  footer?: PopupZoneConfig;
  vertical_align?: VerticalAlign;
  horizontal_align?: HorizontalAlign;
  column_span?: number;
  card_borders?: boolean;
}

export const ZONE_IDS: readonly ZoneId[] = ["header", "main", "footer"];

export interface Zone {
  id: ZoneId;
  cards: LovelaceCardConfig[];
  vertical_align: VerticalAlign;
  horizontal_align: HorizontalAlign;
  min_height?: string;
}

/** The zones of a popup, in order; `single` only has the main zone. */
export const popupZones = (config: BodyConfig): Zone[] => {
  const main: Zone = {
    id: "main",
    cards: config.cards ?? [],
    vertical_align: config.vertical_align ?? DEFAULTS.vertical_align,
    horizontal_align: config.horizontal_align ?? DEFAULTS.horizontal_align,
  };
  if (config.layout !== "zones") return [main];
  const side = (id: "header" | "footer"): Zone => ({
    id,
    cards: config[id]?.cards ?? [],
    vertical_align: config[id]?.vertical_align ?? "top",
    horizontal_align: config[id]?.horizontal_align ?? "left",
    min_height: config[id]?.min_height,
  });
  return [side("header"), main, side("footer")];
};

/** Cards of one zone (`main` is the top-level `cards`). */
export const zoneCards = (
  config: BodyConfig,
  id: ZoneId,
): LovelaceCardConfig[] =>
  (id === "main" ? config.cards : config[id]?.cards) ?? [];

/** The config with the cards of one zone replaced (empty zones dropped). */
export const withZoneCards = <T extends BodyConfig>(
  config: T,
  id: ZoneId,
  cards: LovelaceCardConfig[],
): T => {
  if (id === "main") return { ...config, cards };
  const zone: PopupZoneConfig = { ...config[id], cards };
  if (!cards.length) delete zone.cards;
  const next = { ...config, [id]: zone };
  if (!Object.keys(zone).length) delete next[id];
  return next;
};

/** Every card of the popup, in any zone. */
export const allCards = (config: BodyConfig): LovelaceCardConfig[] =>
  popupZones(config).flatMap((zone) => zone.cards);

export const zoneSectionConfig = (
  config: BodyConfig,
  cards: LovelaceCardConfig[],
): LovelaceSectionConfig => ({
  type: "grid",
  column_span: config.column_span ?? DEFAULTS.column_span,
  cards,
});

export type SectionElement = HTMLElement & {
  hass?: HomeAssistant;
  config?: LovelaceSectionConfig;
};

/** One `hui-section` per zone, reconfigured only when its cards change. */
export class ZoneSections {
  private readonly _sections = new Map<ZoneId, SectionElement>();

  private readonly _keys = new Map<ZoneId, string>();

  public update(
    config: BodyConfig,
    hass: HomeAssistant | undefined,
  ): Map<ZoneId, SectionElement> {
    const result = new Map<ZoneId, SectionElement>();
    for (const zone of popupZones(config)) {
      let section = this._sections.get(zone.id);
      if (!section) {
        section = document.createElement("hui-section") as SectionElement;
        this._sections.set(zone.id, section);
      }
      section.hass = hass;
      const sectionConfig = zoneSectionConfig(config, zone.cards);
      const key = JSON.stringify(sectionConfig);
      if (this._keys.get(zone.id) !== key) {
        this._keys.set(zone.id, key);
        section.config = sectionConfig;
      }
      setSectionAlign(section, zone.horizontal_align);
      result.set(zone.id, section);
    }
    return result;
  }

  public set hass(hass: HomeAssistant | undefined) {
    for (const section of this._sections.values()) section.hass = hass;
  }
}

/** Whether a zone is shown: the main zone always, the others with cards. */
export const zoneVisible = (zone: Zone): boolean =>
  zone.id === "main" || zone.cards.length > 0;

export interface BodyOptions {
  /** A child view covers the body (it stays rendered to keep its state). */
  hidden?: boolean;
  /** Dialog only: the main zone scrolls between the pinned zones. */
  onScroll?: (ev: Event) => void;
  fadeTop?: boolean;
  fadeBottom?: boolean;
}

const renderZone = (
  zone: Zone,
  section: SectionElement | undefined,
  onScroll?: (ev: Event) => void,
) => html`
  <div
    class="zone zone-${zone.id} align-${zone.vertical_align} ${
      onScroll ? "ha-scrollbar" : ""
    }"
    style=${styleMap({ "min-height": zone.min_height || undefined })}
    @scroll=${onScroll}
  >
    ${section}
  </div>
`;

/** The popup body (`.body`) for the dialog and the editor preview. */
export const renderBody = (
  config: BodyConfig,
  sections: Map<ZoneId, SectionElement>,
  options: BodyOptions = {},
): TemplateResult => {
  const zones = popupZones(config);
  const style = styleMap({
    "--column-span": String(config.column_span ?? DEFAULTS.column_span),
  });
  const borderless = config.card_borders === false;
  if (config.layout !== "zones") {
    const [main] = zones;
    return html`
      <div
        class=${classMap({
          body: true,
          [`align-${main!.vertical_align}`]: true,
          borderless,
        })}
        ?hidden=${options.hidden ?? false}
        style=${style}
      >
        ${sections.get("main")}
      </div>
    `;
  }
  return html`
    <div
      class=${classMap({ body: true, zones: true, borderless })}
      ?hidden=${options.hidden ?? false}
      style=${style}
    >
      ${zones.filter(zoneVisible).map((zone) =>
        zone.id !== "main"
          ? renderZone(zone, sections.get(zone.id))
          : html`
              <div class="zone-main-frame">
                ${renderZone(zone, sections.get(zone.id), options.onScroll)}
                ${
                  options.onScroll
                    ? html`
                        <div
                          class=${classMap({
                            "fade-top": true,
                            visible: Boolean(options.fadeTop),
                          })}
                        ></div>
                        <div
                          class=${classMap({
                            "fade-bottom": true,
                            visible: Boolean(options.fadeBottom),
                          })}
                        ></div>
                      `
                    : ""
                }
              </div>
            `,
      )}
    </div>
  `;
};

/**
 * Layout of `.body.zones`. The main zone takes the free height; in the dialog
 * (where the body is as tall as the popup) it is the only part that scrolls.
 */
export const zoneStyles = css`
  .body.zones {
    padding: 0;
  }
  .zone {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: var(--ha-space-3) var(--ha-space-6);
  }
  .zone-header {
    flex: none;
    padding-top: var(--ha-space-6);
  }
  .zone-footer {
    flex: none;
    padding-bottom: max(var(--safe-area-inset-bottom), var(--ha-space-6));
  }
  .zone-main-frame {
    position: relative;
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
  }
  .zone-main {
    flex: 1 1 auto;
    min-height: 0;
    overflow: auto;
  }
  .zone-main-frame:first-child .zone-main {
    padding-top: var(--ha-space-6);
  }
  .zone-main-frame:last-child .zone-main {
    padding-bottom: max(var(--safe-area-inset-bottom), var(--ha-space-6));
  }
  /* Auto margins (not justify-content) keep the top of a main zone taller
     than the popup reachable by scrolling. */
  .zone.align-center > hui-section {
    margin-block: auto;
  }
  .zone.align-bottom > hui-section {
    margin-top: auto;
  }
  .zone hui-section {
    display: block;
    width: 100%;
  }
`;
