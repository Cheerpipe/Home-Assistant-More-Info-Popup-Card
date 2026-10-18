/**
 * What a WLED segment light is linked to: its segment number, the palette
 * select and speed / intensity numbers of the same segment, and the device
 * address. Unique ids follow HA's WLED integration (`light.py`, `select.py`,
 * `number.py`): `<mac>_<segment>`, `<mac>_palette_<segment>`,
 * `<mac>_speed_<segment>`, `<mac>_intensity_<segment>`; the main light
 * (brightness only, no effects) is the bare `<mac>`.
 */
import type { HomeAssistant } from "../ha/types";
import { normalizeHost } from "./api";

export interface WledLink {
  segment: number;
  /** Device origin (`configuration_url`), when known. */
  host?: string;
  palette?: string;
  speed?: string;
  intensity?: string;
}

export type WledLinkError = "not_wled" | "main_light";

interface RegistryEntry {
  entity_id: string;
  unique_id: string;
}

/** `<mac>_<segment>` of a segment light, or undefined for the main light. */
export const parseSegmentUniqueId = (
  uniqueId: string,
): { mac: string; segment: number } | undefined => {
  const match = /^(.+)_(\d+)$/.exec(uniqueId);
  return match ? { mac: match[1]!, segment: Number(match[2]) } : undefined;
};

export const resolveWledLink = async (
  hass: HomeAssistant,
  entityId: string,
  hostOverride?: string,
): Promise<WledLink | WledLinkError> => {
  const display = hass.entities[entityId];
  if (!entityId.startsWith("light.") || display?.platform !== "wled") {
    return "not_wled";
  }
  const deviceId = display.device_id ?? undefined;
  const siblings = Object.values(hass.entities)
    .filter((entity) => deviceId && entity.device_id === deviceId)
    .map((entity) => entity.entity_id);
  const entries = await hass.callWS<Record<string, RegistryEntry | null>>({
    type: "config/entity_registry/get_entries",
    entity_ids: siblings.includes(entityId)
      ? siblings
      : [entityId, ...siblings],
  });
  const own = entries[entityId];
  const parsed = own && parseSegmentUniqueId(own.unique_id);
  if (!parsed) return "main_light";
  const byUniqueId = new Map(
    Object.values(entries)
      .filter((entry): entry is RegistryEntry => Boolean(entry))
      .map((entry) => [entry.unique_id, entry.entity_id]),
  );
  const { mac, segment } = parsed;
  const configurationUrl = deviceId
    ? hass.devices[deviceId]?.configuration_url
    : undefined;
  const host = hostOverride || configurationUrl;
  return {
    segment,
    host: host ? normalizeHost(host) : undefined,
    palette: byUniqueId.get(`${mac}_palette_${segment}`),
    speed: byUniqueId.get(`${mac}_speed_${segment}`),
    intensity: byUniqueId.get(`${mac}_intensity_${segment}`),
  };
};
