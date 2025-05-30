import { test, expect, describe } from "bun:test";
import { removeEnds } from "./08-removeEnds";

describe("08-removeEnds", () => {
  test("String Length less than 3 Example 1", () => {
    const result = removeEnds("a");
    expect(result).toBe("");
  });
  test("String Length less than 3 Example 2", () => {
    const result = removeEnds("ab");
    expect(result).toBe("");
  });
  test("Example 1", () => {
    const result = removeEnds("SEB Rocks!");
    expect(result).toBe("EB Rocks");
  });
  test("Example 2", () => {
    const result = removeEnds("!@#$%^&*()");
    expect(result).toBe("@#$%^&*(");
  });
});
