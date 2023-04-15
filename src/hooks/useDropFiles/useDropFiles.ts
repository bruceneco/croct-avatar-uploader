import {Ref, useCallback, useEffect, useRef, useState} from "react";

export interface DropFilesHook {
  files: File[];
  dragging: boolean;
  dropRef: Ref<HTMLElement>;
  reset: () => void;
  changeFiles: (f: File[]) => void;
  dropZoneProps: {
    onDrop: (e: DragEvent) => void;
    onDragLeave: (e: DragEvent) => void;
    onDragOver: (e: DragEvent) => void;
  };
}

export default function useDropFiles(allowDrop = true): DropFilesHook {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const drop = useRef<HTMLElement>(null);
  const reset = () => {
    setFiles([]);
    setDragging(false);
  };
  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    setFiles(Array.from(e.dataTransfer?.files || []));
  };

  const onOver = (e: DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };
  useEffect(() => {
    if (drop.current && allowDrop) {
      drop.current.addEventListener("dragleave", onDragLeave);
      drop.current.addEventListener("dragover", onOver);
      drop.current.addEventListener("drop", onDrop);

      return () => {
        if (drop.current) {
          drop.current.removeEventListener("dragleave", onDragLeave);
          drop.current.removeEventListener("drop", onDrop);
          drop.current.removeEventListener("dragover", onOver);
        }
      };
    }
  }, [drop, allowDrop]);

  const onDragLeave = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
  };

  const changeFiles = useCallback((files: File[]) => {
    setFiles(files)
  }, []);

  return {
    files,
    changeFiles,
    reset,
    dragging,
    dropRef: drop,
    dropZoneProps: {
      onDrop,
      onDragLeave,
      onDragOver: onOver,
    },
  };
}
