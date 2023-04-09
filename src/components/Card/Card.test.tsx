import Card from "./Card";
import { assert, describe, test } from "vitest";
import { customRender } from "../../utils/testing/customRender";

describe("Card", () => {
  test("should render without dotted outline by default", async () => {
    const { container } = customRender(<Card>Hello, World!</Card>);
    const mainElement = container.querySelector("div");
    assert.equal(mainElement?.style.outline, "");
  });
  test('should render with dotted outline when "dotted" prop is true', async () => {
    const { container } = customRender(<Card dotted>Hello, World!</Card>);
    const mainElement = container.querySelector("div");
    assert.notEqual(getComputedStyle(mainElement!).outline, "");
  });
});
