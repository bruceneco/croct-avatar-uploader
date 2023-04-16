import {customRender} from "../../utils/testing/customRender";
import Text from "./Text";
import {hexToComputedStyle} from "../../utils/testing/hexToComputedStyle";
import {cleanup} from "@testing-library/react";

describe("Text", () => {
  it("should change color based on props", () => {
    const { getByTestId, theme } = customRender(
      <Text content={"test"} color={"primary"} />
    );
    assert.equal(
      getComputedStyle(getByTestId("text-wrapper")).color,
      hexToComputedStyle(theme.colors.text.primary)
    );
    cleanup();
    customRender(<Text content={"test"} color={"secondary"} />);
    assert.equal(
      getComputedStyle(getByTestId("text-wrapper")).color,
      hexToComputedStyle(theme.colors.text.secondary)
    );
  });
  it("should set weight defined in props", () => {
    const w = 400;
    const {getByTestId} = customRender(
        <Text content={"test"} weight={w}/>
    );
    assert.equal(
      getComputedStyle(getByTestId("text-wrapper")).fontWeight,
      String(w)
    );
  });
  it("should display start adornment in right position", () => {
    const adornment = <p>start adorn</p>;
    const { getByText, getByTestId } = customRender(
      <Text content={""} startAdornment={adornment} />
    );
    assert.equal(
      getByTestId("text-wrapper").firstChild,
      getByText("start adorn")
    );
  });
  it("should display passed content", () => {
    const { getByTestId } = customRender(<Text content={"test"} />);
    assert.equal(getByTestId("text-wrapper").textContent, "test");
  });
});
