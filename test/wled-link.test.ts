import { describe, expect, it } from "vitest";
import { normalizeHost } from "../src/wled/api";
import { parseSegmentUniqueId } from "../src/wled/link";

describe("parseSegmentUniqueId", () => {
  it.each([
    ["48e729941908_0", { mac: "48e729941908", segment: 0 }],
    ["48e729941908_3", { mac: "48e729941908", segment: 3 }],
    // The main light (brightness only) is the bare MAC.
    ["48e729941908", undefined],
  ])("%s → %o", (uniqueId, expected) => {
    expect(parseSegmentUniqueId(uniqueId)).toEqual(expected);
  });
});

describe("normalizeHost", () => {
  it.each([
    ["http://192.168.3.17", "http://192.168.3.17"],
    ["http://192.168.3.17/", "http://192.168.3.17"],
    ["192.168.3.17", "http://192.168.3.17"],
    ["https://wled.example.com/", "https://wled.example.com"],
  ])("%s → %s", (host, expected) => {
    expect(normalizeHost(host)).toBe(expected);
  });
});
