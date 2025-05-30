import { test, expect, describe } from "bun:test";
import { sayHello } from "./00-sayHello";

describe("00-sayHello", () => {
  test("No Argument", () => {
    const result = sayHello();
    expect(result).toBe("Hello!");
  });
  test("Random String", () => {
    const result = sayHello("What's up");
    expect(result).toBe("What's up!");
  });
});
