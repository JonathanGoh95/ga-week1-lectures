import { test, expect, describe } from "bun:test";
import { range } from "./06-range";

describe("06-range", () => {
  test("First Argument greater than Second", () => {
    const result = range(5, 2);
    expect(result).toEqual("First argument must be less than second");
  });
  test("Same Argument Values", () => {
    const result = range(1, 1);
    expect(result).toEqual([]);
  });
  test("Normal Range", () => {
    const result = range(1, 4);
    expect(result).toEqual([1, 2, 3]);
  });
  test("Negative Starting Range", () => {
    const result = range(-2, 3);
    expect(result).toEqual([-2, -1, 0, 1, 2]);
  });
});
