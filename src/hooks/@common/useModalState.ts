import { useState } from "react";
import { ModalState } from "src/constants";

export default function useModalState() {
  const [modalState, setModalState] = useState<ModalState | null>(null);

  const close = () => setModalState(null);

  return { modalState, close, handleChangeModalState: setModalState };
}
