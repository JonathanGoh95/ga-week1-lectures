import { test, expect, describe } from "bun:test";
import { isPalindrome } from "./11-isPalindrome";

describe("11-isPalindrome", () => {
  test("Not a Palindrome 1", () => {
    const result = isPalindrome("SEI Rocks");
    expect(result).toBe(false);
  });
  test("Not a Palindrome 2", () => {
    const result = isPalindrome("Testing 123");
    expect(result).toBe(false);
  });
  test("Palindrome 1", () => {
    const result = isPalindrome("rotor");
    expect(result).toBe(true);
  });
  test("Palindrome 2", () => {
    const result = isPalindrome("A nut for a jar of tuna");
    expect(result).toBe(true);
  });
  test("Empty String", () => {
    const result = isPalindrome("");
    expect(result).toBe(true);
  });
});
