"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * hard-navigation으로 접근 시 modalPath에 따라 모달을 띄워줌
 */
const ModalPathProvider = ({
  children,
  modalPath,
}: { children: React.ReactNode; modalPath?: string }) => {
  const router = useRouter();
  useEffect(() => {
    if (modalPath) {
      router.push(modalPath);
    }
  }, [modalPath]);

  return <>{children}</>;
};

export default ModalPathProvider;
