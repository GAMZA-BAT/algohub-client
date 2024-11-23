"use client";
import type { NoticeResponse } from "@/api/notices/type";
import GroupDashboardPage from "@/app/group/[groupId]/page";
import Modal from "@/common/component/Modal";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import NoticeDetail from "@/view/group/dashboard/NoticeModal/NoticeDetail";
import {
  noticeHeaderStyle,
  noticeModalWrapper,
} from "@/view/group/dashboard/NoticeModal/index.css";
import { textStyle } from "@/view/group/dashboard/index.css";
import { useRouter } from "next/navigation";

const NoticeDetailPage = ({
  params: { noticeId },
}: { params: { noticeId: string } }) => {
  const groupId = useGetGroupId();
  const router = useRouter();
  const handleClose = () => router.push(`/group/${groupId}/notice`);

  const selectedNotice: NoticeResponse = {
    author: "j-nary",
    noticeId: +noticeId,
    content: "알고헙 사랑해",
    title: "백준 풀고 알고헙 애용",
    category: "test",
    createAt: "2024-10-24",
    isRead: false,
  };
  return (
    <>
      <GroupDashboardPage params={{ groupId }} />
      <Modal isOpen={true} onClose={handleClose} closeBtnType="secondary">
        <div className={noticeModalWrapper}>
          <header className={noticeHeaderStyle}>
            <h2 className={textStyle.head}>NOTICE</h2>
          </header>
          <NoticeDetail data={selectedNotice} goBack={handleClose} />
        </div>
      </Modal>
    </>
  );
};

export default NoticeDetailPage;
