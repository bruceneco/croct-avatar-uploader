import useLoadImage from "./useLoadImage";
import {act, renderHook} from "@testing-library/react";
import {afterAll} from "vitest";

describe("useLoadImage", () => {
  const jpegImage = new File([new Uint8Array(4)], "test.jpeg", {
    type: "image/jpeg",
  });
  const pngImage = new File([new Uint8Array(4)], "test.png", {
    type: "image/png",
  });
  const gifImage = new File([new Uint8Array(4)], "test.gif", {
    type: "image/gif",
  });
  const invalidImage = new File([new Uint8Array(4)], "test.txt", {
    type: "text/plain",
  });
  const originalCreateObjectURL = URL.createObjectURL;
  beforeEach(() => {
    URL.createObjectURL = vi.fn(() => {
      return "object url here";
    });
  });
  afterAll(() => {
    URL.createObjectURL = originalCreateObjectURL;
  });
  it("should return the image URL and no error when given a valid image", () => {
    const {result, rerender} = renderHook(() => useLoadImage(jpegImage));
    expect(result.current.imageURL).toBeTruthy();
    expect(result.current.error).toBeUndefined();
  });

  it("should return no image URL and an error when given an invalid image type", () => {
    const {result} = renderHook(() => useLoadImage(invalidImage));
    expect(result.current.imageURL).toBeUndefined();
    expect(result.current.error?.message).toBe("Invalid image format.");
  });

  it('should reset error on success image', () => {
    const {result, rerender} = renderHook((props) => useLoadImage(props), {initialProps: invalidImage});
    assert.exists(result.current.error)
    rerender(jpegImage)
    assert.isUndefined(result.current.error)
  });

  it("should return no image URL and an error when given an invalid image type in an array of allowed types", () => {
    const {result} = renderHook(() =>
        useLoadImage(invalidImage, ["image/jpeg", "image/png", "image/gif"])
    );
    expect(result.current.imageURL).toBeUndefined();
    expect(result.current.error?.message).toBe("Invalid image format.");
  });

  it("should return the image URL and no error when given a valid image type in an array of allowed types", () => {
    const { result } = renderHook(() =>
      useLoadImage(pngImage, ["image/jpeg", "image/png", "image/gif"])
    );
    expect(result.current.imageURL).toBeTruthy();
    expect(result.current.error).toBeUndefined();
  });

  it("should return the image URL and no error when given another valid image type in an array of allowed types", () => {
    const { result } = renderHook(() =>
      useLoadImage(gifImage, ["image/jpeg", "image/png", "image/gif"])
    );
    expect(result.current.imageURL).toBeTruthy();
    expect(result.current.error).toBeUndefined();
  });

  it("should return no image URL and an error when URL creation fails", () => {
    URL.createObjectURL = vi.fn(() => {
      throw new Error("Error creating URL");
    });

    const { result } = renderHook(() => useLoadImage(jpegImage));
    expect(result.current.imageURL).toBeUndefined();
    expect(result.current.error?.message).toBe("Sorry, the upload failed.");
  });
  it("should reset error", () => {
    URL.createObjectURL = vi.fn(() => {
      throw new Error("Error creating URL");
    });

    const { result } = renderHook(() => useLoadImage(jpegImage));
    act(() => result.current.reset());
    assert.isUndefined(result.current.error);
  });
  it("should reset image url", () => {
    const { result } = renderHook(() =>
      useLoadImage(gifImage, ["image/jpeg", "image/png", "image/gif"])
    );
    act(() => result.current.reset());
    assert.isUndefined(result.current.imageURL);
  });
});
