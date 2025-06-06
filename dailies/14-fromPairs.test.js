import { expect, test, describe } from "bun:test";
import { fromPairs } from "./14-fromPairs";

describe("14-fromPairs", () => {
  test("abc Test", () => {
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

  test("Keys with Values", () => {
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

  test("Enpty Array", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = fromPairs([]);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual({});
  });
});
