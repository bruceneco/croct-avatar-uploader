import LogoPreview from "./LogoPreview";
import { customRender } from "../../../../utils/testing/customRender";

describe("LogoPreview", () => {
  it("should show warning on invalid", () => {
    const { getByAltText } = customRender(<LogoPreview invalid />);
    assert.exists(getByAltText("Warning icon"));
  });
  it("should show logo from props", () => {
    const src = "localhost:3000/logo";
    const { getByAltText } = customRender(<LogoPreview src={src} />);

    const input = getByAltText("Logo preview from user") as HTMLImageElement;
    assert.exists(input);
    assert.equal(input.src, src);
  });
});
