"use client";

import Modal from "@/common/component/Modal";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import Withdraw from "@/view/group/index/Withdraw";
import { useRouter } from "next/navigation";

const WithdrawPage = () => {
  const router = useRouter();
  return (
    <main className={sidebarWrapper}>
      <Sidebar />
      <Modal isOpen={true} onClose={() => router.back()}>
        <Withdraw />
      </Modal>
    </main>
  );
};

export default WithdrawPage;
