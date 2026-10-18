/**
 * Global registry of the popups available on the current view and of their
 * triggers: `#popup_id` navigation, `fire-dom-event` and (optionally) the
 * native more-info of the popup's entity.
 *
 * A single instance is shared even if the bundle is loaded twice.
 */
import { DIALOG_TAG, type ResolvedPopupConfig } from "./config";
import { decodeHash, popHashEntry, stripHash } from "./history";
import type {
  HomeAssistant,
  MoreInfoEventDetail,
  MoreInfoView,
} from "./ha/types";
import { matchScore } from "./match";
import { getActivePopup } from "./state";

export interface OpenOptions {
  view?: MoreInfoView;
  /** Entity the popup is opened for (template popups, `entity: this`). */
  entity?: string;
}

export interface PopupHost extends HTMLElement {
  readonly popupConfig: ResolvedPopupConfig | undefined;
  readonly hass?: HomeAssistant;
  openPopup(options?: OpenOptions): void;
}

interface CustomActionDetail {
  more_info_popup?:
    | string
    | { open?: string; close?: string; toggle?: string; entity?: string };
}

const REGISTRY_KEY = Symbol.for("more-info-popup-card.registry");

export class PopupRegistry {
  private readonly _hosts = new Set<PopupHost>();

  private _installed = false;

  private _consuming = false;

  private _checkScheduled = false;

  constructor(private readonly _win: Window = window) {}

  public register(host: PopupHost): void {
    this._install();
    this._hosts.add(host);
    // Deep link, or a navigation to another view that carries a hash: the
    // card registers after the view rendered, so check once it is in.
    this._scheduleLocationCheck();
  }

  public unregister(host: PopupHost): void {
    this._hosts.delete(host);
  }

  /** Most recently registered connected host for an id. */
  public get(popupId: string | undefined): PopupHost | undefined {
    if (!popupId) return undefined;
    let found: PopupHost | undefined;
    for (const host of this._hosts) {
      if (host.isConnected && host.popupConfig?.popup_id === popupId) {
        found = host;
      }
    }
    return found;
  }

  /**
   * The `replace_more_info` popup for an entity: its own `entity` first, then
   * the most specific `match`; ties go to the most recently registered.
   */
  public findByEntity(entityId: string): PopupHost | undefined {
    let found: PopupHost | undefined;
    let best = 0;
    for (const host of this._hosts) {
      const config = host.popupConfig;
      if (!host.isConnected || !config) continue;
      const score = matchScore(config, entityId, host.hass ?? this._hass());
      if (score > 0 && score >= best) {
        found = host;
        best = score;
      }
    }
    return found;
  }

  /** The app's `hass`, for hosts that have not received theirs yet. */
  private _hass(): HomeAssistant | undefined {
    const root = this._win.document?.querySelector("home-assistant") as
      (Element & { hass?: HomeAssistant }) | null;
    return root?.hass;
  }

  public open(popupId: string, options?: OpenOptions): boolean {
    const host = this.get(popupId);
    host?.openPopup(options);
    return Boolean(host);
  }

  public close(popupId?: string): void {
    const active = getActivePopup();
    if (active && (!popupId || active.popupId === popupId)) active.close();
  }

  public toggle(popupId: string, entity?: string): void {
    if (getActivePopup()?.popupId === popupId) this.close(popupId);
    else this.open(popupId, { entity });
  }

  private _install() {
    if (this._installed) return;
    this._installed = true;
    this._win.addEventListener("location-changed", this._onLocationChanged);
    this._win.addEventListener("popstate", this._onPopState);
    this._win.addEventListener("ll-custom", this._onCustomAction);
    this._win.addEventListener("hass-more-info", this._onMoreInfo, {
      capture: true,
    });
  }

  private _scheduleLocationCheck() {
    if (this._checkScheduled) return;
    this._checkScheduled = true;
    queueMicrotask(() => {
      this._checkScheduled = false;
      const host = this._hostForHash();
      if (host && !this._consuming) {
        stripHash(this._win);
        host.openPopup();
      }
    });
  }

  private _hostForHash(): PopupHost | undefined {
    return this.get(decodeHash(this._win.location.hash));
  }

  private _onLocationChanged = (ev: Event) => {
    if (this._consuming) return;
    const host = this._hostForHash();
    if (!host) return;
    const replace = Boolean(
      (ev as CustomEvent<{ replace?: boolean }>).detail?.replace,
    );
    // HA's navigate() stamps `from` with the previous path on push.
    const samePagePush =
      !replace && this._win.history.state?.from === this._win.location.pathname;
    this._consuming = true;
    const ready = samePagePush
      ? popHashEntry(this._win)
      : Promise.resolve(stripHash(this._win));
    ready.then(() => {
      this._consuming = false;
      host.openPopup();
    });
  };

  private _onPopState = () => {
    if (this._consuming) return;
    // Forward navigation into a `#popup_id` entry.
    const host = this._hostForHash();
    if (host) {
      stripHash(this._win);
      host.openPopup();
    }
  };

  private _onCustomAction = (ev: Event) => {
    const detail = (ev as CustomEvent<CustomActionDetail>).detail;
    const action = detail?.more_info_popup;
    if (!action) return;
    if (typeof action === "string") {
      this.open(action);
    } else if (action.open) {
      this.open(action.open, { entity: action.entity });
    } else if (action.toggle) {
      this.toggle(action.toggle, action.entity);
    } else if (action.close !== undefined) {
      this.close(action.close || undefined);
    }
  };

  private _onMoreInfo = (ev: Event) => {
    const detail = (ev as CustomEvent<MoreInfoEventDetail>).detail;
    if (!detail?.entityId) return;
    const host = this.findByEntity(detail.entityId);
    if (!host) return;
    // Events coming from inside a popup are handled by the popup itself.
    const fromPopup = ev
      .composedPath()
      .some((node) => (node as Element).localName === DIALOG_TAG);
    if (fromPopup) return;
    ev.stopImmediatePropagation();
    const view = detail.view ?? detail.tab;
    host.openPopup({
      view: view && view !== "info" ? view : undefined,
      entity: detail.entityId,
    });
  };
}

export const getRegistry = (): PopupRegistry => {
  const store = window as unknown as Record<symbol, PopupRegistry | undefined>;
  store[REGISTRY_KEY] ??= new PopupRegistry(window);
  return store[REGISTRY_KEY];
};
