import Button from "@/common/component/Button";
import Modal from "@/common/component/Modal";
import {
  descTextStyle,
  metaTextStyle,
  promptModalWrapper,
} from "@/shared/component/PromptModal/index.css";

type PromptModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  prompt?: string;
  confirmText: string;
  onConfirm: () => void;
};
const PromptModal = ({
  isOpen,
  onClose,
  title,
  prompt,
  confirmText,
  onConfirm,
}: PromptModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} hasCloseBtn>
      <div className={promptModalWrapper}>
        <h2 className={metaTextStyle}>{title}</h2>
        <p className={descTextStyle}>{prompt}</p>
        <Button onClick={onConfirm}>{confirmText}</Button>
      </div>
    </Modal>
  );
};

export default PromptModal;
