import { test, expect, describe } from "bun:test";
import { charCount } from "./09-charCount";

describe("09-charCount", () => {
  test("Example 1", () => {
    const result = charCount("hello");
    expect(result).toEqual({ h: 1, e: 1, l: 2, o: 1 });
  });
  test("Example 2", () => {
    const result = charCount("Today is fantastic!");
    expect(result).toEqual({
      T: 1,
      o: 1,
      d: 1,
      a: 3,
      y: 1,
      " ": 2,
      i: 2,
      s: 2,
      f: 1,
      n: 1,
      t: 2,
      c: 1,
      "!": 1,
    });
  });
});
