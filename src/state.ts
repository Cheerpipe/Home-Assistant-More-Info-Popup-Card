/** Shared runtime state between the registry and the singleton dialog. */
export interface ActivePopup {
  popupId: string;
  close: () => void;
}

let active: ActivePopup | undefined;

export const getActivePopup = (): ActivePopup | undefined => active;

export const setActivePopup = (popup: ActivePopup | undefined): void => {
  active = popup;
};
