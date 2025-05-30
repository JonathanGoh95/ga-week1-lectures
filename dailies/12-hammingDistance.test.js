import { test, expect, describe } from "bun:test";
import { hammingDistance } from "./12-hammingDistance";

describe("12-hammingDistance", () => {
  test("Test not of same length", () => {
    const result = hammingDistance("abc", "ab");
    expect(result).toBe(NaN);
  });
  test("Test same case", () => {
    expect(hammingDistance("abc", "abc")).toBe(0);
    expect(hammingDistance("a1c", "a2c")).toBe(1);
  });
  test("Test mixed case/symbols", () => {
    expect(hammingDistance("!!!!", "****")).toBe(4);
    expect(hammingDistance("1234", "3333")).toBe(3);
    expect(hammingDistance("abCD", "aBCd")).toBe(2);
  });
});
