import { test, expect, describe } from "bun:test";
import { addList } from "./04-addList";

describe("04-addList", () => {
  test("No Arguments", () => {
    const result = addList();
    expect(result).toBe(0);
  });
  test("Single Argument", () => {
    const result = addList(1);
    expect(result).toBe(1);
  });
  test("Multiple Arguments", () => {
    const result = addList(1, 50, 1.23);
    expect(result).toBe(52.23);
  });
  test("One Positive and One Negative", () => {
    const result = addList(7, -12);
    expect(result).toBe(-5);
  });
});
