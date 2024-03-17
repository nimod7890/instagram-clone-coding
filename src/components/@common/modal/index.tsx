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

    width: "100%",
    height: "100%",

    minWidth: "300px",
    minHeight: "300px",

    maxHeight: `min(calc(100vh - 64px), ${height ?? "300px"})`,
    maxWidth: `min(calc(100vw - 32px), ${width ?? "300px"})`,

    overflow: "hidden",
    display: "flex",
    flexDirection: "column",

    padding: 0,
    backgroundColor: theme.palette.white,
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
  height: 100%;
  overflow-y: "auto";
  overflow-x: "hidden";
`;
