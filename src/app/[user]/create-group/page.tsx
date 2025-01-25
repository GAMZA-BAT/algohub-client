"use client";

import Modal from "@/common/component/Modal";
import Sidebar from "@/common/component/Sidebar";
import ToastProvider from "@/common/component/Toast";
import { sidebarWrapper } from "@/styles/shared.css";
import CreateGroupForm from "@/view/user/create-group/CreateGroupForm";

import { wrapper } from "@/view/user/create-group/index.css";
import { useRouter } from "next/navigation";

const CreateGroupPage = () => {
  const router = useRouter();

  return (
    <main className={sidebarWrapper}>
      <ToastProvider />
      <Sidebar />
      <Modal isOpen={true} onClose={() => router.back()} hasCloseBtn>
        <div className={wrapper}>
          <CreateGroupForm />
        </div>
      </Modal>
    </main>
  );
};

export default CreateGroupPage;
