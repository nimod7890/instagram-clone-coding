import { PropsWithChildren } from "react";
import ReactModal from "react-modal";
import ModalHeader, {
  ModalHeaderProps,
} from "src/components/@common/modal/ModalHeader";
import { theme } from "src/styles";
import styled from "styled-components";

type Styles = { width?: string; height?: string };

export type ModalProps = {
  isOpen: boolean;
  close: () => void;
  styles?: Styles;
  header?: ModalHeaderProps;
};

ReactModal.setAppElement("#root");

export default function Modal({
  isOpen,
  close,
  header,
  styles = {},
  children,
}: PropsWithChildren<ModalProps>) {
  const { width, height } = styles;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={close}
      contentLabel="Modal"
      style={modalStyles({ width, height })}
    >
      {header ? <ModalHeader {...header} /> : null}
      <BodyContainer>{children}</BodyContainer>
    </ReactModal>
  );
}

const modalStyles = ({ width, height }: Styles): ReactModal.Styles => ({
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",

    borderRadius: "10px",
    border: "none",

    width: width ?? "fit-content",
    height: height ?? "fit-content",
    maxHeight: `min(calc(100vh - 64px), 716px)`,
    maxWidth: `min(calc(100vw - 32px), 1000px)`,

    display: "flex",
    flexDirection: "column",

    padding: 0,

    backgroundColor: theme.palette.white,
    overflow: "hidden",
  },
  overlay: {
    padding: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#00000066",
  },
});

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;

  overflow: auto;
  width: "100%";
  height: "100%";
`;
