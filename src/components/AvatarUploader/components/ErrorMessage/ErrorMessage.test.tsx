import { customRender } from "../../../../utils/testing/customRender";
import ErrorMessage from "./ErrorMessage";
import { fireEvent } from "@testing-library/react";

describe("ErrorMessage", () => {
  it("should call onTryAgain on click", () => {
    const tryAgain = vi.fn();
    const { getByText } = customRender(
      <ErrorMessage message={"error msg"} onTryAgain={tryAgain} />
    );
    fireEvent.click(getByText("Try again"));
    expect(tryAgain).toHaveBeenCalled();
  });
  it("should display right error message", () => {
    const msg = "error msg";
    const { getByText } = customRender(
      <ErrorMessage message={msg} onTryAgain={() => {}} />
    );
    expect(getByText(msg)).toBeTruthy();
  });
});
