import { expect, test, describe } from "bun:test";
import { reduceArray } from "./18-reduceArray";

describe("18-reduceArray", () => {
  test("Example 1", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = reduceArray(
      [1, 2, 3],
      function (acc, n) {
        return acc + n;
      },
      0
    );
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(6);
  });

  test("Example 2", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = reduceArray(
      [1, 2, 3],
      function (acc, n, i) {
        return acc + n + i;
      },
      0
    );
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(9);
  });

  test("Example 3", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = reduceArray(
      ["Yes", "No", "Yes", "Maybe"],
      function (acc, v) {
        acc[v] = acc[v] ? acc[v] + 1 : 1;
        return acc;
      },
      {}
    );
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual({ Yes: 2, No: 1, Maybe: 1 });
  });
});
