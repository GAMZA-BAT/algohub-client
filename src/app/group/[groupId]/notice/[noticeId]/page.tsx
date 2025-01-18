"use client";
import { useNoticeByIdQuery } from "@/app/group/[groupId]/notice/query";
import Modal from "@/common/component/Modal";
import NoticeDetail from "@/view/group/dashboard/NoticeModal/NoticeDetail";
import {
  noticeHeaderStyle,
  noticeModalWrapper,
} from "@/view/group/dashboard/NoticeModal/index.css";
import { textStyle } from "@/view/group/dashboard/index.css";
import { useRouter } from "next/navigation";

const NoticeDetailPage = ({
  params: { noticeId, groupId },
}: { params: { groupId: string; noticeId: string } }) => {
  const router = useRouter();
  const handleClose = () => router.push(`/group/${groupId}/notice`);

  const { data: selectedNotice } = useNoticeByIdQuery(+noticeId);

  return (
    <>
      <Modal
        isOpen={true}
        onClose={handleClose}
        hasCloseBtn
        closeBtnType="secondary"
      >
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
