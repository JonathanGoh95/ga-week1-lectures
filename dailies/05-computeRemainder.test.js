import { test, expect, describe } from "bun:test";
import { computeRemainder } from "./05-computeRemainder";

describe("05-computeRemainder", () => {
  test("Divisor is 0", () => {
    const result = computeRemainder(4, 0);
    expect(result).toBe(Infinity);
  });
  test("Integers for Dividend and Divisor", () => {
    const result = computeRemainder(10, 2);
    expect(result).toBe(0);
  });
  test("Floating Number for Dividend and Integer for Divisor", () => {
    const result = computeRemainder(10.5, 3);
    expect(result).toBe(1.5);
  });
});
