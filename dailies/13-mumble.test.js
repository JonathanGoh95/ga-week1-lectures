import { test, expect, describe } from "bun:test";
import { mumble } from "./13-mumble";

describe("13-mumble", () => {
  test("Single Character", () => {
    const result = mumble("X");
    expect(result).toBe("X");
  });
  test("Examples", () => {
    expect(mumble("abc")).toBe("a-bb-ccc");
    expect(mumble("121")).toBe("1-22-111");
  });
  test("Whitespace Character", () => {
    expect(mumble("!A 2")).toBe("!-AA-   -2222");
  });
});
