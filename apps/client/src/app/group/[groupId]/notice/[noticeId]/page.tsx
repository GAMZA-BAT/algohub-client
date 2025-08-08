"use client";
import { useNoticeByIdQueryObject } from "@/app/api/notices/query";
import Modal from "@/common/component/Modal";
import NoticeDetail from "@/view/group/dashboard/NoticeModal/NoticeDetail";
import {
  noticeHeaderStyle,
  noticeModalWrapper,
} from "@/view/group/dashboard/NoticeModal/index.css";
import { textStyle } from "@/view/group/dashboard/index.css";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const NoticeDetailPage = ({
  params: { noticeId, groupId },
}: { params: { groupId: string; noticeId: string } }) => {
  const router = useRouter();
  const handleClose = () => router.replace(`/group/${groupId}/notice`);

  const { data: selectedNotice } = useQuery(
    useNoticeByIdQueryObject(+noticeId),
  );

  if (!selectedNotice) return null;

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
