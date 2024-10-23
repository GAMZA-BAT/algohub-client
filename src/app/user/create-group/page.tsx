"use client";
import Modal from "@/common/component/Modal";
import Sidebar from "@/common/component/Sidebar";
import ToastProvider from "@/common/component/Toast";
import { useToast } from "@/common/hook/useToast";
import { sidebarWrapper } from "@/styles/shared.css";
import CreateGroupForm from "@/view/user/create-group/CreateGroupForm";

import LinkWithCopy from "@/view/user/create-group/LinkWithCopy";
import { wrapper } from "@/view/user/create-group/index.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CreateGroupPage = () => {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    if (isSuccess) {
      showToast("스터디가 정상적으로 만들어졌어요.", "success");
    }
  }, [isSuccess]);

  return (
    <main className={sidebarWrapper}>
      <ToastProvider />
      <Sidebar />
      <Modal isOpen={true} onClose={() => router.back()} hasCloseBtn>
        <div className={wrapper}>
          <CreateGroupForm setIsSuccess={setIsSuccess} />
          {isSuccess && <LinkWithCopy link="algohub.kr" />}
        </div>
      </Modal>
    </main>
  );
};

export default CreateGroupPage;
