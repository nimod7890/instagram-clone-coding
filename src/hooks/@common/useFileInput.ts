import React, { useState } from "react";
import { theme } from "src/styles";

export default function useFileInput({
  onFileInput,
}: {
  onFileInput: (File: File) => void;
}) {
  const [dragOver, setDragOver] = useState(false);

  // handling file uploads with <input />
  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    handleFileUpload(files);
    setDragOver(false);
  };

  // handling file uploads with <Dropzone />
  const handleDrop = (event: React.DragEvent) => {
    preventDefaults(event);

    const files = event.dataTransfer.files;
    handleFileUpload(files);
    setDragOver(false);
  };

  // handling file uploads
  function handleFileUpload(files: FileList | null) {
    if (!files || files.length === 0) {
      console.error("No files uploaded. Please try again.");
      return;
    }

    const file = files[0];
    onFileInput(file);
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

  function preventDefaults(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
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
