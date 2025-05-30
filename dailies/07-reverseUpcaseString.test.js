import { test, expect, describe } from "bun:test";
import { reverseUpcaseString } from "./07-reverseUpcaseString";

describe("07-reverseUpcaseString", () => {
  test("Empty String Argument", () => {
    const result = reverseUpcaseString("");
    expect(result).toBe("Please enter a string.");
  });
  test("Example 1", () => {
    const result = reverseUpcaseString("SEI Rocks!");
    expect(result).toBe("!SKCOR IES");
  });
  test("Example 2", () => {
    const result = reverseUpcaseString("Thankful for this!");
    expect(result).toBe("!SIHT ROF LUFKNAHT");
  });
});
