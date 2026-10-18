/**
 * WLED JSON API, called by the browser: the parts Home Assistant's WLED
 * integration doesn't expose (secondary and tertiary colors, the custom
 * sliders and options, palette previews, effect metadata). The firmware
 * sends CORS headers and answers the preflight (`wled_server.cpp`).
 */
import type { PaletteStops } from "./meta";

export interface WledSegment {
  id: number;
  n?: string;
  on?: boolean;
  bri?: number;
  col: number[][];
  fx: number;
  pal: number;
  sx: number;
  ix: number;
  c1?: number;
  c2?: number;
  c3?: number;
  o1?: boolean;
  o2?: boolean;
  o3?: boolean;
}

export interface WledCatalog {
  version: string;
  effectNames: string[];
  fxdata: string[];
  paletteNames: string[];
  /** Palette id → preview stops (`/json/palx`). */
  palx: Record<string, PaletteStops>;
}

const TIMEOUT_MS = 5000;

/** `configuration_url` or the `host` option, as an origin without slash. */
export const normalizeHost = (host: string): string => {
  const url = /^https?:\/\//i.test(host) ? host : `http://${host}`;
  return url.replace(/\/+$/, "");
};

/** An http device can't be called from a page served over https. */
export const blockedByMixedContent = (host: string): boolean =>
  window.location.protocol === "https:" && host.startsWith("http:");

const request = async <T>(
  host: string,
  path: string,
  body?: unknown,
): Promise<T> => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(`${host}${path}`, {
      method: body === undefined ? "GET" : "POST",
      headers:
        body === undefined ? undefined : { "Content-Type": "application/json" },
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`WLED ${path}: ${response.status}`);
    return (await response.json()) as T;
  } finally {
    clearTimeout(timer);
  }
};

const catalogs = new Map<string, Promise<WledCatalog>>();

const storageKey = (host: string, version: string) =>
  `more-info-popup-card:wled:${host}:${version}`;

const readStored = (key: string): WledCatalog | undefined => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as WledCatalog) : undefined;
  } catch {
    return undefined;
  }
};

const store = (key: string, catalog: WledCatalog) => {
  try {
    localStorage.setItem(key, JSON.stringify(catalog));
  } catch {
    // Storage full or blocked: the memory cache still works.
  }
};

const fetchCatalog = async (host: string): Promise<WledCatalog> => {
  const info = await request<{ ver: string }>(host, "/json/info");
  const key = storageKey(host, info.ver);
  const stored = readStored(key);
  if (stored) return stored;
  // One request at a time: these are small devices.
  const effectNames = await request<string[]>(host, "/json/eff");
  const fxdata = await request<string[]>(host, "/json/fxdata");
  const paletteNames = await request<string[]>(host, "/json/pal");
  const palx: Record<string, PaletteStops> = {};
  let pages = 0;
  for (let page = 0; page <= pages; page++) {
    const result = await request<{
      m: number;
      p: Record<string, PaletteStops>;
    }>(host, `/json/palx?page=${page}`);
    pages = result.m;
    Object.assign(palx, result.p);
  }
  const catalog = {
    version: info.ver,
    effectNames,
    fxdata,
    paletteNames,
    palx,
  };
  store(key, catalog);
  return catalog;
};

/** Effects, metadata and palettes of a device; cached per firmware. */
export const loadCatalog = (host: string): Promise<WledCatalog> => {
  let catalog = catalogs.get(host);
  if (!catalog) {
    catalog = fetchCatalog(host);
    catalogs.set(host, catalog);
    catalog.catch(() => catalogs.delete(host));
  }
  return catalog;
};

export const getSegments = async (host: string): Promise<WledSegment[]> =>
  (await request<{ seg: WledSegment[] }>(host, "/json/state")).seg;

/** Changes one segment; `col: [[], rgb]` keeps the primary color. */
export const setSegment = async (
  host: string,
  segment: number,
  data: Partial<Omit<WledSegment, "id">>,
): Promise<WledSegment[]> =>
  (
    await request<{ seg: WledSegment[] }>(host, "/json/state", {
      seg: [{ id: segment, ...data }],
      v: true,
    })
  ).seg;
