// Browser helper for the documentation screenshots. Paste it in the console of
// the dev Home Assistant (a "Popup docs" view), then for each entry of
// `node dev/docs.mjs plan`:
//   __shot({ id, open, setup, entity })   opens the example (and its setup)
//   __doc.rect()                           popup surface in CSS pixels
// Take a screenshot and crop it with dev/docs-crop.py.
window.__doc = {
  deepAll(root, sel, out = []) {
    root.querySelectorAll(sel).forEach((e) => out.push(e));
    root
      .querySelectorAll("*")
      .forEach((e) => e.shadowRoot && this.deepAll(e.shadowRoot, sel, out));
    return out;
  },
  dialog() {
    return document
      .querySelector("home-assistant")
      .shadowRoot.querySelector("more-info-popup-dialog");
  },
  close() {
    const d = this.dialog();
    if (d && d._open) d.closeDialog();
  },
  go(path) {
    history.pushState(null, "", path);
    window.dispatchEvent(
      new CustomEvent("location-changed", { detail: { replace: false } }),
    );
  },
  open(ex) {
    if (ex.open?.view) {
      document.body.dispatchEvent(
        new CustomEvent("hass-more-info", {
          bubbles: true,
          composed: true,
          detail: { entityId: ex.entity, view: ex.open.view },
        }),
      );
    } else {
      window.dispatchEvent(
        new CustomEvent("ll-custom", {
          detail: { more_info_popup: { open: ex.id } },
        }),
      );
    }
  },
  setup(ex) {
    const d = this.dialog();
    if (!ex.setup || !d) return;
    if (ex.setup === "menu") {
      this.deepAll(
        d.shadowRoot,
        "ha-dropdown ha-icon-button[slot=trigger]",
      )[0]?.click();
    } else if (ex.setup === "select") {
      const menu = this.deepAll(d.shadowRoot, "ha-control-select-menu")[0];
      menu?.shadowRoot?.querySelector("button")?.click();
    } else if (ex.setup.startsWith("nested:")) {
      d.shadowRoot.querySelector(".content")?.dispatchEvent(
        new CustomEvent("hass-more-info", {
          bubbles: true,
          composed: true,
          detail: { entityId: ex.setup.slice(7) },
        }),
      );
    }
  },
  rect() {
    const d = this.dialog();
    const panel = this.deepAll(d.shadowRoot, "dialog").find(
      (el) => el.open || el.hasAttribute("open"),
    );
    const r = panel?.getBoundingClientRect();
    if (!r) return null;
    let { left, top, right, bottom } = r;
    // Include open dropdown menus.
    for (const m of this.deepAll(document, "[role=menu]")) {
      const b = m.getBoundingClientRect();
      if (b.width && b.height) {
        left = Math.min(left, b.left);
        top = Math.min(top, b.top);
        right = Math.max(right, b.right);
        bottom = Math.max(bottom, b.bottom);
      }
    }
    return { left, top, right, bottom, vw: innerWidth, vh: innerHeight };
  },
};

window.__shot = (ex) => {
  window.__doc.close();
  setTimeout(() => {
    window.__doc.open(ex);
    setTimeout(() => window.__doc.setup(ex), 1200);
  }, 700);
};
