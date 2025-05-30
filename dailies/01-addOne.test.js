import { test, expect, describe } from "bun:test";
import { addOne } from "./01-addOne";

describe("01-addOne", () => {
  test("No Argument", () => {
    const result = addOne();
    expect(result).toBe("Please input a value.");
  });
  test("Positive Number", () => {
    const result = addOne(3);
    expect(result).toBe(4);
  });
  test("Negative Number", () => {
    const result = addOne(-4);
    expect(result).toBe(-3);
  });
});
