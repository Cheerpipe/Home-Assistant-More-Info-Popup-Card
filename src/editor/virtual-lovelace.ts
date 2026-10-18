/**
 * A minimal `Lovelace` controller that lets native `hui-section`s run their
 * full edit mode (overlay, drag & drop, add button, copy/cut, delete) on the
 * popup's own card lists instead of the dashboard config.
 *
 * `hui-section` resolves cards with paths `[viewIndex, sectionIndex, card]`,
 * so the popup is exposed as view 0 with one section per zone; cards dragged
 * between zones move between those sections.
 */
import type {
  LovelaceCardConfig,
  Lovelace,
  LovelaceConfig,
  LovelaceSectionConfig,
  ShowToastParams,
} from "../ha/types";

export interface VirtualLovelaceOptions {
  sections: LovelaceSectionConfig[];
  locale: Record<string, unknown>;
  /** The cards of every section, in section order. */
  onSave: (cards: LovelaceCardConfig[][]) => void;
  /** Toasts with an action must not fire HA's global `undo-change`. */
  onToast: (params: ShowToastParams) => void;
}

export const VIRTUAL_VIEW_INDEX = 0;

export const createVirtualLovelace = (
  options: VirtualLovelaceOptions,
): Lovelace => {
  const config: LovelaceConfig = {
    views: [{ type: "sections", sections: options.sections }],
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
      const sections = newConfig.views?.[VIRTUAL_VIEW_INDEX]?.sections ?? [];
      options.onSave(
        options.sections.map((_, i) =>
          structuredClone(sections[i]?.cards ?? []),
        ),
      );
    },
    deleteConfig: async () => undefined,
    showToast: (params: ShowToastParams) => options.onToast(params),
  };
};

/** Section and card index from a `ll-*-card` event path (`[view, section, card]`). */
export const cardPathFromEvent = (
  path: unknown,
): { section: number; card: number } | undefined => {
  if (!Array.isArray(path) || path.length < 3) return undefined;
  const [, section, card] = path.slice(-3);
  return typeof section === "number" && typeof card === "number"
    ? { section, card }
    : undefined;
};
