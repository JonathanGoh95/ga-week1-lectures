import { expect, test, describe } from "bun:test";
import { mergeObjects } from "./15-mergeObjects";

describe("15-mergeObjects", () => {
  test("Number of Objects less than 2", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = mergeObjects([{ a: 1, b: 2, c: 3 }]);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual("The number of objects is less than 2");
  });

  test("2 Objects", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = mergeObjects({ a: 1, b: 2, c: 3 }, { d: 4 });
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  test("Multiple Objects", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = mergeObjects(
      { a: 1, b: 2, c: 3 },
      { d: 4 },
      { b: 22, d: 44 }
    );
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual({ a: 1, b: 22, c: 3, d: 44 });
  });
});
