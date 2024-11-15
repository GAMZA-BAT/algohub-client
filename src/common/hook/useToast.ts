import { toastAtom } from "@/shared/store/toast";
import { useSetAtom } from "jotai";

export const useToast = () => {
  const setToastList = useSetAtom(toastAtom);

  const showToast = (
    message: string,
    variant?: "error" | "success" | "default",
    duration?: number,
  ) => {
    const added = {
      id: self.crypto.randomUUID(),
      message,
      variant,
      duration: duration ?? 2000,
    };

    setToastList({ toast: added });
  };

  return { showToast };
};
