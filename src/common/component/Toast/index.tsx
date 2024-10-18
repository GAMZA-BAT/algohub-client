"use client";

import Portal from "@/common/component/Portal";
import Toast from "@/common/component/Toast/Toast";
import { containerStyle } from "@/common/component/Toast/index.css";
import { toastAtom } from "@/shared/store/toast";
import { useAtomValue } from "jotai";

const ToastProvider = () => {
  const { toast } = useAtomValue(toastAtom);

  return (
    <Portal id="toast-list">
      {toast && (
        <div className={containerStyle}>
          <Toast
            key={toast.id}
            variant={toast.variant}
            duration={toast.duration}
          >
            {toast.message}
          </Toast>
        </div>
      )}
    </Portal>
  );
};

export default ToastProvider;
