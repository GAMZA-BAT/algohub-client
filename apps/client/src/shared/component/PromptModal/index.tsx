import Button from "@/common/component/Button";
import Modal from "@/common/component/Modal";
import {
  descTextStyle,
  metaTextStyle,
  promptModalWrapper,
} from "@/shared/component/PromptModal/index.css";
import clsx from "clsx";

type PromptModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  prompt?: string;
  confirmText: string;
  onConfirm: () => void;
  wrapperClassName?: string;
  titleTextClassName?: string;
  promptTextClassName?: string;
};
const PromptModal = ({
  isOpen,
  onClose,
  title,
  prompt,
  confirmText,
  onConfirm,
  wrapperClassName,
  titleTextClassName,
  promptTextClassName,
}: PromptModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} hasCloseBtn>
      <div className={clsx(promptModalWrapper, wrapperClassName)}>
        <h2 className={clsx(metaTextStyle, titleTextClassName)}>{title}</h2>
        <p className={clsx(descTextStyle, promptTextClassName)}>{prompt}</p>
        <Button onClick={onConfirm}>{confirmText}</Button>
      </div>
    </Modal>
  );
};

export default PromptModal;
