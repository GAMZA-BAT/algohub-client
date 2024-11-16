"use client";

import Modal from "@/common/component/Modal";
import Sidebar from "@/common/component/Sidebar";
import ToastProvider from "@/common/component/Toast";
import { useClipboard } from "@/common/hook/useClipboard";
import { useToast } from "@/common/hook/useToast";
import CodeClipboard from "@/shared/component/CodeClipboard";
import { sidebarWrapper } from "@/styles/shared.css";
import CreateGroupForm from "@/view/user/create-group/CreateGroupForm";

import { wrapper } from "@/view/user/create-group/index.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CreateGroupPage = () => {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [responseCode, setResponseCode] = useState("");

  const { showToast } = useToast();
  const { isCopied, copy } = useClipboard();

  useEffect(() => {
    if (isSuccess) {
      showToast("스터디가 정상적으로 만들어졌어요.", "success");
    }
  }, [isSuccess]);

  const handleSuccess = (code: string) => {
    setResponseCode(code);

    setIsSuccess(true);
  };

  return (
    <main className={sidebarWrapper}>
      <ToastProvider />
      <Sidebar />
      <Modal isOpen={true} onClose={() => router.back()} hasCloseBtn>
        <div className={wrapper}>
          <CreateGroupForm onSuccess={handleSuccess} />
          {isSuccess && (
            <CodeClipboard
              onTrigger={() => copy(responseCode)}
              isSuccess={isCopied}
              code={responseCode}
            />
          )}
        </div>
      </Modal>
    </main>
  );
};

export default CreateGroupPage;
