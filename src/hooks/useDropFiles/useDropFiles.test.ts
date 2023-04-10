import { assert, test } from "vitest";
import { act, renderHook } from "@testing-library/react";
import useDropFiles from "./useDropFiles";
import { Simulate } from "react-dom/test-utils";

describe("useDropFiles", () => {
  const file = new File([], "test.txt", { type: "text/plain" });

  const dragEvent = {
    preventDefault() {},
  } as DragEvent;
  const dropEvent = {
    preventDefault() {},
    dataTransfer: { files: [file] },
  } as unknown as DragEvent;

  test("should return expected initial state", () => {
    const { result } = renderHook(() => useDropFiles());

    assert.deepEqual<File[]>(result.current.files, []);
    assert.equal<boolean>(result.current.dragging, false);
  });

  test("should update state when file is dropped", () => {
    const { result, rerender } = renderHook(() => useDropFiles());

    act(() => result.current.dropZoneProps.onDrop(dropEvent));
    assert.deepEqual<File[]>(result.current.files, [file]);
    assert.equal<boolean>(result.current.dragging, false);
  });

  test("should set dragging state when drag event occurs", () => {
    const { result } = renderHook(() => useDropFiles());

    act(() => result.current.dropZoneProps.onDragLeave(dragEvent));
    assert.equal<boolean>(result.current.dragging, false);

    act(() => result.current.dropZoneProps.onDragOver(dragEvent));
    assert.equal<boolean>(result.current.dragging, true);
  });
  it("should reset dragging and files on call reset", () => {
    const {
      result: {
        current: { reset, dropZoneProps, dragging, files },
      },
    } = renderHook(() => useDropFiles());
    act(() => dropZoneProps.onDrop(dropEvent));
    act(() => dropZoneProps.onDragOver(dragEvent));
    act(() => reset());
    assert.deepEqual(files, []);
    assert.isFalse(dragging);
  });
});
