import {
  mdiCogOutline,
  mdiDockWindow,
  mdiFilterVariant,
  mdiPaletteSwatchOutline,
  mdiViewSplitHorizontal,
} from "@mdi/js";
import type { PopupCardConfig } from "../config";
import type { HomeAssistant } from "../ha/types";
import type { ZoneId } from "../zones";
import { localize, type TranslationKey } from "../localize/localize";

type Schema = Record<string, unknown>;

const options = (hass: HomeAssistant, key: string, values: string[]) =>
  values.map((value) => ({
    value,
    label: localize(hass, `editor.${key}.${value}` as TranslationKey),
  }));

const sorted = (items: { value: string; label: string }[]) =>
  items.sort((a, b) => a.label.localeCompare(b.label));

/** Integrations that provide entities (entity registry `platform`). */
const integrationOptions = (hass: HomeAssistant) =>
  sorted(
    [
      ...new Set(
        Object.values(hass.entities ?? {})
          .map((entry) => entry.platform)
          .filter((platform): platform is string => Boolean(platform)),
      ),
    ].map((value) => ({
      value,
      label: hass.localize(`component.${value}.title`) || value,
    })),
  );

const domainOptions = (hass: HomeAssistant) =>
  sorted(
    [...new Set(Object.keys(hass.states).map((id) => id.split(".")[0]))].map(
      (value) => ({
        value,
        label: hass.localize(`component.${value}.title`) || value,
      }),
    ),
  );

/** Template popup criteria, stored under `match`. */
const matchSchema = (hass: HomeAssistant): Schema => ({
  name: "match",
  type: "expandable",
  expanded: true,
  iconPath: mdiFilterVariant,
  title: localize(hass, "editor.match"),
  schema: [
    {
      name: "",
      type: "grid",
      schema: [
        {
          name: "integration",
          selector: {
            select: {
              mode: "dropdown",
              custom_value: true,
              options: integrationOptions(hass),
            },
          },
        },
        {
          name: "domain",
          selector: {
            select: {
              mode: "dropdown",
              custom_value: true,
              options: domainOptions(hass),
            },
          },
        },
      ],
    },
    { name: "entity_glob", selector: { text: {} } },
    { name: "entities", selector: { entity: { multiple: true } } },
  ],
});

/** Built per config, like native editors do, to show dependent fields only when relevant. */
export const buildSchema = (
  hass: HomeAssistant,
  config: PopupCardConfig,
): Schema[] => [
  {
    name: "general",
    type: "expandable",
    flatten: true,
    expanded: true,
    iconPath: mdiDockWindow,
    title: localize(hass, "editor.section.general"),
    schema: [
      { name: "popup_id", required: true, selector: { text: { prefix: "#" } } },
      { name: "entity", selector: { entity: {} } },
      {
        name: "",
        type: "grid",
        schema: [
          { name: "name", selector: { text: {} } },
          {
            name: "icon",
            selector: { icon: {} },
            context: { icon_entity: "entity" },
          },
        ],
      },
    ],
  },
  {
    name: "appearance",
    type: "expandable",
    flatten: true,
    iconPath: mdiPaletteSwatchOutline,
    title: localize(hass, "editor.section.appearance"),
    schema: [
      {
        name: "mode",
        selector: {
          select: {
            mode: "dropdown",
            options: options(hass, "mode", [
              "auto",
              "dialog",
              "bottom_sheet",
              "top_sheet",
            ]),
          },
        },
      },
      {
        name: "breadcrumb",
        selector: {
          select: {
            mode: "dropdown",
            custom_value: true,
            options: options(hass, "breadcrumb", ["auto", "none"]),
          },
        },
      },
      {
        name: "",
        type: "grid",
        schema: [
          {
            name: "width",
            selector: {
              select: {
                mode: "dropdown",
                options: options(hass, "width", [
                  "small",
                  "medium",
                  "large",
                  "full",
                  "custom",
                ]),
              },
            },
          },
          ...(config.width === "custom"
            ? [{ name: "custom_width", selector: { text: {} } }]
            : []),
        ],
      },
      {
        name: "",
        type: "grid",
        schema: [
          {
            name: "height",
            selector: {
              select: {
                mode: "dropdown",
                options: options(hass, "height", ["native", "auto", "custom"]),
              },
            },
          },
        ],
      },
      ...(config.height === "custom"
        ? [
            {
              name: "",
              type: "grid",
              schema: [
                { name: "min_height", selector: { text: {} } },
                { name: "max_height", selector: { text: {} } },
              ],
            },
          ]
        : []),
      {
        name: "column_span",
        selector: {
          number: {
            min: 1,
            max: 4,
            step: 1,
            mode: "slider",
            slider_ticks: true,
          },
        },
      },
      {
        name: "layout",
        selector: {
          select: {
            mode: "list",
            options: options(hass, "layout", ["single", "zones"]),
          },
        },
      },
      // With zones, each zone has its alignment in the Zones section.
      ...(config.layout === "zones" ? [] : [alignSchema(hass)]),
      { name: "card_borders", selector: { boolean: {} } },
      ...(config.entity || config.match
        ? [{ name: "show_header_actions", selector: { boolean: {} } }]
        : []),
    ],
  },
  ...(config.layout === "zones" ? [zonesSchema(hass)] : []),
  {
    name: "behavior",
    type: "expandable",
    flatten: true,
    iconPath: mdiCogOutline,
    title: localize(hass, "editor.section.behavior"),
    schema: [
      { name: "replace_more_info", selector: { boolean: {} } },
      ...(config.replace_more_info ? [matchSchema(hass)] : []),
      {
        name: "nested_more_info",
        selector: {
          select: {
            mode: "list",
            options: options(hass, "nested_more_info", ["inline", "dialog"]),
          },
        },
      },
      { name: "dismissable", selector: { boolean: {} } },
      {
        name: "auto_close",
        selector: {
          number: {
            min: 0,
            max: 3600,
            step: 5,
            mode: "box",
            unit_of_measurement: "s",
          },
        },
      },
      { name: "keep_alive", selector: { boolean: {} } },
    ],
  },
];

const alignSchema = (hass: HomeAssistant, withHeight = false) => ({
  name: "",
  type: "grid",
  schema: [
    {
      name: "vertical_align",
      selector: {
        select: {
          mode: "dropdown",
          options: options(hass, "vertical_align", ["top", "center", "bottom"]),
        },
      },
    },
    {
      name: "horizontal_align",
      selector: {
        select: {
          mode: "dropdown",
          options: options(hass, "horizontal_align", [
            "left",
            "center",
            "right",
          ]),
        },
      },
    },
    ...(withHeight ? [{ name: "min_height", selector: { text: {} } }] : []),
  ],
});

/**
 * `layout: zones`: alignment of each zone, kept out of the cards frame.
 * Header and footer edit their nested object; the main zone uses the
 * top-level keys.
 */
const zonesSchema = (hass: HomeAssistant): Schema => {
  const zone = (id: ZoneId) => ({
    name: id === "main" ? "main_zone" : id,
    type: "expandable",
    flatten: id === "main",
    title: `${localize(hass, `editor.zone.${id}`)} · ${localize(
      hass,
      `editor.zone.${id}_hint`,
    )}`,
    schema: [alignSchema(hass, id !== "main")],
  });
  return {
    name: "zones",
    type: "expandable",
    flatten: true,
    expanded: true,
    iconPath: mdiViewSplitHorizontal,
    title: localize(hass, "editor.section.zones"),
    schema: [zone("header"), zone("main"), zone("footer")],
  };
};

const HELPERS: Partial<Record<string, TranslationKey>> = {
  entity: "editor.entity_helper",
  breadcrumb: "editor.breadcrumb_helper",
  custom_width: "editor.length_helper",
  min_height: "editor.length_helper",
  max_height: "editor.length_helper",
  column_span: "editor.column_span_helper",
  layout: "editor.layout_helper",
  horizontal_align: "editor.horizontal_align_helper",
  replace_more_info: "editor.replace_more_info_helper",
  entity_glob: "editor.entity_glob_helper",
  entities: "editor.match_entities_helper",
};

const LABELS: Partial<Record<string, TranslationKey>> = {
  popup_id: "editor.popup_id",
  entity: "editor.entity",
  name: "editor.name",
  icon: "editor.icon",
  breadcrumb: "editor.breadcrumb",
  mode: "editor.mode",
  width: "editor.width",
  custom_width: "editor.custom_width",
  height: "editor.height",
  min_height: "editor.min_height",
  max_height: "editor.max_height",
  column_span: "editor.column_span",
  layout: "editor.layout",
  vertical_align: "editor.vertical_align",
  horizontal_align: "editor.horizontal_align",
  card_borders: "editor.card_borders",
  show_header_actions: "editor.show_header_actions",
  replace_more_info: "editor.replace_more_info",
  integration: "editor.match_integration",
  domain: "editor.match_domain",
  entity_glob: "editor.entity_glob",
  entities: "editor.match_entities",
  nested_more_info: "editor.nested_more_info",
  dismissable: "editor.dismissable",
  auto_close: "editor.auto_close",
  keep_alive: "editor.keep_alive",
};

export const computeLabel =
  (hass: HomeAssistant) =>
  (schema: { name: string; title?: string }): string => {
    if (schema.title) return schema.title;
    const key = LABELS[schema.name];
    return key ? localize(hass, key) : schema.name;
  };

export const computeHelper =
  (hass: HomeAssistant, config: PopupCardConfig) =>
  (schema: { name: string }): string | undefined => {
    if (schema.name === "popup_id") {
      return localize(hass, "editor.popup_id_helper", {
        id: config.popup_id || "…",
      });
    }
    const key = HELPERS[schema.name];
    return key ? localize(hass, key) : undefined;
  };
