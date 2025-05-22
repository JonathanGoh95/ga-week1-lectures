import { expect, test } from "bun:test";
import formatWithPadding from "./app";
// 3 Steps of Testing
// Arrange - Setup prior to testing
// Act: Call function to test
// Assert: Check/Verify Result
test("first test", () => {
  expect(formatWithPadding(123, "0", 5)).toEqual("00123");
});

test("second test", () => {
  expect(formatWithPadding(42, "*", 10)).toEqual("********42");
});

test("third test", () => {
  expect(formatWithPadding(1234, "*", 3)).toEqual("1234");
});
