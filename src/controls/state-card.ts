/**
 * `custom:more-info-state-card`: the top of a native more-info dialog — the
 * state header ("Off · 3 hours ago") and the big control (toggle, brightness
 * slider, cover position, thermostat…) — as a composable card.
 */
import { css, html, LitElement, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { computeDomain, computeStateName } from "../ha/entity";
import type {
  HassEntity,
  HomeAssistant,
  LovelaceCardConfig,
  LovelaceGridOptions,
} from "../ha/types";
import { ensureMoreInfoElements } from "./loader";
import {
  autoStateControl,
  DOMAINS_WITHOUT_STATE_HEADER,
  STATE_CONTROLS,
  type StateControlName,
} from "./state-controls";
import { stateCardForm } from "./forms";
import { cardAppearanceStyles, type CardAppearance } from "./styles";

export const STATE_CARD_TYPE = "more-info-state-card";

export interface StateCardConfig extends LovelaceCardConfig {
  entity: string;
  /** "auto" (as more-info), "none", or a specific native control. */
  control?: "auto" | "none" | StateControlName;
  /** Defaults to the native behavior of the entity's domain. */
  show_state?: boolean;
  show_last_changed?: boolean;
  /** Replaces the state text of the header. */
  state_override?: string;
  appearance?: CardAppearance;
}

const CONTROL_ATTRIBUTES: Partial<Record<StateControlName, string[]>> = {
  temperature: ["show-secondary", "prevent-interaction-on-scroll"],
  climate_humidity: ["show-current", "prevent-interaction-on-scroll"],
  humidity: ["show-secondary", "prevent-interaction-on-scroll"],
  water_heater: ["show-current", "prevent-interaction-on-scroll"],
};

/** Header text the native controls show instead of the plain state. */
const autoStateOverride = (
  hass: HomeAssistant,
  stateObj: HassEntity,
): string | undefined => {
  const domain = computeDomain(stateObj.entity_id);
  const attrs = stateObj.attributes;
  if (
    domain === "light" &&
    stateObj.state === "on" &&
    attrs.brightness != null
  ) {
    return hass.formatEntityAttributeValue(stateObj, "brightness");
  }
  if (domain === "fan" && stateObj.state === "on" && attrs.percentage != null) {
    return hass.formatEntityAttributeValue(stateObj, "percentage");
  }
  if (
    (domain === "cover" || domain === "valve") &&
    attrs.current_position != null &&
    stateObj.state !== "unavailable"
  ) {
    return `${hass.formatEntityState(stateObj)} · ${hass.formatEntityAttributeValue(
      stateObj,
      "current_position",
    )}`;
  }
  return undefined;
};

export class MoreInfoStateCard extends LitElement {
  public static getConfigForm() {
    return stateCardForm();
  }

  public static getStubConfig(
    hass: HomeAssistant,
    entities: string[],
  ): StateCardConfig {
    const entity =
      entities.find((id) => id.startsWith("light.")) ??
      entities.find((id) => autoStateControl(hass.states[id]!)) ??
      entities[0];
    return { type: `custom:${STATE_CARD_TYPE}`, entity };
  }

  @property({ attribute: false }) accessor hass: HomeAssistant | undefined;

  /** Kept as given so UIX can read `uix:` / `card_mod:` from it. */
  @state() accessor _config: StateCardConfig | undefined;

  @state() accessor _ready = false;

  private _controlElement?: HTMLElement & {
    stateObj?: HassEntity;
    hass?: HomeAssistant;
  };

  private _controlTag?: string;

  public setConfig(config: StateCardConfig): void {
    if (!config?.entity) throw new Error('"entity" is required');
    if (
      config.control &&
      config.control !== "auto" &&
      config.control !== "none" &&
      !(config.control in STATE_CONTROLS)
    ) {
      throw new Error(`Unknown control "${config.control}"`);
    }
    this._config = config;
    this._ready = false;
    this._loadingKey = undefined;
  }

  public getCardSize(): number {
    return 7;
  }

  public getGridOptions(): LovelaceGridOptions {
    return { columns: 12, rows: "auto", min_columns: 6 };
  }

  private get _stateObj(): HassEntity | undefined {
    return this._config && this.hass?.states[this._config.entity];
  }

  private get _controlName(): StateControlName | undefined {
    const control = this._config?.control ?? "auto";
    if (control === "none") return undefined;
    if (control !== "auto") return control;
    return this._stateObj ? autoStateControl(this._stateObj) : undefined;
  }

  private _loadingKey?: string;

  protected override willUpdate(): void {
    if (this._ready || !this._config || !this._stateObj) return;
    const control = this._controlName;
    const spec = control ? STATE_CONTROLS[control] : undefined;
    const needsHeader =
      this._showState && this._config.show_last_changed !== false;
    const key = `${this._config.entity}:${control}:${needsHeader}`;
    if (key === this._loadingKey) return;
    this._loadingKey = key;
    const loads: Promise<boolean>[] = [];
    if (spec) loads.push(ensureMoreInfoElements(spec.load, [spec.tag]));
    // Climate, humidifier and water heater controls don't import the header:
    // load it from a domain whose more-info has one.
    if (needsHeader) {
      loads.push(
        ensureMoreInfoElements("switch", ["ha-more-info-state-header"]),
      );
    }
    Promise.all(loads).then(() => {
      if (this._loadingKey === key) this._ready = true;
    });
  }

  private get _showState(): boolean {
    const domain = computeDomain(this._config!.entity);
    return (
      this._config!.show_state ?? !DOMAINS_WITHOUT_STATE_HEADER.includes(domain)
    );
  }

  private _control(stateObj: HassEntity) {
    const name = this._controlName;
    if (!name) return nothing;
    const { tag } = STATE_CONTROLS[name];
    if (this._controlTag !== tag) {
      this._controlTag = tag;
      this._controlElement = document.createElement(tag);
      for (const attr of CONTROL_ATTRIBUTES[name] ?? []) {
        this._controlElement.setAttribute(attr, "");
      }
    }
    this._controlElement!.stateObj = stateObj;
    this._controlElement!.hass = this.hass;
    return this._controlElement;
  }

  private _header(stateObj: HassEntity) {
    const config = this._config!;
    if (!this._showState) return nothing;
    const override =
      config.state_override || autoStateOverride(this.hass!, stateObj);
    if (config.show_last_changed === false) {
      return html`<p class="state">
        ${override ?? this.hass!.formatEntityState(stateObj)}
      </p>`;
    }
    return html`
      <ha-more-info-state-header
        .hass=${this.hass}
        .stateObj=${stateObj}
        .stateOverride=${override}
      ></ha-more-info-state-header>
    `;
  }

  protected override render() {
    if (!this._config || !this.hass) return nothing;
    const stateObj = this._stateObj;
    const appearance = this._config.appearance ?? "plain";
    if (!stateObj) {
      return html`<ha-card class=${appearance}>
        <ha-alert alert-type="warning">
          ${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", {
            entity: this._config.entity,
          })}
        </ha-alert>
      </ha-card>`;
    }
    return html`
      <ha-card class=${appearance} .label=${computeStateName(stateObj)}>
        ${
          this._ready
            ? html`
                ${this._header(stateObj)}
                <div class="controls">${this._control(stateObj)}</div>
              `
            : nothing
        }
      </ha-card>
    `;
  }

  static override styles = [
    cardAppearanceStyles,
    css`
      ha-card {
        display: flex;
        flex-direction: column;
      }
      /* Spacing between the main control and the next block in more-info. */
      ha-card.plain {
        padding-bottom: var(--ha-space-4);
      }
      ha-card.card {
        padding: var(--ha-space-6) var(--ha-space-4);
      }
      /* more-info-control-style.ts */
      .controls {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
      }
      .controls > *:not(:last-child) {
        margin-bottom: var(--ha-space-6);
      }
      /* ha-more-info-state-header .state */
      p.state {
        text-align: center;
        margin: 0 0 var(--ha-space-5);
        font-weight: var(--ha-font-weight-normal);
        font-size: 36px;
        line-height: var(--ha-line-height-condensed);
      }
    `,
  ];
}

if (!customElements.get(STATE_CARD_TYPE)) {
  customElements.define(STATE_CARD_TYPE, MoreInfoStateCard);
}
