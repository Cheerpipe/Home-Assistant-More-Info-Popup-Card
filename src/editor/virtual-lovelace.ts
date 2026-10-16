/**
 * A minimal `Lovelace` controller that lets a native `hui-section` run its
 * full edit mode (overlay, drag & drop, add button, copy/cut, delete) on the
 * popup's own `cards` list instead of the dashboard config.
 *
 * `hui-section` resolves cards with paths `[viewIndex, sectionIndex, card]`,
 * so the popup is exposed as view 0 / section 0.
 */
import type {
  LovelaceCardConfig,
  Lovelace,
  LovelaceConfig,
  LovelaceSectionConfig,
  ShowToastParams,
} from "../ha/types";

export interface VirtualLovelaceOptions {
  section: LovelaceSectionConfig;
  locale: Record<string, unknown>;
  onSave: (cards: LovelaceCardConfig[]) => void;
  /** Toasts with an action must not fire HA's global `undo-change`. */
  onToast: (params: ShowToastParams) => void;
}

export const VIRTUAL_VIEW_INDEX = 0;
export const VIRTUAL_SECTION_INDEX = 0;

export const createVirtualLovelace = (
  options: VirtualLovelaceOptions,
): Lovelace => {
  const config: LovelaceConfig = {
    views: [{ type: "sections", sections: [options.section] }],
  };
  return {
    config,
    rawConfig: config,
    editMode: true,
    urlPath: null,
    mode: "storage",
    locale: options.locale,
    enableFullEditMode: () => undefined,
    setEditMode: () => undefined,
    saveConfig: async (newConfig: LovelaceConfig) => {
      const cards =
        newConfig.views?.[VIRTUAL_VIEW_INDEX]?.sections?.[VIRTUAL_SECTION_INDEX]
          ?.cards ?? [];
      options.onSave(structuredClone(cards));
    },
    deleteConfig: async () => undefined,
    showToast: (params: ShowToastParams) => options.onToast(params),
  };
};

/** Card index from a `ll-*-card` event path (`[view, section, card]`). */
export const cardIndexFromPath = (path: unknown): number | undefined => {
  if (!Array.isArray(path)) return undefined;
  const index = path[path.length - 1];
  return typeof index === "number" ? index : undefined;
};
