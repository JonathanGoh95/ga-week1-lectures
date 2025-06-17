import { expect, test, describe } from "bun:test";
import { primeFactors } from "./21-primeFactors";

describe("21-primeFactors", () => {
  test("Less than 1", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = primeFactors(0);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual([]);
  });

  test("Not an Integer", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = primeFactors(1.5);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual([]);
  });

  test("Prime Number 2", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = primeFactors(2);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual([2]);
  });
  test("Prime Factors 1", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = primeFactors(4);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual([2, 2]);
  });
  test("Prime Factors 2", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = primeFactors(18);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual([2, 3, 3]);
  });
  test("No Factors", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = primeFactors(29);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual([29]);
  });
  test("Big Number Factors 1", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = primeFactors(105);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual([3, 5, 7]);
  });
  test("Big Number Factors 2", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = primeFactors(200);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual([2, 2, 2, 5, 5]);
  });
});
