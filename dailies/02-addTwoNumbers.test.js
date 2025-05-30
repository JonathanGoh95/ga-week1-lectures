import { test, expect, describe } from "bun:test";
import { addTwoNumbers } from "./02-addTwoNumbers";

describe("02-addTwoNumbers", () => {
  test("Argument 1 is not a number", () => {
    const result = addTwoNumbers("a", 1);
    expect(result).toBe(NaN);
  });
  test("Argument 2 is not a number", () => {
    const result = addTwoNumbers(1, "a");
    expect(result).toBe(NaN);
  });
  test("Two Positive Numbers", () => {
    const result = addTwoNumbers(5, 10);
    expect(result).toBe(15);
  });
  test("One Positive and One Negative", () => {
    const result = addTwoNumbers(10, -2);
    expect(result).toBe(8);
  });
  test("One Negative and One Positive", () => {
    const result = addTwoNumbers(-5, 8);
    expect(result).toBe(3);
  });
  test("Zeroes", () => {
    const result = addTwoNumbers(0, 0);
    expect(result).toBe(0);
  });
});
