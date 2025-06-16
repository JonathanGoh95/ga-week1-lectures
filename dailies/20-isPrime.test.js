import { expect, test, describe } from "bun:test";
import { isPrime } from "./20-isPrime";

describe("20-isPrime", () => {
  test("Prime Number 1", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = isPrime(1);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(true);
  });

  test("Prime Number 2", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = isPrime(2);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(true);
  });

  test("Prime Number 3", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = isPrime(3);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(true);
  });
  test("Not a Prime Number 1", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = isPrime(4);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(false);
  });
  test("Prime Number 4", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = isPrime(11);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(true);
  });
  test("Prime Number 5", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = isPrime(13);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(true);
  });
  test("Prime Number 6", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = isPrime(17);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(true);
  });
  test("Prime Number 7", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = isPrime(19);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(true);
  });
  test("Prime Number 8", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = isPrime(211);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(true);
  });
});
