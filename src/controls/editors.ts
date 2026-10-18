/**
 * Visual editors of the control cards (`form-editor.ts`): the `ha-form` of
 * `forms.ts` with the values each card uses for unset options.
 */
import { CONTROLS_CARD_DEFAULTS, STATE_CARD_DEFAULTS } from "./editor-defaults";
import { defineFormEditor } from "./form-editor";
import { controlsCardForm, stateCardForm } from "./forms";

export const STATE_CARD_EDITOR_TAG = "more-info-state-card-editor";
export const CONTROLS_CARD_EDITOR_TAG = "more-info-controls-card-editor";

defineFormEditor(STATE_CARD_EDITOR_TAG, stateCardForm, STATE_CARD_DEFAULTS);
defineFormEditor(
  CONTROLS_CARD_EDITOR_TAG,
  controlsCardForm,
  CONTROLS_CARD_DEFAULTS,
);
