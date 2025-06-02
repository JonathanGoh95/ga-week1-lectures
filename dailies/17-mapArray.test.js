import { expect, test, describe } from "bun:test";
import { mapArray } from "./17-mapArray";

describe("17-mapArray", () => {
  test("Example 1", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = mapArray([1, 2, 3], function (n) {
      return n * 2;
    });
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual([2, 4, 6]);
  });

  test("Example 2", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = mapArray(["rose", "tulip", "daisy"], function (f, i) {
      return `${i + 1} - ${f}`;
    });
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(["1 - rose", "2 - tulip", "3 - daisy"]);
  });
});
