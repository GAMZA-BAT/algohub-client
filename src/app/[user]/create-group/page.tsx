"use client";

import Modal from "@/common/component/Modal";
import Sidebar from "@/common/component/Sidebar";
import ToastProvider from "@/common/component/Toast";
import { useToast } from "@/common/hook/useToast";
import CodeClipboard from "@/shared/component/CodeClipboard";
import { sidebarWrapper } from "@/styles/shared.css";
import CreateGroupForm from "@/view/user/create-group/CreateGroupForm";

import { wrapper } from "@/view/user/create-group/index.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CreateGroupPage = () => {
  const router = useRouter();
  const [responseCode, setResponseCode] = useState("");

  const { showToast } = useToast();

  useEffect(() => {
    if (responseCode) {
      showToast("스터디가 정상적으로 만들어졌어요.", "success");
    }
  }, [responseCode]);

  const handleSuccess = (code: string) => {
    setResponseCode(code);
  };

  return (
    <main className={sidebarWrapper}>
      <ToastProvider />
      <Sidebar />
      <Modal isOpen={true} onClose={() => router.back()} hasCloseBtn>
        <div className={wrapper}>
          <CreateGroupForm onSuccess={handleSuccess} />
          {responseCode && <CodeClipboard code={responseCode} />}
        </div>
      </Modal>
    </main>
  );
};

export default CreateGroupPage;
