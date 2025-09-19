"use client";

import Modal from "@/common/component/Modal";
import ToastProvider from "@/common/component/Toast";
import { usePvEvent } from "@/shared/hook/usePvEvent";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CreateGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const params = useParams();
  const userId = Array.isArray(params.user) ? params.user[0] : params.user;

  usePvEvent("user_create_group_page_view", {
    user_id: userId ?? "",
  });

  useEffect(() => {
    router.prefetch(`/${userId}`);
  }, []);

  return (
    <>
      <ToastProvider />
      <Modal
        isOpen={true}
        onClose={() => router.replace(`/${userId}`)}
        hasCloseBtn
      >
        {children}
      </Modal>
    </>
  );
}
