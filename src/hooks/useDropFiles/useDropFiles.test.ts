import { assert, test } from "vitest";
import { act, renderHook } from "@testing-library/react";
import useDropFiles from "./useDropFiles";

test("useDropFiles returns expected initial state", () => {
  const { result } = renderHook(() => useDropFiles());

  assert.deepEqual<File[]>(result.current.files, []);
  assert.equal<boolean>(result.current.dragging, false);
});

test("useDropFiles updates state when file is dropped", () => {
  const { result, rerender } = renderHook(() => useDropFiles());

  const file = new File([], "test.txt", { type: "text/plain" });
  const dropEvent = {
    preventDefault() {},
    dataTransfer: { files: [file] },
  } as unknown as DragEvent;
  act(() => result.current.dropZoneProps.onDrop(dropEvent));
  assert.deepEqual<File[]>(result.current.files, [file]);
  assert.equal<boolean>(result.current.dragging, false);
});

test("useDropFiles sets dragging state when drag event occurs", () => {
  const { result, rerender } = renderHook(() => useDropFiles());
  const dragEvent = {
    preventDefault() {},
  } as DragEvent;

  act(() => result.current.dropZoneProps.onDragLeave(dragEvent));
  assert.equal<boolean>(result.current.dragging, false);

  act(() => result.current.dropZoneProps.onDragOver(dragEvent));
  assert.equal<boolean>(result.current.dragging, true);
});
