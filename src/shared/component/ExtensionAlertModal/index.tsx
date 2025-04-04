"use client";

import PromptModal from "../PromptModal";
import { titleTextStyle, wrapperStyle } from "./index.css";

interface ExtensionAlertModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const ExtensionAlertModal = ({
  isOpen = false,
  onClose = () => {},
}: ExtensionAlertModalProps) => {
  const title = "익스텐션 설치가 필요한 서비스입니다.\n설치하시겠습니까?";
  const confirmText = "설치하기";

  const onConfirm = () => {
    window.open(
      "https://chromewebstore.google.com/detail/algohub/ldenknplhpicplhgobdfiohdoefgamdm?hl=ko&utm_source=ext_sidebar",
    );
    onClose();
  };

  return (
    <PromptModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      confirmText={confirmText}
      onConfirm={onConfirm}
      wrapperClassName={wrapperStyle}
      titleTextClassName={titleTextStyle}
    />
  );
};

export default ExtensionAlertModal;
