import { useToast } from "@/common/hook/useToast";
import { useState } from "react";

export const useClipboard = () => {
  const { showToast } = useToast();
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text).then(() => {
      showToast("성공적으로 복사되었습니다.", "success");
      setIsCopied(true);
    });
  };

  return { isCopied, copy };
};
