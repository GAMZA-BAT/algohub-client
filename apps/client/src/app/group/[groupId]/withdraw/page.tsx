"use client";

import Modal from "@/common/component/Modal";
import Sidebar from "@/common/component/Sidebar";
import WithdrawDialog from "@/shared/component/WithdrawDialog";
import { usePvEvent } from "@/shared/hook/usePvEvent";
import { sidebarWrapper } from "@/styles/shared.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { revalidateUserPage } from "./action";

const WithdrawPage = ({ params }: { params: { groupId: string } }) => {
  usePvEvent("group_withdraw_page_view", {
    group_id: params.groupId,
  });

  const router = useRouter();
  const userNickname = useSession().data?.user?.nickname;
  return (
    <main className={sidebarWrapper}>
      <Sidebar />
      <Modal isOpen={true} onClose={() => router.back()} hasCloseBtn>
        <WithdrawDialog
          groupId={+params.groupId}
          onSuccess={() => {
            revalidateUserPage(userNickname!);
            router.push(`/${userNickname}`);
          }}
        />
      </Modal>
    </main>
  );
};

export default WithdrawPage;
