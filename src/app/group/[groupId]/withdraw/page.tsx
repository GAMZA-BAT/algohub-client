"use client";

import Modal from "@/common/component/Modal";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import WithdrawDialog from "@/view/group/index/WithdrawDialog";
import { useRouter } from "next/navigation";

const WithdrawPage = ({ params }: { params: { groupId: string } }) => {
  const router = useRouter();

  return (
    <main className={sidebarWrapper}>
      <Sidebar />
      <Modal isOpen={true} onClose={() => router.back()} hasCloseBtn>
        <WithdrawDialog groupId={+params.groupId} />
      </Modal>
    </main>
  );
};

export default WithdrawPage;
