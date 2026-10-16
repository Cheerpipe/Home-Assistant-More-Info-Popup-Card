/**
 * UIX (https://github.com/Lint-Free-Technology/uix) integration.
 *
 * Cards are styled by UIX automatically (it patches `hui-card` / `ha-card`
 * and reads `uix:` / `card_mod:` from `_config`). Our dialog is a custom
 * element, so it opts in through UIX's public API:
 * `customElements.get("uix-node").applyToElement(el, type, config, variables, shadow, cls)`.
 */
type UixNodeClass = {
  applyToElement?: (
    element: Element,
    type: string,
    config?: unknown,
    variables?: Record<string, unknown>,
    shadow?: boolean,
    cls?: string,
  ) => Promise<unknown> | unknown;
};

export const uixConfigOf = (config: {
  uix?: unknown;
  card_mod?: unknown;
}): unknown => config.uix ?? config.card_mod;

/** No-op when UIX is not installed. */
export const applyUix = async (
  element: Element,
  type: string,
  config: unknown,
  variables: Record<string, unknown>,
  cls: string,
): Promise<void> => {
  const uix = customElements.get("uix-node") as UixNodeClass | undefined;
  if (!uix?.applyToElement) return;
  try {
    await uix.applyToElement(element, type, config, variables, false, cls);
  } catch (err) {
    console.warn("[more-info-popup-card] UIX styling failed", err);
  }
};
