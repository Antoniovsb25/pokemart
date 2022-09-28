import ReactDOM from "react-dom";
import Card from "../../design/Card";
import styles from "./ThankYouModal.module.css";

interface ModalProps {
  closeModal: () => void;
}
interface OverlayProps {
  closeModal: () => void;
  children: React.ReactNode | string;
}
const ThankYouModal = ({ closeModal }: ModalProps) => {
  return (
    <div className={styles.backdrop}>
      <Card className={styles.modal}>
        <span onClick={closeModal} className={styles.closeModal}>
          X
        </span>
        <h1>Parabéns!</h1>
        <h2>Compra realizada!</h2>
        <span>você já pode fechar esta janela.</span>
      </Card>
    </div>
  );
};

const ModalOverlay = ({ closeModal }: OverlayProps) => {
  return (
    <>
      {ReactDOM.createPortal(<ThankYouModal closeModal={closeModal}/>, document.getElementById("overlay-root") as HTMLElement)}
    </>
  );
};

export default ModalOverlay;
