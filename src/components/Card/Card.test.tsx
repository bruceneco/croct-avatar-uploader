import Card from "./Card";
import { customRender } from "../../utils/testing/customRender";
import { fireEvent } from "@testing-library/react";

describe("Card", () => {
  it("should render without dotted outline by default", async () => {
    const { container } = customRender(<Card>Hello, World!</Card>);
    const mainElement = container.querySelector("div");
    assert.equal(mainElement?.style.outline, "");
  });
  it('should render with dotted outline when "dotted" prop is true', async () => {
    const { container } = customRender(<Card dotted>Hello, World!</Card>);
    const mainElement = container.querySelector("div");
    assert.notEqual(getComputedStyle(mainElement!).outline, "");
  });
  it("should display close button if function is passed", () => {
    const onClose = vi.fn();
    const { getByAltText } = customRender(
      <Card onClose={onClose}>Hello, World!</Card>
    );
    assert.exists(getByAltText("Close icon"));
  });
  it("should call onClose on close button click", () => {
    const onClose = vi.fn();
    const { getByAltText } = customRender(
      <Card onClose={onClose}>Hello, World!</Card>
    );
    fireEvent.click(getByAltText("Close icon"));
    expect(onClose).toHaveBeenCalled();
  });
});
