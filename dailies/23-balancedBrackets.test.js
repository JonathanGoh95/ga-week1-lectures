import { expect, test, describe } from "bun:test";
import { balancedBrackets } from "./23-balancedBrackets";

describe("23-balancedBrackets", () => {
  test("() Test (True)", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = balancedBrackets("()");
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(true);
  });

  test("(] Test (False)", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = balancedBrackets("(]");
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(false);
  });

  test("[{}] Nested Brackets Test (True)", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = balancedBrackets("[{}]");
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(true);
  });
  test("[(]) Nested Brackets Test (False)", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = balancedBrackets("[(])");
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(false);
  });
  test("[({}[])] Multiple Nested Brackets Test (True)", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = balancedBrackets("[({}[])]");
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(true);
  });
});
