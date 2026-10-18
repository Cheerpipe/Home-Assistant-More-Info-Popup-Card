/**
 * `trigger` control of the state card: one-shot entities (scripts, buttons,
 * automations) have no big control in more-info, only plain buttons. This
 * draws a momentary switch with the size, shape and colors of
 * `ha-state-control-toggle` (`ha-control-switch` + `state-control-styles.ts`):
 * tapping it sends the handle up in the state color, confirms with a check
 * and springs back. A running script keeps the handle up and breathing.
 */
import { mdiAlertCircleOutline, mdiCheck, mdiPower, mdiStop } from "@mdi/js";
import { css, html, LitElement, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { computeDomain, computeObjectId } from "../ha/entity";
import { fireEvent } from "../ha/fire-event";
import type { HassEntity, HomeAssistant } from "../ha/types";

export const TRIGGER_CONTROL_TAG = "more-info-popup-trigger-control";

/** Domains colored by state (`STATE_COLORED_DOMAIN`, `state_color.ts`). */
const STATE_COLORED = ["automation", "script"];

/** `stateColorCss(stateObj, "on" | "off")` for the trigger domains. */
const stateColor = (domain: string, on: boolean): string => {
  const [key, activeKey] = on ? ["on", "active"] : ["off", "inactive"];
  // Buttons have no state color: primary when lit, like a control button.
  const fallback = STATE_COLORED.includes(domain)
    ? `var(--state-${activeKey}-color)`
    : on
      ? "var(--primary-color)"
      : "var(--disabled-color)";
  return `var(--state-${domain}-${key}-color, var(--state-${domain}-${activeKey}-color, ${fallback}))`;
};

const SCRIPT_MAX_MODES = ["queued", "parallel"];

/** `canRun` (`src/data/script.ts`). */
const scriptCanRun = (stateObj: HassEntity): boolean =>
  stateObj.state === "off" ||
  stateObj.attributes.mode === "restart" ||
  (stateObj.state === "on" &&
    SCRIPT_MAX_MODES.includes(stateObj.attributes.mode) &&
    stateObj.attributes.current < stateObj.attributes.max);

/** How long the check (or the error) stays before the handle drops. */
const FEEDBACK_MS = 1100;
/** Shortest trip up, so a fast call still reads as a press. */
const MIN_TRAVEL_MS = 350;
/**
 * `automation.trigger` answers when the run ends: past this, it has
 * started fine, so confirm without waiting for it.
 */
const MAX_WAIT_MS = 1500;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type Phase = "idle" | "firing" | "done" | "error";

/**
 * - `switch`: two positions like the toggle; the handle goes up and back.
 * - `button`: one big surface with no positions, lit only while the action
 *   happens (the press, a running script): nothing suggests a held state.
 */
export type TriggerVariant = "switch" | "button";

/**
 * Shape of the push button: tall like the toggle (`vertical`), a wide bar
 * (`horizontal`), a centered rounded square (`square`) or a disc (`circle`).
 */
export type PushLayout = "vertical" | "horizontal" | "square" | "circle";

export class MoreInfoTriggerControl extends LitElement {
  @property({ attribute: false }) accessor hass: HomeAssistant | undefined;

  @property({ attribute: false }) accessor stateObj: HassEntity | undefined;

  /** Replaces the entity icon. */
  @property({ attribute: false }) accessor icon: string | undefined;

  @property({ attribute: false }) accessor variant: TriggerVariant = "switch";

  @property({ attribute: false }) accessor layout: PushLayout = "vertical";

  /** Cancel button under a script's control. */
  @property({ attribute: false }) accessor showCancel = true;

  @state() accessor _phase: Phase = "idle";

  /** Value of the script fields form (`{ action, data }`). */
  @state() accessor _scriptData: {
    action?: string;
    data?: Record<string, unknown>;
  } = {};

  private _timer?: ReturnType<typeof setTimeout>;

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    clearTimeout(this._timer);
    this._phase = "idle";
  }

  private get _domain(): string {
    return computeDomain(this.stateObj!.entity_id);
  }

  private get _scriptFields() {
    const objectId = computeObjectId(this.stateObj!.entity_id);
    return this.hass!.services?.script?.[objectId];
  }

  private _requiredFilled(): boolean {
    const fields = this._scriptFields?.fields ?? {};
    const data = this._scriptData.data;
    return Object.entries(fields).every(
      ([key, field]) => !field.required || data?.[key] !== undefined,
    );
  }

  private _call(): Promise<unknown> {
    const hass = this.hass!;
    const entityId = this.stateObj!.entity_id;
    switch (this._domain) {
      case "script":
        return hass.callService("script", "turn_on", {
          entity_id: entityId,
          ...(this._scriptData.data
            ? { variables: this._scriptData.data }
            : {}),
        });
      case "automation":
        // `triggerAutomationActions` (`src/data/automation.ts`).
        return hass.callService("automation", "trigger", {
          entity_id: entityId,
          skip_condition: true,
        });
      default:
        return hass.callService(
          this._domain === "input_button" ? "input_button" : "button",
          "press",
          { entity_id: entityId },
        );
    }
  }

  private async _fire(ev: Event) {
    ev.stopPropagation();
    if (!this._canFire) return;
    clearTimeout(this._timer);
    fireEvent(window, "haptic", "light");
    this._phase = "firing";
    const call = Promise.race([this._call(), sleep(MAX_WAIT_MS)]);
    let ok = true;
    try {
      await Promise.all([call, sleep(MIN_TRAVEL_MS)]);
    } catch {
      ok = false;
      fireEvent(window, "haptic", "failure");
    }
    this._phase = ok ? "done" : "error";
    this._timer = setTimeout(() => {
      this._phase = "idle";
    }, FEEDBACK_MS);
  }

  private _keyDown(ev: KeyboardEvent) {
    if (ev.key === "Enter" || ev.key === " ") {
      ev.preventDefault();
      this._fire(ev);
    }
  }

  private get _unavailable(): boolean {
    return this.stateObj!.state === "unavailable";
  }

  private get _running(): boolean {
    return this._domain === "script" && this.stateObj!.state === "on";
  }

  private get _canFire(): boolean {
    if (this._unavailable || this._phase === "firing") return false;
    if (this._domain !== "script") return true;
    return scriptCanRun(this.stateObj!) && this._requiredFilled();
  }

  private get _label(): string {
    const hass = this.hass!;
    switch (this._domain) {
      case "script":
        return hass.localize("ui.card.script.run");
      case "automation":
        return hass.localize("ui.card.automation.trigger");
      default:
        return hass.localize("ui.card.button.press");
    }
  }

  /**
   * The entity icon stays mounted (`ha-state-icon` resolves it
   * asynchronously, so recreating it blinks); the check or the error icon
   * is laid over it.
   */
  private _handleIcon() {
    const feedback =
      this._phase === "done"
        ? mdiCheck
        : this._phase === "error"
          ? mdiAlertCircleOutline
          : undefined;
    return html`
      <ha-state-icon
        class=${classMap({ hidden: Boolean(feedback) })}
        .hass=${this.hass}
        .stateObj=${this.stateObj}
        .icon=${this.icon}
      ></ha-state-icon>
      ${
        feedback
          ? html`<ha-svg-icon class="feedback" .path=${feedback}></ha-svg-icon>`
          : nothing
      }
    `;
  }

  /** Name of the action under the icon; says it while a script runs. */
  private get _caption(): string {
    if (this._running && this._phase === "idle") {
      return this.hass!.localize("ui.card.script.running_single");
    }
    return this._label;
  }

  protected override render() {
    if (!this.hass || !this.stateObj) return nothing;
    const domain = this._domain;
    const up = this._phase !== "idle" || this._running;
    const push = this.variant === "button";
    return html`
      <div
        class=${classMap({
          pad: true,
          push,
          [this.layout]: push,
          up,
          running: this._running && this._phase === "idle",
          error: this._phase === "error",
          disabled: this._unavailable || (!up && !this._canFire),
        })}
        role="button"
        tabindex=${this._unavailable ? -1 : 0}
        aria-label=${this._label}
        aria-disabled=${!this._canFire}
        style=${styleMap({
          "--on-color": stateColor(domain, true),
          "--off-color": stateColor(domain, false),
        })}
        @click=${this._fire}
        @keydown=${this._keyDown}
      >
        <div class="track"></div>
        ${
          push
            ? html`<div class="fill"></div>
                <div class="face">
                  <div class="icon">${this._handleIcon()}</div>
                  <span class="caption">${this._caption}</span>
                </div>`
            : html`<div class="handle">${this._handleIcon()}</div>`
        }
      </div>
      ${domain === "script" ? this._scriptExtras() : nothing}
      ${domain === "automation" ? this._automationBar() : nothing}
    `;
  }

  /** Enable / disable, like the switch the native row shows. */
  private _automationBar() {
    const stateObj = this.stateObj!;
    const on = stateObj.state === "on";
    const toggle = (ev: Event) => {
      ev.stopPropagation();
      this.hass!.callService("automation", on ? "turn_off" : "turn_on", {
        entity_id: stateObj.entity_id,
      });
    };
    return html`
      <ha-control-button-group class="bar">
        <ha-control-button
          class=${classMap({ active: on })}
          style=${styleMap({ "--color": stateColor("automation", true) })}
          .label=${this.hass!.localize(
            on ? "ui.card.common.turn_off" : "ui.card.common.turn_on",
          )}
          .disabled=${this._unavailable}
          @click=${toggle}
        >
          <ha-svg-icon .path=${mdiPower}></ha-svg-icon>
          <span class="label">${this.hass!.formatEntityState(stateObj)}</span>
        </ha-control-button>
      </ha-control-button-group>
    `;
  }

  /** Stop button, then the description and fields of `more-info-script`. */
  private _scriptExtras() {
    const hass = this.hass!;
    const stateObj = this.stateObj!;
    const script = this._scriptFields;
    const fields = script?.fields ?? {};
    const current: number = stateObj.attributes.current || 0;
    const multiple =
      SCRIPT_MAX_MODES.includes(stateObj.attributes.mode) && current > 1;
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
      ${
        this.showCancel
          ? html`<ha-control-button-group class="bar">
              <ha-control-button .disabled=${!current} @click=${cancel}>
                <ha-svg-icon .path=${mdiStop}></ha-svg-icon>
                ${hass.localize(
                  multiple
                    ? "ui.card.script.cancel_all"
                    : "ui.card.script.cancel",
                )}
              </ha-control-button>
            </ha-control-button-group>`
          : nothing
      }
      ${
        script?.description
          ? html`<ha-markdown
              breaks
              .content=${script.description}
            ></ha-markdown>`
          : nothing
      }
      ${
        Object.keys(fields).length
          ? html`
              <div class="fields">
                <ha-service-control
                  hide-picker
                  hide-description
                  .hass=${hass}
                  .value=${{ action: stateObj.entity_id, ...this._scriptData }}
                  .narrow=${window.matchMedia("(max-width: 870px)").matches}
                  @value-changed=${fieldsChanged}
                ></ha-service-control>
              </div>
            `
          : nothing
      }
    `;
  }

  static override styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-self: stretch;
      gap: var(--ha-space-6);
    }
    /* Same box as ha-control-switch in state-control-styles.ts. */
    .pad {
      --pad-padding: 6px;
      --pad-radius: var(--ha-border-radius-6xl, 36px);
      position: relative;
      box-sizing: border-box;
      width: 130px;
      height: 45vh;
      max-height: 320px;
      min-height: 200px;
      padding: var(--pad-padding);
      border-radius: var(--pad-radius);
      display: flex;
      flex-direction: column-reverse;
      cursor: pointer;
      outline: none;
      user-select: none;
      touch-action: manipulation;
      -webkit-tap-highlight-color: transparent;
      --mdc-icon-size: 24px;
    }
    .pad:focus-visible {
      box-shadow: 0 0 0 2px var(--off-color);
    }
    .pad.up:focus-visible {
      box-shadow: 0 0 0 2px var(--on-color);
    }
    .pad.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .track {
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background-color: var(--off-color);
      opacity: 0.2;
      transition:
        background-color 180ms ease-in-out,
        opacity 180ms ease-in-out;
    }
    .pad:not(.disabled):hover .track {
      opacity: 0.4;
    }
    .handle {
      position: relative;
      height: 50%;
      width: 100%;
      border-radius: calc(var(--pad-radius) - var(--pad-padding));
      background-color: var(--off-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      transition:
        transform 320ms cubic-bezier(0.2, 0.9, 0.3, 1.15),
        scale 120ms ease-out,
        background-color 180ms ease-in-out;
    }
    /* scale, not transform: pressing must not cancel the trip up. */
    .pad:not(.disabled):active .handle {
      scale: 0.97;
    }
    .handle ha-state-icon {
      transition: opacity 120ms ease-in-out;
    }
    .handle ha-state-icon.hidden {
      opacity: 0;
    }
    .handle .feedback {
      position: absolute;
    }
    .pad.up .track {
      background-color: var(--on-color);
    }
    .pad.up .handle {
      transform: translateY(-100%);
      background-color: var(--on-color);
    }
    /* Push button: one surface, filled from the middle while it acts. */
    .pad.push {
      flex-direction: column;
      overflow: hidden;
      transition: scale 120ms ease-out;
    }
    .pad.push:not(.disabled):active {
      scale: 0.98;
    }
    .pad.push.horizontal {
      width: 100%;
      max-width: 320px;
      height: 130px;
      min-height: 0;
      max-height: none;
    }
    .pad.push.horizontal .face {
      flex-direction: row;
      gap: var(--ha-space-3);
    }
    .pad.push.square,
    .pad.push.circle {
      width: 200px;
      height: 200px;
      min-height: 0;
      max-height: none;
    }
    .pad.push.circle {
      border-radius: 50%;
    }
    .fill {
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background-color: var(--on-color);
      opacity: 0;
      transform: scale(0.4);
      transition:
        transform 320ms cubic-bezier(0.2, 0.9, 0.3, 1),
        opacity 200ms ease-in-out,
        background-color 180ms ease-in-out;
    }
    .pad.push.up .fill {
      opacity: 1;
      transform: none;
    }
    .face {
      position: relative;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--ha-space-2);
      color: var(--primary-text-color);
      transition: color 180ms ease-in-out;
      --mdc-icon-size: 32px;
    }
    .face .icon {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .pad.push.up .face {
      color: white;
    }
    .caption {
      font-size: var(--ha-font-size-m);
      font-weight: var(--ha-font-weight-medium);
      line-height: 1.4;
      text-align: center;
      padding: 0 var(--ha-space-2);
    }
    .pad.push.error .fill {
      background-color: var(--error-color);
    }
    .pad.push.error .face {
      animation: shake-x 400ms ease-in-out;
    }
    .pad.push.running .fill {
      animation: breathe-fill 1.6s ease-in-out infinite;
    }
    .pad.push.running .face ha-state-icon {
      animation: pulse 1.6s ease-in-out infinite;
    }
    @keyframes breathe-fill {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.7;
      }
    }
    @keyframes shake-x {
      0%,
      100% {
        transform: translateX(0);
      }
      25% {
        transform: translateX(-6px);
      }
      75% {
        transform: translateX(6px);
      }
    }
    .pad.error .track,
    .pad.error .handle {
      background-color: var(--error-color);
    }
    .pad.error .handle {
      animation: shake 400ms ease-in-out;
    }
    .pad.running .track {
      animation: breathe 1.6s ease-in-out infinite;
    }
    .pad.running .handle ha-state-icon {
      animation: pulse 1.6s ease-in-out infinite;
    }
    .feedback {
      animation: pop 260ms cubic-bezier(0.2, 0.9, 0.3, 1.4);
    }
    @keyframes breathe {
      0%,
      100% {
        opacity: 0.2;
      }
      50% {
        opacity: 0.45;
      }
    }
    @keyframes pulse {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.4;
      }
    }
    @keyframes pop {
      from {
        transform: scale(0.4);
        opacity: 0;
      }
    }
    @keyframes shake {
      0%,
      100% {
        transform: translateY(-100%) translateX(0);
      }
      25% {
        transform: translateY(-100%) translateX(-6px);
      }
      75% {
        transform: translateY(-100%) translateX(6px);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .handle,
      .track,
      .fill,
      .face {
        transition: none;
      }
      .pad.running .track,
      .pad.running .handle ha-state-icon,
      .pad.push.running .fill,
      .pad.push.running .face ha-state-icon,
      .pad.push.error .face,
      .pad.error .handle,
      .feedback {
        animation: none;
      }
    }
    /* Button bar under the control, as in more-info-vacuum / -lock. */
    .bar {
      width: 100%;
      max-width: 264px;
      --control-button-group-thickness: 48px;
    }
    .bar ha-control-button {
      --control-button-border-radius: var(--ha-border-radius-xl, 18px);
    }
    .bar ha-control-button.active {
      --control-button-icon-color: white;
      --control-button-background-color: var(--color);
      --control-button-focus-color: var(--color);
      --control-button-background-opacity: 1;
    }
    .bar ha-svg-icon {
      margin-inline-end: var(--ha-space-1);
    }
    /* Above the button background, which is opaque when active. */
    .bar .label {
      position: relative;
    }
    ha-markdown {
      align-self: stretch;
      text-align: center;
      padding: 0 var(--ha-space-4);
    }
    .fields {
      align-self: stretch;
      padding: var(--ha-space-4);
      border: 1px solid var(--divider-color);
      border-radius: var(--ha-border-radius-md);
    }
    ha-service-control {
      --service-control-padding: 0;
      --service-control-items-border-top: none;
    }
  `;
}

if (!customElements.get(TRIGGER_CONTROL_TAG)) {
  customElements.define(TRIGGER_CONTROL_TAG, MoreInfoTriggerControl);
}

declare global {
  interface HTMLElementTagNameMap {
    [TRIGGER_CONTROL_TAG]: MoreInfoTriggerControl;
  }
}
