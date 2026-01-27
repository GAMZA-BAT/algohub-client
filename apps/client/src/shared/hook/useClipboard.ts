import { useToast } from "@/common/hook/useToast";
import { useState } from "react";

export const useClipboard = () => {
  const { showToast } = useToast();
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast("성공적으로 복사되었습니다.", "success");
      setIsCopied(true);
    } catch (_error) {
      showToast("복사에 실패하였습니다.", "error");
      setIsCopied(false);
    }
  };

  return { isCopied, copy };
};
