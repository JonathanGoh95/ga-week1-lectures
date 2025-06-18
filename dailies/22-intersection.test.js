import { expect, test, describe } from "bun:test";
import { intersection } from "./22-intersection";

describe("22-intersection", () => {
  test("Empty Argument", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = intersection(["a", 1], []);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual([]);
  });

  test("One Matching Element", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = intersection(["a", 1], [true, "a", 15]);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(["a"]);
  });

  test("No Matching Elements", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = intersection(["a", 1], [true, "b", 15]);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual([]);
  });
  test("Matching Repeating Elements", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = intersection([1, "a", true, 1], [true, 1, "b", 1]);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual([1, true, 1]);
  });
});
