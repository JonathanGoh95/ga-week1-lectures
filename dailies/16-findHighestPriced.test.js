import { expect, test, describe } from "bun:test";
import { findHighestPriced } from "./16-findHighestPriced";

describe("16-findHighestPriced", () => {
  test("Example 1", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = findHighestPriced([
      { sku: "a1", price: 25 },
      { sku: "b2", price: 5 },
      { sku: "c3", price: 50 },
      { sku: "d4", price: 10 },
    ]);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual({ sku: "c3", price: 50 });
  });

  test("Example 2", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = findHighestPriced([
      { sku: "a1", price: 25 },
      { sku: "b2", price: 50 },
      { sku: "c3", price: 50 },
      { sku: "d4", price: 10 },
    ]);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual({ sku: "b2", price: 50 });
  });
});
