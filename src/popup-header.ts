import { html, nothing, type TemplateResult } from "lit";
import type { ResolvedPopupConfig } from "./config";
import { computeEntityNameList, computeRTL, isAdmin } from "./ha/entity";
import type { ChildView, HomeAssistant, MoreInfoView } from "./ha/types";

export interface Frame {
  entityId?: string;
  view: "root" | MoreInfoView;
  children: ChildView[];
}

export interface HeaderInfo {
  title: string;
  breadcrumb: string[];
  breadcrumbClickable: boolean;
}

const rootNameList = (
  hass: HomeAssistant,
  config: ResolvedPopupConfig,
): string[] => {
  const entityList = config.entity
    ? computeEntityNameList(hass, config.entity)
    : [];
  const title = config.name ?? entityList[entityList.length - 1] ?? "";
  let breadcrumb: string[] = [];
  if (config.breadcrumb === "auto") {
    breadcrumb = entityList.slice(0, -1);
  } else if (config.breadcrumb !== "none" && config.breadcrumb) {
    breadcrumb = [config.breadcrumb];
  }
  return [...breadcrumb, title];
};

const viewTitle = (hass: HomeAssistant, frame: Frame): string | undefined => {
  const child = frame.children[frame.children.length - 1];
  switch (frame.view) {
    case "details":
      return hass.localize("ui.dialogs.more_info_control.details");
    case "related":
      return hass.localize("ui.dialogs.more_info_control.related");
    case "add_to":
      return hass.localize("ui.dialogs.more_info_control.add_to.item");
    case "settings":
      return (
        child?.viewTitle ||
        hass.localize("ui.dialogs.more_info_control.settings")
      );
    default:
      return child?.viewTitle;
  }
};

/** Same title/breadcrumb rules as `ha-more-info-dialog` (`render()`). */
export const computeHeaderInfo = (
  hass: HomeAssistant,
  config: ResolvedPopupConfig,
  frame: Frame,
): HeaderInfo => {
  const list =
    frame.entityId && frame.entityId !== config.entity
      ? computeEntityNameList(hass, frame.entityId)
      : rootNameList(hass, config);
  const title = frame.view === "root" ? undefined : viewTitle(hass, frame);
  const breadcrumb = title ? list : list.slice(0, -1);
  return {
    title: title ?? list[list.length - 1] ?? "",
    breadcrumb: breadcrumb.filter(Boolean),
    breadcrumbClickable:
      Boolean(frame.entityId) &&
      isAdmin(hass) &&
      (frame.view !== "root" || config.breadcrumb === "auto"),
  };
};

export const renderTitle = (
  hass: HomeAssistant,
  info: HeaderInfo,
  slot: string,
  onTitleClick?: () => void,
  onBreadcrumbClick?: (ev: Event) => void,
): TemplateResult => {
  const separator = computeRTL(hass) ? " ◂ " : " ▸ ";
  const crumb = info.breadcrumb.join(separator);
  return html`
    <span slot=${slot} class="title" @click=${onTitleClick}>
      ${
        info.breadcrumb.length
          ? info.breadcrumbClickable && onBreadcrumbClick
            ? html`<button class="breadcrumb" @click=${onBreadcrumbClick}>
                ${crumb}
              </button>`
            : html`<p class="breadcrumb">${crumb}</p>`
          : nothing
      }
      <p class="main">${info.title}</p>
    </span>
  `;
};
