import { useState } from "react";

export default function useInput(initial?: string) {
  const [text, setText] = useState<string>(initial ?? "");
  const clearText = () => setText("");
  return { text, onChangeText: setText, clearText };
}
