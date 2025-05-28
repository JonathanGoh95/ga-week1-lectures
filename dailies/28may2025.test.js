import { expect, test, describe } from "bun:test";
import { fromPairs } from "./28may2025";

describe("fromPairs", () => {
  test("abc test", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = fromPairs([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ]);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  test("name with values", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = fromPairs([
      ["name", "Sam"],
      ["age", 24],
      ["name", "Sally"],
    ]);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual({ name: "Sally", age: 24 });
  });

  test("empty array", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = fromPairs([]);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual({});
  });
});
