import { test, expect, describe } from "bun:test";
import { formatWithPadding } from "./10-formatWithPadding";

describe("10-formatWithPadding", () => {
  test("Example 1", () => {
    const result = formatWithPadding(123, "0", 5);
    expect(result).toBe("00123");
  });
  test("Example 2", () => {
    const result = formatWithPadding(42, "*", 10);
    expect(result).toBe("********42");
  });
  test("First Argument Length is longer than Second Argument", () => {
    const result = formatWithPadding(1234, "*", 3);
    expect(result).toBe("1234");
  });
});
