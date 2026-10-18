/**
 * `custom:more-info-state-card`: the top of a native more-info dialog — the
 * state header ("Off · 3 hours ago") and the big control (toggle, brightness
 * slider, cover position, thermostat…) — as a composable card.
 */
import {
  mdiFan,
  mdiFanOff,
  mdiGestureTapButton,
  mdiPlay,
  mdiPower,
  mdiStop,
} from "@mdi/js";
import { css, html, LitElement, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { computeDomain, computeObjectId, computeStateName } from "../ha/entity";
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
  supports,
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

/** `FanEntityFeature` (`src/data/fan.ts`). */
const FAN_TURN_OFF = 16;
const FAN_TURN_ON = 32;
/** `FAN_SPEED_COUNT_MAX_FOR_BUTTONS`: more speeds use a slider. */
const FAN_SPEED_COUNT_MAX_FOR_BUTTONS = 6;

const fanSpeedCount = (stateObj: HassEntity): number =>
  Math.round(100 / (stateObj.attributes.percentage_step ?? 1)) + 1;

const SCRIPT_MAX_MODES = ["queued", "parallel"];

/** `canRun` (`src/data/script.ts`). */
const scriptCanRun = (stateObj: HassEntity): boolean =>
  stateObj.state === "off" ||
  (stateObj.state === "on" &&
    SCRIPT_MAX_MODES.includes(stateObj.attributes.mode) &&
    stateObj.attributes.current < stateObj.attributes.max);

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
  if (domain === "fan" && stateObj.state === "on" && attrs.percentage) {
    return hass.formatEntityAttributeValue(stateObj, "percentage");
  }
  if (domain === "script") {
    const current = attrs.current || 0;
    if (!current) return hass.localize("ui.card.script.idle");
    return attrs.mode === "parallel" && current > 1
      ? hass.localize("ui.card.script.running_parallel", { active: current })
      : hass.localize("ui.card.script.running_single");
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

  /** Value of the script fields form (`{ action, data }`). */
  @state() accessor _scriptData: {
    action?: string;
    data?: Record<string, unknown>;
  } = {};

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
    this._scriptData = { action: config.entity };
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
    if (spec) {
      const extra: readonly string[] =
        "extraTags" in spec ? spec.extraTags : [];
      loads.push(ensureMoreInfoElements(spec.load, [spec.tag, ...extra]));
    }
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
    if (name === "script") return this._script(stateObj);
    if (name === "press") return this._press(stateObj);
    const { tag } = STATE_CONTROLS[name];
    if (this._controlTag !== tag) {
      this._controlTag = tag;
      this._controlElement = document.createElement(tag);
      for (const attr of CONTROL_ATTRIBUTES[name] ?? []) {
        this._controlElement.setAttribute(attr, "");
      }
    }
    const element = this._controlElement! as HTMLElement & {
      stateObj?: HassEntity;
      hass?: HomeAssistant;
      iconPathOn?: string;
      iconPathOff?: string;
    };
    element.stateObj = stateObj;
    element.hass = this.hass;
    const isFan = computeDomain(stateObj.entity_id) === "fan";
    if (name === "toggle") {
      element.iconPathOn = isFan ? mdiFan : undefined;
      element.iconPathOff = isFan ? mdiFanOff : undefined;
    }
    if (
      name === "fan_speed" &&
      isFan &&
      fanSpeedCount(stateObj) > FAN_SPEED_COUNT_MAX_FOR_BUTTONS &&
      supports(stateObj, FAN_TURN_ON | FAN_TURN_OFF)
    ) {
      return html`${element}${this._fanPowerButton(stateObj)}`;
    }
    return element;
  }

  /** On/off button under the fan speed slider (`more-info-fan.ts`). */
  private _fanPowerButton(stateObj: HassEntity) {
    const toggle = () =>
      this.hass!.callService(
        "fan",
        stateObj.state === "on" ? "turn_off" : "turn_on",
        { entity_id: stateObj.entity_id },
      );
    return html`
      <div class="buttons">
        <ha-outlined-icon-button
          .disabled=${stateObj.state === "unavailable"}
          @click=${toggle}
        >
          <ha-svg-icon .path=${mdiPower}></ha-svg-icon>
        </ha-outlined-icon-button>
      </div>
    `;
  }

  /** Same content as `more-info-script.ts`, below the state header. */
  private _script(stateObj: HassEntity) {
    const hass = this.hass!;
    const objectId = computeObjectId(stateObj.entity_id);
    const script = hass.services?.script?.[objectId];
    const fields = script?.fields ?? {};
    const hasFields = Object.keys(fields).length > 0;
    const current: number = stateObj.attributes.current || 0;
    const mode = stateObj.attributes.mode;
    const isQueued = mode === "queued";
    const isParallel = mode === "parallel";
    const hasQueue = isQueued && current > 1;
    const data = this._scriptData.data;
    const requiredFilled = Object.entries(fields).every(
      ([key, field]) => !field.required || data?.[key] !== undefined,
    );
    const hasRequired = Object.values(fields).some((field) => field.required);
    const canRun =
      !hasRequired ||
      (requiredFilled && scriptCanRun(stateObj)) ||
      mode === "restart";

    const run = (ev: Event) => {
      ev.stopPropagation();
      hass.callService("script", objectId, this._scriptData.data);
    };
    const cancel = (ev: Event) => {
      ev.stopPropagation();
      hass.callService("script", "turn_off", {
        entity_id: stateObj.entity_id,
      });
    };
    const fieldsChanged = (ev: CustomEvent<{ value: object }>) => {
      this._scriptData = { ...this._scriptData, ...ev.detail.value };
    };

    return html`
      <div class="script">
        ${
          script?.description
            ? html`<ha-markdown
                breaks
                .content=${script.description}
              ></ha-markdown>`
            : nothing
        }
        <div class="queue ${hasQueue ? "has-queue" : ""}">
          ${
            hasQueue
              ? hass.localize("ui.card.script.running_queued", {
                  queued: current - 1,
                })
              : ""
          }
        </div>
        ${
          hasFields
            ? html`
                <div class="fields">
                  <div class="title">
                    ${hass.localize("ui.card.script.run_script")}
                  </div>
                  <ha-service-control
                    hide-picker
                    hide-description
                    .hass=${hass}
                    .value=${this._scriptData}
                    .narrow=${window.matchMedia("(max-width: 870px)").matches}
                    @value-changed=${fieldsChanged}
                  ></ha-service-control>
                </div>
              `
            : nothing
        }
        <ha-control-button-group>
          <ha-control-button
            class="cancel-button"
            .disabled=${!current}
            @click=${cancel}
          >
            <ha-svg-icon .path=${mdiStop}></ha-svg-icon>
            ${
              (isQueued || isParallel) && current > 1
                ? hass.localize("ui.card.script.cancel_all")
                : hass.localize("ui.card.script.cancel")
            }
          </ha-control-button>
          <ha-control-button
            class="run-button"
            .disabled=${stateObj.state === "unavailable" || !canRun}
            @click=${run}
          >
            <ha-svg-icon .path=${mdiPlay}></ha-svg-icon>
            ${hass.localize("ui.card.script.run")}
          </ha-control-button>
        </ha-control-button-group>
      </div>
    `;
  }

  /** `button.press` / `input_button.press`, styled like the script buttons. */
  private _press(stateObj: HassEntity) {
    const domain = computeDomain(stateObj.entity_id);
    const press = (ev: Event) => {
      ev.stopPropagation();
      this.hass!.callService(
        domain === "input_button" ? domain : "button",
        "press",
        {
          entity_id: stateObj.entity_id,
        },
      );
    };
    return html`
      <ha-control-button-group class="press">
        <ha-control-button
          .disabled=${stateObj.state === "unavailable"}
          @click=${press}
        >
          <ha-svg-icon .path=${mdiGestureTapButton}></ha-svg-icon>
          ${this.hass!.localize("ui.card.button.press")}
        </ha-control-button>
      </ha-control-button-group>
    `;
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
        .changedOverride=${
          computeDomain(stateObj.entity_id) === "script"
            ? stateObj.attributes.last_triggered || 0
            : undefined
        }
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
      /* more-info-control-style.ts .buttons (fan power button) */
      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: var(--ha-space-3);
      }
      .buttons > * {
        margin: var(--ha-space-2);
      }
      /* The media player draws its own full-width layout. */
      more-info-media_player {
        align-self: stretch;
      }
      /* more-info-script.ts */
      .script {
        align-self: stretch;
        display: flex;
        flex-direction: column;
      }
      .script .queue {
        visibility: hidden;
        color: var(--secondary-text-color);
        text-align: center;
        margin-bottom: var(--ha-space-4);
        height: 21px;
      }
      .script .queue.has-queue {
        visibility: visible;
      }
      .script .fields {
        padding: var(--ha-space-4);
        border: 1px solid var(--divider-color);
        border-radius: var(--ha-border-radius-md);
        margin-bottom: var(--ha-space-4);
      }
      .script .fields .title {
        font-weight: var(--ha-font-weight-bold);
      }
      ha-control-button ha-svg-icon {
        z-index: -1;
        margin-right: var(--ha-space-1);
      }
      ha-control-button-group.press {
        align-self: stretch;
      }
      ha-service-control {
        --service-control-padding: 0;
        --service-control-items-border-top: none;
      }
      .script ha-markdown {
        text-align: center;
        padding: 0 var(--ha-space-4);
      }
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
