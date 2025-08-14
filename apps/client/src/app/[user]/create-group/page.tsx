"use client";

import CreateGroupForm from "@/app/[user]/create-group/components/CreateGroupForm";
import Modal from "@/common/component/Modal";
import Sidebar from "@/common/component/Sidebar";
import ToastProvider from "@/common/component/Toast";
import { usePvEvent } from "@/shared/hook/usePvEvent";
import { sidebarWrapper } from "@/styles/shared.css";

import { wrapper } from "@/app/[user]/create-group/components/index.css";
import { useParams, useRouter } from "next/navigation";

const CreateGroupPage = () => {
  const router = useRouter();
  const params = useParams();
  const userId = Array.isArray(params.user) ? params.user[0] : params.user;

  usePvEvent("user_create_group_page_view", {
    user_id: userId ?? "",
  });

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
