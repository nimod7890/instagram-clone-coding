import React, { useState } from "react";
import { toast } from "react-toastify";
import { theme } from "src/styles";

type UseFileInputProps = { onFileInput: (files: FileList) => void };

export default function useFileInput({ onFileInput }: UseFileInputProps) {
  const [dragOver, setDragOver] = useState(false);

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    handleFileUpload(files);
    setDragOver(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    preventDefaults(event);

    const files = event.dataTransfer.files;
    handleFileUpload(files);
    setDragOver(false);
  };

  function handleFileUpload(files: FileList | null) {
    if (!files || files.length === 0) {
      toast.error("No files uploaded. Please try again.");
      return;
    }

    onFileInput(files);
  }

  function handleDragEnter(event: React.DragEvent<HTMLDivElement>) {
    preventDefaults(event);
    setDragOver(true);
  }

  function handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
    preventDefaults(event);
    setDragOver(false);
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    preventDefaults(event);
    if (!dragOver) {
      setDragOver(true);
    }
  }

  const dropZoneStyles = dragOver
    ? { backgroundColor: theme.palette.gray50 }
    : {};

  return {
    dropZoneProps: {
      style: dropZoneStyles,
      onDrop: handleDrop,
      onDragEnter: handleDragEnter,
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
    },
    handleFileInput,
  };
}

/** utils */
function preventDefaults(e: React.DragEvent) {
  e.preventDefault();
  e.stopPropagation();
}
