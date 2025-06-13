import { expect, test, describe } from "bun:test";
import { flatten } from "./19-flatten";

describe("19-flatten", () => {
  test("Only Arrays", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = flatten([1, [2, 3]]);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual([1, 2, 3]);
  });

  test("Arrays and separate arguments", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = flatten([1, [2, [3, [4]]], 1, "a", ["b", "c"]]);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual([1, 2, 3, 4, 1, "a", "b", "c"]);
  });
});
