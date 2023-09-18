import { ReactNode } from "react";
import { Container, Content } from "./styles";

interface ModalProps {
  isOpen: boolean;
  close(): void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, close, children }) => {
  return (
    isOpen && (
      <Container onClick={close}>
        <Content>{children}</Content>
      </Container>
    )
  );
};

export default Modal;
