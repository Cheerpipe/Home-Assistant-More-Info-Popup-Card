import { beforeEach, describe, expect, it, vi } from "vitest";
import { resolveConfig, type PopupCardConfig } from "../src/config";
import { PopupRegistry, type PopupHost } from "../src/registry";
import { setActivePopup } from "../src/state";
import { FakeWindow } from "./fake-window";

const flush = () => new Promise((resolve) => setTimeout(resolve, 0));

const host = (patch: Partial<PopupCardConfig> = {}) => {
  const el = document.createElement("div") as unknown as PopupHost & {
    openPopup: ReturnType<typeof vi.fn<(options?: unknown) => void>>;
  };
  document.body.appendChild(el);
  Object.defineProperty(el, "popupConfig", {
    value: resolveConfig({
      type: "custom:more-info-popup-card",
      popup_id: "salon",
      cards: [],
      ...patch,
    } as PopupCardConfig),
  });
  el.openPopup = vi.fn<(options?: unknown) => void>();
  return el;
};

/** Mimics HA's navigate(): push stamps `from`, then fires location-changed. */
const navigate = (win: FakeWindow, path: string, replace = false) => {
  if (replace) {
    win.history.replaceState({ root: true }, "", path);
  } else {
    win.history.pushState({ from: win.location.pathname }, "", path);
  }
  win.dispatchEvent(
    new CustomEvent("location-changed", { detail: { replace } }),
  );
};

describe("PopupRegistry hash trigger", () => {
  let win: FakeWindow;
  let registry: PopupRegistry;

  beforeEach(() => {
    document.body.innerHTML = "";
    win = new FakeWindow("/lovelace/home");
    registry = new PopupRegistry(win as unknown as Window);
  });

  it("opens on a same-page push and leaves no extra history entry", async () => {
    const popup = host();
    registry.register(popup);
    await flush();

    navigate(win, "#salon");
    await flush();
    await flush();

    expect(popup.openPopup).toHaveBeenCalledOnce();
    expect(win.urls).toEqual(["/lovelace/home"]);
  });

  it("strips the hash on replace navigation", async () => {
    const popup = host();
    registry.register(popup);
    await flush();

    navigate(win, "#salon", true);
    await flush();

    expect(popup.openPopup).toHaveBeenCalledOnce();
    expect(win.urls).toEqual(["/lovelace/home"]);
  });

  it("opens deep links once the card registers", async () => {
    win = new FakeWindow("/lovelace/home#salon");
    registry = new PopupRegistry(win as unknown as Window);
    const popup = host();
    registry.register(popup);
    await flush();

    expect(popup.openPopup).toHaveBeenCalledOnce();
    expect(win.location.hash).toBe("");
  });

  it("does not go back when the hash came with another page", async () => {
    const popup = host();
    registry.register(popup);
    await flush();

    navigate(win, "/lovelace/other#salon");
    await flush();

    expect(popup.openPopup).toHaveBeenCalledOnce();
    expect(win.urls).toEqual(["/lovelace/home", "/lovelace/other"]);
  });

  it("ignores unknown hashes", async () => {
    const popup = host();
    registry.register(popup);
    navigate(win, "#something-else");
    await flush();
    expect(popup.openPopup).not.toHaveBeenCalled();
    expect(win.location.hash).toBe("#something-else");
  });
});

describe("PopupRegistry other triggers", () => {
  let win: FakeWindow;
  let registry: PopupRegistry;

  beforeEach(() => {
    document.body.innerHTML = "";
    win = new FakeWindow();
    registry = new PopupRegistry(win as unknown as Window);
  });

  it("handles fire-dom-event actions", () => {
    const popup = host();
    registry.register(popup);
    win.dispatchEvent(
      new CustomEvent("ll-custom", {
        detail: { more_info_popup: { open: "salon" } },
      }),
    );
    win.dispatchEvent(
      new CustomEvent("ll-custom", { detail: { more_info_popup: "salon" } }),
    );
    expect(popup.openPopup).toHaveBeenCalledTimes(2);
  });

  it("toggles and closes the active popup", () => {
    const popup = host();
    registry.register(popup);
    const close = vi.fn();
    setActivePopup({ popupId: "salon", close });
    win.dispatchEvent(
      new CustomEvent("ll-custom", {
        detail: { more_info_popup: { toggle: "salon" } },
      }),
    );
    expect(close).toHaveBeenCalledOnce();
    setActivePopup(undefined);
  });

  it("replaces the native more-info of its entity", () => {
    // Capture listeners only run on real propagation paths: use the real window.
    const real = new PopupRegistry(window);
    const popup = host({ entity: "light.salon", replace_more_info: true });
    real.register(popup);
    const source = document.createElement("div");
    document.body.appendChild(source);
    const nativeHandler = vi.fn();
    document.body.addEventListener("hass-more-info", nativeHandler);

    source.dispatchEvent(
      new CustomEvent("hass-more-info", {
        bubbles: true,
        composed: true,
        detail: { entityId: "light.salon", view: "history" },
      }),
    );

    expect(popup.openPopup).toHaveBeenCalledWith({ view: "history" });
    expect(nativeHandler).not.toHaveBeenCalled();

    source.dispatchEvent(
      new CustomEvent("hass-more-info", {
        bubbles: true,
        composed: true,
        detail: { entityId: "light.kitchen" },
      }),
    );
    expect(nativeHandler).toHaveBeenCalledOnce();
    real.unregister(popup);
  });

  it("does not intercept events coming from inside a popup", () => {
    const real = new PopupRegistry(window);
    const popup = host({ entity: "light.salon", replace_more_info: true });
    real.register(popup);
    const dialog = document.createElement("more-info-popup-dialog");
    const tile = document.createElement("div");
    dialog.appendChild(tile);
    document.body.appendChild(dialog);
    tile.dispatchEvent(
      new CustomEvent("hass-more-info", {
        bubbles: true,
        composed: true,
        detail: { entityId: "light.salon" },
      }),
    );
    expect(popup.openPopup).not.toHaveBeenCalled();
    real.unregister(popup);
  });
});
