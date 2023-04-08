import { useState } from "react";

export interface DropFilesHook {
  files: File[];
  dragging: boolean;
  dropZoneProps: {
    onDrop: (e: React.DragEvent) => void;
    onDragLeave: (e: React.DragEvent) => void;
    onDragEnter: (e: React.DragEvent) => void;
  };
}

export default function useDropFiles(): DropFilesHook {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    setFiles(Array.from(e.dataTransfer.files));
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
  };

  const onDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  return {
    files,
    dragging,
    dropZoneProps: {
      onDrop,
      onDragLeave,
      onDragEnter,
    },
  };
}
