/**
 * Visual editor of the popup card, shown inside the native
 * `hui-dialog-edit-card`.
 *
 * - Popup options: `ha-form` with expandable sections (like the tile editor).
 * - Cards: a native `hui-section` in edit mode backed by a virtual Lovelace
 *   controller, so drag & drop, resize, copy/cut (shared dashboard
 *   clipboard), delete and "add card" are the native ones.
 * - Editing/adding a child card opens an inline sub-editor (← back), because
 *   a second `hui-dialog-edit-card` would replace the one already open (the
 *   dialog manager keeps one element per tag).
 */
import {
  mdiCodeBraces,
  mdiContentCopy,
  mdiContentCut,
  mdiContentDuplicate,
  mdiDelete,
  mdiListBoxOutline,
} from "@mdi/js";
import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import {
  DEFAULTS,
  DIALOG_TAG,
  EDITOR_TAG,
  resolveConfig,
  validateConfig,
  type PopupCardConfig,
} from "../config";
import { fireEvent } from "../ha/fire-event";
import { ensureEditorElements } from "../ha/internals";
import type {
  HomeAssistant,
  Lovelace,
  LovelaceCardConfig,
  LovelaceConfig,
  LovelaceSectionConfig,
  ShowToastParams,
} from "../ha/types";
import { localize } from "../localize/localize";
import { bindEntity, cleanMatch, matchingEntities } from "../match";
import { buildSchema, computeHelper, computeLabel } from "./schema";
import {
  cardIndexFromPath,
  createVirtualLovelace,
  VIRTUAL_SECTION_INDEX,
  VIRTUAL_VIEW_INDEX,
} from "./virtual-lovelace";

type SubView = { kind: "edit"; index: number } | { kind: "add" };

type SectionElement = HTMLElement & {
  hass?: HomeAssistant;
  config?: LovelaceSectionConfig;
  lovelace?: Lovelace;
  preview?: boolean;
  index?: number;
  viewIndex?: number;
};

type CardElementEditor = HTMLElement & {
  toggleMode(): void;
  GUImode: boolean;
};

const UNDO_LIMIT = 30;

/** Keeps popup ids valid while typing without fighting the user. */
const sanitizePopupId = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "_")
    .replace(/^[_-]+/, "");

export class MoreInfoPopupCardEditor extends LitElement {
  @property({ attribute: false }) accessor hass: HomeAssistant | undefined;

  /** Dashboard config; injected by `hui-element-editor` because it is declared. */
  @property({ attribute: false }) accessor lovelace: LovelaceConfig | undefined;

  @state() accessor _config: PopupCardConfig | undefined;

  @state() accessor _sub: SubView | undefined;

  @state() accessor _ready = false;

  @state() accessor _guiMode = true;

  @state() accessor _guiModeAvailable = true;

  private _section?: SectionElement;

  private _sectionKey?: string;

  private _undo: LovelaceCardConfig[][] = [];

  @state() accessor _notice: { message: string; undo: boolean } | undefined;

  private _noticeTimer?: ReturnType<typeof setTimeout>;

  public setConfig(config: PopupCardConfig): void {
    validateConfig(config);
    // Configs coming from the edit dialog are deep-frozen.
    this._config = structuredClone(config);
  }

  override connectedCallback(): void {
    super.connectedCallback();
    ensureEditorElements().then(() => {
      this._ready = true;
    });
  }

  private _titlesRequested = false;

  protected override willUpdate(changed: PropertyValues<this>): void {
    // Integration and domain names for the template popup selects.
    if (this.hass && !this._titlesRequested) {
      this._titlesRequested = true;
      this.hass.loadBackendTranslation?.("title");
    }
    if (
      (changed.has("_config") || changed.has("hass")) &&
      this._config &&
      this.hass
    ) {
      this._syncSection();
    }
  }

  // ---------------------------------------------------------------------------
  // Config helpers
  // ---------------------------------------------------------------------------

  private get _cards(): LovelaceCardConfig[] {
    return this._config?.cards ?? [];
  }

  private get _sectionConfig(): LovelaceSectionConfig {
    return {
      type: "grid",
      column_span: this._config?.column_span ?? DEFAULTS.column_span,
      cards: this._cards,
    };
  }

  private _emit(config: PopupCardConfig) {
    this._config = config;
    fireEvent(this, "config-changed", { config });
  }

  private _setCards(cards: LovelaceCardConfig[], undoable = true) {
    if (!this._config) return;
    if (JSON.stringify(cards) === JSON.stringify(this._cards)) return;
    if (undoable) {
      this._undo = [...this._undo, structuredClone(this._cards)].slice(
        -UNDO_LIMIT,
      );
    }
    this._emit({ ...this._config, cards });
  }

  private _undoLast = () => {
    const previous = this._undo[this._undo.length - 1];
    this._notice = undefined;
    if (!previous) return;
    this._undo = this._undo.slice(0, -1);
    this._setCards(previous, false);
  };

  /**
   * HA toasts live outside the (modal, top-layer) edit dialog, so their
   * buttons are inert while it is open: show the notice inside the editor.
   */
  private _toast = (params: ShowToastParams) => {
    clearTimeout(this._noticeTimer);
    this._notice = {
      message: params.message,
      undo: Boolean(params.action) && this._undo.length > 0,
    };
    this._noticeTimer = setTimeout(
      () => {
        this._notice = undefined;
      },
      params.duration && params.duration > 0 ? params.duration : 6000,
    );
  };

  // ---------------------------------------------------------------------------
  // Native edit grid
  // ---------------------------------------------------------------------------

  private _syncSection() {
    const sectionConfig = this._sectionConfig;
    this._section ??= document.createElement("hui-section") as SectionElement;
    const section = this._section;
    section.hass = this.hass;
    const key = JSON.stringify(sectionConfig);
    if (key === this._sectionKey) return;
    this._sectionKey = key;
    section.viewIndex = VIRTUAL_VIEW_INDEX;
    section.index = VIRTUAL_SECTION_INDEX;
    section.preview = true;
    section.lovelace = createVirtualLovelace({
      section: sectionConfig,
      locale: this.hass!.locale,
      onSave: (cards) => this._setCards(cards),
      onToast: this._toast,
    });
    section.config = sectionConfig;
  }

  /** Intercepted in the capture phase, before `hui-section` opens a dialog. */
  private _interceptEdit = {
    capture: true,
    handleEvent: (ev: CustomEvent<{ path?: unknown }>) => {
      const index = cardIndexFromPath(ev.detail?.path);
      if (index === undefined) return;
      ev.stopPropagation();
      if (ev.type === "ll-duplicate-card") {
        this._duplicate(index);
      } else {
        this._openEditor(index);
      }
    },
  };

  private _interceptCreate = {
    capture: true,
    handleEvent: (ev: Event) => {
      ev.stopPropagation();
      this._sub = { kind: "add" };
    },
  };

  /** Forwards copy to the native handler so HA's clipboard cache is updated. */
  private _copyNative(index: number) {
    const target = this._section?.firstElementChild ?? this._section;
    if (!target) return;
    fireEvent(target, "ll-copy-card", {
      path: [VIRTUAL_VIEW_INDEX, VIRTUAL_SECTION_INDEX, index],
    });
  }

  // ---------------------------------------------------------------------------
  // Sub editors
  // ---------------------------------------------------------------------------

  private _openEditor(index: number) {
    this._guiMode = true;
    this._guiModeAvailable = true;
    this._sub = { kind: "edit", index };
  }

  private _back = () => {
    this._returnToCards();
  };

  /** Leaves a sub-editor and brings the cards grid back into view. */
  private _returnToCards() {
    this._sub = undefined;
    this.updateComplete.then(() =>
      this.renderRoot
        .querySelector(".cards-header")
        ?.scrollIntoView({ block: "start" }),
    );
  }

  private _duplicate(index: number) {
    const cards = [...this._cards];
    cards.splice(index + 1, 0, structuredClone(cards[index]));
    this._setCards(cards);
    this._openEditor(index + 1);
  }

  private _delete(index: number) {
    const cards = [...this._cards];
    cards.splice(index, 1);
    this._setCards(cards);
    this._returnToCards();
    this._toast({
      message: localize(this.hass, "editor.card_deleted"),
      action: {
        text: localize(this.hass, "editor.undo"),
        action: this._undoLast,
      },
    });
  }

  private _cut(index: number) {
    this._copyNative(index);
    const cards = [...this._cards];
    cards.splice(index, 1);
    this._setCards(cards);
    this._returnToCards();
  }

  private _cardPicked(ev: CustomEvent<{ config: LovelaceCardConfig }>) {
    ev.stopPropagation();
    const card = ev.detail.config;
    if (!card?.type) return;
    const cards = [...this._cards, card];
    this._setCards(cards);
    this._openEditor(cards.length - 1);
  }

  private _cardChanged(
    ev: CustomEvent<{ config: LovelaceCardConfig; guiModeAvailable?: boolean }>,
  ) {
    ev.stopPropagation();
    if (this._sub?.kind !== "edit") return;
    const cards = [...this._cards];
    cards[this._sub.index] = ev.detail.config;
    this._guiModeAvailable = ev.detail.guiModeAvailable ?? true;
    this._setCards(cards);
  }

  private _guiModeChanged(
    ev: CustomEvent<{ guiMode: boolean; guiModeAvailable: boolean }>,
  ) {
    ev.stopPropagation();
    this._guiMode = ev.detail.guiMode;
    this._guiModeAvailable = ev.detail.guiModeAvailable;
  }

  private _toggleMode() {
    this.renderRoot
      .querySelector<CardElementEditor>("hui-card-element-editor")
      ?.toggleMode();
  }

  // ---------------------------------------------------------------------------
  // Popup options
  // ---------------------------------------------------------------------------

  private _valueChanged(ev: CustomEvent<{ value: Partial<PopupCardConfig> }>) {
    ev.stopPropagation();
    if (!this._config) return;
    const value = { ...ev.detail.value };
    if (typeof value.popup_id === "string") {
      value.popup_id = sanitizePopupId(value.popup_id);
    }
    const next: Record<string, unknown> = { ...this._config, ...value };
    // Keep the YAML minimal: drop defaults and empty values.
    for (const [key, defaultValue] of Object.entries(DEFAULTS)) {
      if (next[key] === defaultValue) delete next[key];
    }
    for (const key of Object.keys(next)) {
      if (next[key] === "" || next[key] === undefined) delete next[key];
    }
    if (next.width !== "custom") delete next.custom_width;
    if (next.height !== "custom") {
      delete next.min_height;
      delete next.max_height;
    }
    const match = cleanMatch(next.match);
    if (match) next.match = match;
    else delete next.match;
    if (!next.replace_more_info) delete next.match;
    if (!next.entity && !next.match) delete next.show_header_actions;
    this._emit(next as PopupCardConfig);
  }

  private _testPopup() {
    if (!this._config) return;
    let config;
    try {
      config = resolveConfig(validateConfig(this._config));
    } catch {
      return;
    }
    // A template popup is tested with its first matching entity.
    config = bindEntity(
      config,
      config.entity ?? matchingEntities(config, this.hass!)[0],
    );
    fireEvent(this, "show-dialog", {
      dialogTag: DIALOG_TAG,
      dialogImport: () => Promise.resolve(),
      dialogParams: { config },
      addHistory: true,
    });
  }

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  protected override render() {
    if (!this.hass || !this._config) return nothing;
    if (!this._ready) return html`<ha-spinner size="small"></ha-spinner>`;
    if (this._sub?.kind === "add") return this._renderAdd();
    if (this._sub?.kind === "edit" && this._cards[this._sub.index]) {
      return this._renderEdit(this._sub.index);
    }
    return this._renderMain();
  }

  private _renderMain() {
    const hass = this.hass!;
    const config = this._config!;
    const data = { ...DEFAULTS, ...config };
    return html`
      <ha-form
        .hass=${hass}
        .data=${data}
        .schema=${buildSchema(hass, data)}
        .computeLabel=${computeLabel(hass)}
        .computeHelper=${computeHelper(hass, config)}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="cards-header">
        <h3>${localize(hass, "editor.tab.cards")}</h3>
        <ha-button appearance="plain" size="small" @click=${this._testPopup}>
          ${localize(hass, "editor.test_popup")}
        </ha-button>
      </div>
      ${
        this._notice
          ? html`
              <ha-alert alert-type="info" class="notice">
                ${this._notice.message}
                ${
                  this._notice.undo
                    ? html`<ha-button
                        slot="action"
                        appearance="plain"
                        size="small"
                        @click=${this._undoLast}
                      >
                        ${localize(hass, "editor.undo")}
                      </ha-button>`
                    : nothing
                }
              </ha-alert>
            `
          : nothing
      }
      ${
        this._cards.length
          ? nothing
          : html`<p class="empty">${localize(hass, "editor.empty")}</p>`
      }
      <div
        class="grid"
        style=${styleMap({ "--column-span": String(config.column_span ?? 1) })}
        @ll-edit-card=${this._interceptEdit}
        @ll-duplicate-card=${this._interceptEdit}
        @ll-create-card=${this._interceptCreate}
      >
        ${this._section}
      </div>
    `;
  }

  private _renderSubHeader(title: string, actions: unknown = nothing) {
    return html`
      <div class="sub-header">
        <ha-icon-button-prev
          .label=${localize(this.hass, "editor.back")}
          @click=${this._back}
        ></ha-icon-button-prev>
        <span class="sub-title">${title}</span>
        <div class="sub-actions">${actions}</div>
      </div>
    `;
  }

  private _renderAdd() {
    return html`
      ${this._renderSubHeader(localize(this.hass, "editor.add_card"))}
      <hui-card-picker
        .hass=${this.hass}
        .lovelace=${this.lovelace ?? { views: [] }}
        @config-changed=${this._cardPicked}
      ></hui-card-picker>
    `;
  }

  private _renderEdit(index: number) {
    const hass = this.hass!;
    const card = this._cards[index];
    const label = (key: string) =>
      hass.localize(`ui.panel.lovelace.editor.edit_card.${key}`);
    const actions = html`
      <ha-icon-button
        .label=${label(this._guiMode ? "show_code_editor" : "show_visual_editor")}
        .path=${this._guiMode ? mdiCodeBraces : mdiListBoxOutline}
        .disabled=${!this._guiModeAvailable}
        @click=${this._toggleMode}
      ></ha-icon-button>
      <ha-icon-button
        .label=${label("duplicate")}
        .path=${mdiContentDuplicate}
        @click=${() => this._duplicate(index)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${label("copy")}
        .path=${mdiContentCopy}
        @click=${() => this._copyNative(index)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${label("cut")}
        .path=${mdiContentCut}
        @click=${() => this._cut(index)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${label("delete")}
        .path=${mdiDelete}
        @click=${() => this._delete(index)}
      ></ha-icon-button>
    `;
    return html`
      ${this._renderSubHeader(localize(hass, "editor.edit_card"), actions)}
      <hui-card-element-editor
        .hass=${hass}
        .lovelace=${this.lovelace}
        .value=${card}
        .sectionConfig=${this._sectionConfig}
        show-visibility-tab
        @config-changed=${this._cardChanged}
        @GUImode-changed=${this._guiModeChanged}
      ></hui-card-element-editor>
    `;
  }

  static override styles = css`
    :host {
      display: block;
    }
    .cards-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: var(--ha-space-6) 0 var(--ha-space-2);
    }
    .cards-header h3 {
      margin: 0;
      font-size: var(--ha-font-size-l);
      font-weight: var(--ha-font-weight-medium);
    }
    .notice {
      display: block;
      margin-bottom: var(--ha-space-2);
    }
    .empty {
      color: var(--secondary-text-color);
      margin: 0 0 var(--ha-space-2);
    }
    .grid {
      display: block;
      padding: var(--ha-space-2) 0;
    }
    .sub-header {
      display: flex;
      align-items: center;
      gap: var(--ha-space-1);
      margin: 0 0 var(--ha-space-4);
      border-bottom: 1px solid var(--divider-color);
      padding-bottom: var(--ha-space-2);
    }
    .sub-title {
      flex: 1;
      font-size: var(--ha-font-size-l);
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .sub-actions {
      display: flex;
    }
  `;
}

if (!customElements.get(EDITOR_TAG)) {
  customElements.define(EDITOR_TAG, MoreInfoPopupCardEditor);
}

declare global {
  interface HTMLElementTagNameMap {
    [EDITOR_TAG]: MoreInfoPopupCardEditor;
  }
}
