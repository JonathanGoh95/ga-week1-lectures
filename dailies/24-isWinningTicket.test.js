import { expect, test, describe } from "bun:test";
import { isWinningTicket } from "./24-isWinningTicket";

describe("24-isWinningTicket", () => {
  test("Single Array Element (True)", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = isWinningTicket([["ABC", 65]]);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(true);
  });

  test("2 Array Elements (False)", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = isWinningTicket([
      ["ABC", 999],
      ["XY", 89],
    ]);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(false);
  });

  test("3 Array Elements (True)", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = isWinningTicket([
      ["ABC", 66],
      ["dddd", 100],
      ["Hello", 108],
    ]);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(true);
  });
  test("3 Array Elements (False)", () => {
    // 3 steps of testing
    // Arrange - If I need to do some setup prior to Act
    // Act - Call the function that we are testing
    const result = isWinningTicket([
      ["ABC", 66],
      ["dddd", 15],
      ["Hello", 108],
    ]);
    // Assert - Determine what the input and expected outputs are
    expect(result).toEqual(false);
  });
});
