/**
 * Effect picker of the WLED card: a search field, category filters (strip,
 * matrix, audio reactive, palette) and the list of effects with their
 * category icons, like WLED's own effect list. Inside a popup it is a child
 * view (`show-child-view`, back arrow in the header); elsewhere the card
 * shows it inline.
 */
import {
  mdiCheck,
  mdiGrid,
  mdiLedStripVariant,
  mdiMagnify,
  mdiPalette,
  mdiVectorSquare,
  mdiVolumeHigh,
  mdiWaveform,
} from "@mdi/js";
import { css, html, LitElement, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { fireEvent } from "../ha/fire-event";
import type { HomeAssistant } from "../ha/types";
import { localize, type TranslationKey } from "../localize/localize";
import { blockedByMixedContent, loadCatalog } from "./api";
import { parseEffects, type EffectCategory, type EffectMeta } from "./meta";

export const EFFECT_PICKER_TAG = "more-info-wled-effect-picker";

export interface EffectPickerParams {
  entityId: string;
  host?: string;
  /** Current effect when HA has none (the light is off). */
  current?: string;
}

type Filter = "all" | EffectCategory | "palette";

const FILTERS: Filter[] = [
  "all",
  "1d",
  "2d",
  "1.5d",
  "volume",
  "frequency",
  "palette",
];

export const CATEGORY_ICONS: Partial<Record<Filter, string>> = {
  "1d": mdiLedStripVariant,
  "2d": mdiGrid,
  "1.5d": mdiVectorSquare,
  volume: mdiVolumeHigh,
  frequency: mdiWaveform,
  palette: mdiPalette,
};

/** Parsed effects per device, shared by the card and the picker. */
const effectsByHost = new Map<string, Promise<EffectMeta[]>>();

export const loadEffects = (host: string): Promise<EffectMeta[]> => {
  let effects = effectsByHost.get(host);
  if (!effects) {
    effects = loadCatalog(host).then((catalog) =>
      parseEffects(catalog.effectNames, catalog.fxdata),
    );
    effectsByHost.set(host, effects);
    effects.catch(() => effectsByHost.delete(host));
  }
  return effects;
};

export class MoreInfoWledEffectPicker extends LitElement {
  @property({ attribute: false }) accessor hass: HomeAssistant | undefined;

  /** Set by the popup for a child view, or by the card inline. */
  @property({ attribute: false }) accessor params:
    EffectPickerParams | undefined;

  @state() accessor _effects: Map<string, EffectMeta> | undefined;

  @state() accessor _filter: Filter = "all";

  @state() accessor _search = "";

  private _loadedHost?: string;

  protected override willUpdate(): void {
    const host = this.params?.host;
    if (!host || host === this._loadedHost || blockedByMixedContent(host)) {
      return;
    }
    this._loadedHost = host;
    loadEffects(host).then(
      (effects) => {
        this._effects = new Map(effects.map((fx) => [fx.name, fx]));
      },
      () => undefined,
    );
  }

  private _t(key: TranslationKey) {
    return localize(this.hass, key);
  }

  private _select(name: string) {
    const entityId = this.params!.entityId;
    this.hass!.callService("light", "turn_on", {
      entity_id: entityId,
      effect: name,
    });
    fireEvent(this, "wled-effect-picked", { effect: name });
    fireEvent(this, "close-child-view");
  }

  private _matches(name: string): boolean {
    if (this._search && !name.toLowerCase().includes(this._search)) {
      return false;
    }
    if (this._filter === "all") return true;
    const meta = this._effects?.get(name);
    if (!meta) return false;
    return this._filter === "palette"
      ? meta.palette
      : meta.categories.includes(this._filter);
  }

  protected override render() {
    const hass = this.hass;
    const entityId = this.params?.entityId;
    const stateObj = entityId ? hass?.states[entityId] : undefined;
    if (!hass || !stateObj) return nothing;
    const names: string[] = stateObj.attributes.effect_list ?? [];
    const current: string | undefined =
      stateObj.attributes.effect ?? this.params?.current;
    const metas = this._effects;
    // Only categories some effect of this device has.
    const filters = metas
      ? FILTERS.filter(
          (filter) =>
            filter === "all" ||
            [...metas.values()].some((meta) =>
              filter === "palette"
                ? meta.palette
                : meta.categories.includes(filter),
            ),
        )
      : [];
    const visible = names.filter((name) => this._matches(name));
    return html`
      <div class="search">
        <ha-svg-icon .path=${mdiMagnify}></ha-svg-icon>
        <input
          type="search"
          .value=${this._search}
          placeholder=${this._t("wled.search")}
          aria-label=${this._t("wled.search")}
          @input=${(ev: Event) => {
            this._search = (ev.target as HTMLInputElement).value
              .trim()
              .toLowerCase();
          }}
        />
      </div>
      ${
        filters.length > 1
          ? html`<div class="filters" role="toolbar">
              ${filters.map(
                (filter) => html`
                  <button
                    class=${classMap({ filter: true, selected: this._filter === filter })}
                    aria-pressed=${this._filter === filter}
                    @click=${() => {
                      this._filter = filter;
                    }}
                  >
                    ${
                      CATEGORY_ICONS[filter]
                        ? html`<ha-svg-icon
                            .path=${CATEGORY_ICONS[filter]}
                          ></ha-svg-icon>`
                        : nothing
                    }
                    ${this._t(`wled.filter.${filter}` as TranslationKey)}
                  </button>
                `,
              )}
            </div>`
          : nothing
      }
      <div class="list" role="listbox">
        ${visible.map((name) => {
          const meta = metas?.get(name);
          const selected = name === current;
          return html`
            <button
              class=${classMap({ row: true, selected })}
              role="option"
              aria-selected=${selected}
              @click=${() => this._select(name)}
            >
              <span class="name">${name}</span>
              <span class="tags">
                ${[
                  ...(meta?.categories ?? []).filter((c) => c !== "0d"),
                  ...(meta?.palette ? (["palette"] as const) : []),
                ].map(
                  (tag) =>
                    html`<ha-svg-icon
                      title=${this._t(`wled.filter.${tag}` as TranslationKey)}
                      .path=${CATEGORY_ICONS[tag]!}
                    ></ha-svg-icon>`,
                )}
              </span>
              <ha-svg-icon
                class="check"
                .path=${selected ? mdiCheck : ""}
              ></ha-svg-icon>
            </button>
          `;
        })}
        ${
          visible.length
            ? nothing
            : html`<p class="empty">${this._t("wled.no_effects")}</p>`
        }
      </div>
    `;
  }

  static override styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--ha-space-3);
      padding: var(--ha-space-4) var(--ha-space-6) var(--ha-space-6);
      box-sizing: border-box;
    }
    :host([inline]) {
      padding: 0;
    }
    /* Search field like HA's search-input. */
    .search,
    .filters,
    .row {
      flex-shrink: 0;
    }
    .search {
      display: flex;
      align-items: center;
      gap: var(--ha-space-2);
      height: 48px;
      padding: 0 var(--ha-space-3);
      border-radius: var(--ha-border-radius-lg);
      background: var(
        --ha-color-fill-neutral-quiet-resting,
        rgba(139, 145, 151, 0.1)
      );
      color: var(--secondary-text-color);
      --mdc-icon-size: 20px;
    }
    .search input {
      flex: 1;
      min-width: 0;
      border: none;
      outline: none;
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      font-size: var(--ha-font-size-m);
    }
    /* Filter chips like ha-filter-chip. */
    /* One row that scrolls sideways, like HA's chip rows. */
    .filters {
      display: flex;
      gap: var(--ha-space-2);
      overflow-x: auto;
      scrollbar-width: none;
    }
    .filters::-webkit-scrollbar {
      display: none;
    }
    .filter {
      display: inline-flex;
      align-items: center;
      gap: var(--ha-space-1);
      flex: none;
      height: 32px;
      padding: 0 var(--ha-space-3);
      border: 1px solid var(--outline-color, var(--divider-color));
      border-radius: var(--ha-border-radius-md);
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      font-size: var(--ha-font-size-s);
      font-weight: var(--ha-font-weight-medium);
      cursor: pointer;
      --mdc-icon-size: 18px;
    }
    .filter.selected {
      border-color: transparent;
      background: var(
        --ha-color-fill-primary-normal-resting,
        rgba(var(--rgb-primary-color), 0.2)
      );
      color: var(--ha-color-on-primary-normal, var(--primary-color));
    }
    .list {
      display: flex;
      flex-direction: column;
    }
    .row {
      display: flex;
      align-items: center;
      gap: var(--ha-space-3);
      min-height: 48px;
      padding: 0 var(--ha-space-3);
      border: none;
      border-radius: var(--ha-border-radius-md);
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      font-size: var(--ha-font-size-m);
      text-align: start;
      cursor: pointer;
      --mdc-icon-size: 18px;
    }
    .row:hover,
    .row:focus-visible {
      background: var(
        --ha-color-fill-neutral-quiet-hover,
        rgba(139, 145, 151, 0.12)
      );
      outline: none;
    }
    .row.selected {
      color: var(--primary-color);
      font-weight: var(--ha-font-weight-medium);
    }
    .name {
      flex: 1;
    }
    .tags {
      display: flex;
      gap: var(--ha-space-1);
      color: var(--secondary-text-color);
    }
    .check {
      --mdc-icon-size: 20px;
      width: 20px;
    }
    .empty {
      margin: var(--ha-space-4) 0;
      text-align: center;
      color: var(--secondary-text-color);
    }
  `;
}

if (!customElements.get(EFFECT_PICKER_TAG)) {
  customElements.define(EFFECT_PICKER_TAG, MoreInfoWledEffectPicker);
}
