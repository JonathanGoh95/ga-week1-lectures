import { test, expect, describe } from "bun:test";
import { sumNumbers } from "./03-sumNumbers";

describe("03-sumNumbers", () => {
  test("Empty Array", () => {
    const result = sumNumbers([]);
    expect(result).toBe(0);
  });
  test("Single Element", () => {
    const result = sumNumbers([10]);
    expect(result).toBe(10);
  });
  test("Two Elements", () => {
    const result = sumNumbers([5, 10]);
    expect(result).toBe(15);
  });
  test("Multiple Elements", () => {
    const result = sumNumbers([2, 10, -5]);
    expect(result).toBe(7);
  });
});
