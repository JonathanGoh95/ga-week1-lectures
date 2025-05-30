import { test, expect, describe } from "bun:test";
import { reverseUpcaseString } from "./07-reverseUpcaseString";

describe("07-reverseUpcaseString", () => {
  test("Empty String Argument", () => {
    const result = reverseUpcaseString("");
    expect(result).toEqual("Please enter a string.");
  });
  test("Example 1", () => {
    const result = reverseUpcaseString("SEI Rocks!");
    expect(result).toEqual("!SKCOR IES");
  });
  test("Example 2", () => {
    const result = reverseUpcaseString("Thankful for this!");
    expect(result).toEqual("!SIHT ROF LUFKNAHT");
  });
});
