/**
 * Data helpers of the native more-info controls (`src/data/<domain>.ts`,
 * `src/common/entity/*`) that the state card needs to draw the parts of
 * `more-info-<domain>` that have no reusable element.
 */
import { computeDomain } from "../ha/entity";
import type {
  EntityRegistryDisplayEntry,
  ExtEntityRegistryEntry,
  HassEntity,
  HomeAssistant,
} from "../ha/types";
import { supports } from "./state-controls";

/** `CoverEntityFeature` (`src/data/feature/cover_entity_feature.ts`). */
export const CoverFeature = {
  OPEN: 1,
  CLOSE: 2,
  SET_POSITION: 4,
  STOP: 8,
  OPEN_TILT: 16,
  CLOSE_TILT: 32,
  STOP_TILT: 64,
  SET_TILT_POSITION: 128,
} as const;

/** `ValveEntityFeature` (`src/data/valve.ts`). */
export const ValveFeature = {
  OPEN: 1,
  CLOSE: 2,
  SET_POSITION: 4,
  STOP: 8,
} as const;

/** `LockEntityFeature` (`src/data/lock.ts`). */
export const LOCK_OPEN = 1;

/** `SirenEntityFeature` (`src/data/feature/siren_entity_feature.ts`). */
export const SirenFeature = { TONES: 4, VOLUME_SET: 8, DURATION: 16 } as const;

/** `VacuumEntityFeature` (`src/data/vacuum.ts`). */
export const VacuumFeature = {
  PAUSE: 4,
  STOP: 8,
  RETURN_HOME: 16,
  STATUS: 128,
  LOCATE: 512,
  CLEAN_SPOT: 1024,
  STATE: 4096,
  START: 8192,
  CLEAN_AREA: 16384,
} as const;

/** `LawnMowerEntityFeature` (`src/data/lawn_mower.ts`). */
export const LawnMowerFeature = {
  START_MOWING: 1,
  PAUSE: 2,
  DOCK: 4,
  STOP: 8,
} as const;

const all = (stateObj: HassEntity, ...features: number[]) =>
  features.every((feature) => supports(stateObj, feature));

/**
 * Which native controls `more-info-cover` / `more-info-valve` draw: the
 * position sliders, the button control and whether the mode switch shows.
 */
export interface PositionControls {
  position: boolean;
  tilt: boolean;
  /** Button-mode control: open / close toggle or open / stop / close buttons. */
  buttons: "toggle" | "buttons" | undefined;
  switchMode: boolean;
}

export const coverControls = (stateObj: HassEntity): PositionControls => {
  const position = supports(stateObj, CoverFeature.SET_POSITION);
  const tilt = supports(stateObj, CoverFeature.SET_TILT_POSITION);
  const openClose = supports(
    stateObj,
    CoverFeature.OPEN | CoverFeature.CLOSE | CoverFeature.STOP,
  );
  const tiltButtons = supports(
    stateObj,
    CoverFeature.OPEN_TILT | CoverFeature.CLOSE_TILT | CoverFeature.STOP_TILT,
  );
  const openCloseOnly =
    all(stateObj, CoverFeature.OPEN, CoverFeature.CLOSE) &&
    !supports(stateObj, CoverFeature.STOP) &&
    !tiltButtons &&
    !position &&
    !tilt;
  return {
    position,
    tilt,
    buttons: openCloseOnly
      ? "toggle"
      : openClose || tiltButtons
        ? "buttons"
        : undefined,
    switchMode: (position || tilt) && (openClose || tiltButtons),
  };
};

export const valveControls = (stateObj: HassEntity): PositionControls => {
  const position = supports(stateObj, ValveFeature.SET_POSITION);
  const openClose = supports(
    stateObj,
    ValveFeature.OPEN | ValveFeature.CLOSE | ValveFeature.STOP,
  );
  const openCloseOnly =
    all(stateObj, ValveFeature.OPEN, ValveFeature.CLOSE) &&
    !supports(stateObj, ValveFeature.STOP) &&
    !position;
  return {
    position,
    tilt: false,
    buttons: openCloseOnly ? "toggle" : openClose ? "buttons" : undefined,
    switchMode: position && openClose,
  };
};

/** `shouldShowFavoriteOptions` (`src/data/entity/entity_registry.ts`). */
const showFavorites = (values: unknown) =>
  values == null || (Array.isArray(values) && values.length > 0);

/** Same condition as `more-info-cover` / `more-info-valve`. */
export const showFavoritePositions = (
  stateObj: HassEntity,
  entry: ExtEntityRegistryEntry | null | undefined,
): boolean => {
  if (!entry) return false;
  const domain = computeDomain(stateObj.entity_id);
  const options = entry.options?.[domain];
  if (domain === "valve") {
    return (
      supports(stateObj, ValveFeature.SET_POSITION) &&
      showFavorites(options?.favorite_positions)
    );
  }
  return (
    (supports(stateObj, CoverFeature.SET_POSITION) &&
      showFavorites(options?.favorite_positions)) ||
    (supports(stateObj, CoverFeature.SET_TILT_POSITION) &&
      showFavorites(options?.favorite_tilt_positions))
  );
};

/** `stateActive` (`src/common/entity/state_active.ts`), for these domains. */
export const stateActive = (stateObj: HassEntity): boolean => {
  const state = stateObj.state;
  if (state === "unavailable" || state === "unknown" || state === "off") {
    return false;
  }
  switch (computeDomain(stateObj.entity_id)) {
    case "alarm_control_panel":
      return state !== "disarmed";
    case "cover":
    case "valve":
      return state !== "closed";
    case "lawn_mower":
      return !["docked", "paused", "idle"].includes(state);
    case "lock":
      return state !== "locked";
    case "vacuum":
      return !["idle", "docked", "paused"].includes(state);
    default:
      return true;
  }
};

/** `stateColorCss` (`src/common/entity/state_color.ts`), for these domains. */
export const stateColorCss = (stateObj: HassEntity): string => {
  if (stateObj.state === "unavailable") return "var(--state-unavailable-color)";
  const domain = computeDomain(stateObj.entity_id);
  const deviceClass = stateObj.attributes.device_class;
  const stateKey = stateObj.state.toLowerCase().replace(/[^a-z0-9]+/g, "_");
  const activeKey = stateActive(stateObj) ? "active" : "inactive";
  const properties = [
    ...(deviceClass
      ? [`--state-${domain}-${deviceClass}-${stateKey}-color`]
      : []),
    `--state-${domain}-${stateKey}-color`,
    `--state-${domain}-${activeKey}-color`,
    `--state-${activeKey}-color`,
  ];
  return properties.reduceRight<string>(
    (str, variable) => `var(${variable}${str ? `, ${str}` : ""})`,
    "",
  );
};

/** `computeCoverPositionStateDisplay` / `computeValvePositionStateDisplay`. */
export const positionStateDisplay = (
  hass: HomeAssistant,
  stateObj: HassEntity,
): string => {
  const attrs = stateObj.attributes;
  const position: number | undefined = stateActive(stateObj)
    ? (attrs.current_position ??
      (computeDomain(stateObj.entity_id) === "cover"
        ? attrs.current_tilt_position
        : undefined))
    : undefined;
  return position && position !== 100
    ? hass.formatEntityAttributeValue(
        stateObj,
        "current_position",
        Math.round(position),
      )
    : "";
};

/** `src/data/lock.ts`. */
const lockWaiting = (stateObj: HassEntity) =>
  ["opening", "unlocking", "locking"].includes(stateObj.state);

export const lockCanOpen = (stateObj: HassEntity): boolean =>
  stateObj.state !== "unavailable" &&
  (stateObj.attributes.assumed_state === true ||
    (stateObj.state !== "open" && !lockWaiting(stateObj)));

/** States in which `more-info-alarm_control_panel` shows the disarm button. */
export const ALARM_DISARM_STATES = ["triggered", "arming", "pending"];

/** `src/data/vacuum.ts`. */
export const vacuumCleaning = (stateObj: HassEntity) =>
  ["cleaning", "on"].includes(stateObj.state);

export const vacuumCanStop = (stateObj: HassEntity) =>
  !["docked", "off", "idle"].includes(stateObj.state);

export const vacuumCanReturnHome = (stateObj: HassEntity) =>
  stateObj.state !== "unavailable" && stateObj.state !== "returning";

/** `src/data/lawn_mower.ts`. */
export const mowerCanStop = (stateObj: HassEntity) =>
  stateObj.state !== "unavailable" &&
  !["docked", "idle"].includes(stateObj.state);

export const mowerCanDock = (stateObj: HassEntity) =>
  stateObj.state !== "unavailable" && stateObj.state !== "docked";

/**
 * Battery of the entity's device, as the vacuum and lawn mower more-info
 * show it in the header (`findBatteryEntity` / `findBatteryChargingEntity`).
 */
export const deviceBattery = (
  hass: HomeAssistant,
  entityId: string,
): { battery: HassEntity; charging?: HassEntity } | undefined => {
  const deviceId = hass.entities[entityId]?.device_id;
  if (!deviceId) return undefined;
  const entities = Object.values(hass.entities).filter(
    (entity: EntityRegistryDisplayEntry) => entity.device_id === deviceId,
  );
  const priorities = ["sensor", "binary_sensor"];
  const battery = entities
    .map((entity) => hass.states[entity.entity_id])
    .filter(
      (state): state is HassEntity =>
        state?.attributes.device_class === "battery" &&
        priorities.includes(computeDomain(state.entity_id)),
    )
    .sort(
      (a, b) =>
        priorities.indexOf(computeDomain(a.entity_id)) -
        priorities.indexOf(computeDomain(b.entity_id)),
    )[0];
  if (
    !battery ||
    (computeDomain(battery.entity_id) !== "binary_sensor" &&
      isNaN(Number(battery.state)))
  ) {
    return undefined;
  }
  const charging = entities
    .map((entity) => hass.states[entity.entity_id])
    .find((state) => state?.attributes.device_class === "battery_charging");
  return { battery, charging };
};

/** `blankBeforePercent` (`src/common/translations/blank_before_percent.ts`). */
export const blankBeforePercent = (hass: HomeAssistant): string =>
  ["cs", "de", "fi", "fr", "sk", "sv"].includes(
    (hass.locale?.language as string | undefined) ?? hass.language,
  )
    ? " "
    : "";

/**
 * Asks for the code with the native code dialog (public card helper) when
 * the entity needs one and has no default code. Null when cancelled.
 */
const askCode = async (
  element: HTMLElement,
  params: {
    codeFormat: "text" | "number";
    codePattern?: string;
    title: string;
    submitText: string;
  },
): Promise<string | null> => {
  const helpers = await window.loadCardHelpers?.();
  if (!helpers?.showEnterCodeDialog) {
    throw new Error("The code dialog is not available");
  }
  return helpers.showEnterCodeDialog(element, params);
};

/** `callProtectedLockService` (`src/data/lock.ts`). */
export const callProtectedLockService = async (
  element: HTMLElement,
  hass: HomeAssistant,
  stateObj: HassEntity,
  entry: ExtEntityRegistryEntry | null | undefined,
  service: "lock" | "unlock" | "open",
): Promise<void> => {
  let code: string | undefined;
  if (stateObj.attributes.code_format && !entry?.options?.lock?.default_code) {
    const response = await askCode(element, {
      codeFormat: "text",
      codePattern: stateObj.attributes.code_format,
      title: hass.localize(`ui.card.lock.${service}`),
      submitText: hass.localize(`ui.card.lock.${service}`),
    });
    if (response == null) throw new Error("Code dialog closed");
    code = response;
  }
  await hass.callService("lock", service, {
    entity_id: stateObj.entity_id,
    code,
  });
};

/** `setProtectedAlarmControlPanelMode(…, "disarmed")`. */
export const disarmAlarm = async (
  element: HTMLElement,
  hass: HomeAssistant,
  stateObj: HassEntity,
  entry: ExtEntityRegistryEntry | null | undefined,
): Promise<void> => {
  let code: string | undefined;
  if (
    stateObj.attributes.code_format &&
    !entry?.options?.alarm_control_panel?.default_code
  ) {
    const response = await askCode(element, {
      codeFormat: stateObj.attributes.code_format,
      title: hass.localize("ui.card.alarm_control_panel.disarm"),
      submitText: hass.localize("ui.card.alarm_control_panel.disarm"),
    });
    if (response == null) throw new Error("Code dialog closed");
    code = response;
  }
  await hass.callService("alarm_control_panel", "alarm_disarm", {
    entity_id: stateObj.entity_id,
    code,
  });
};
