"use client";
import { useNoticeByIdQueryObject } from "@/app/api/notices/query";
import {
  noticeHeaderStyle,
  noticeModalWrapper,
} from "@/app/group/[groupId]/components/NoticeModal/index.css";
import { textStyle } from "@/app/group/[groupId]/components/index.css";
import Modal from "@/common/component/Modal";
import { usePvEvent } from "@/shared/hook/usePvEvent";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import NoticeDetail from "../../components/NoticeModal/NoticeDetail";

const NoticeDetailPage = ({
  params: { noticeId, groupId },
}: { params: { groupId: string; noticeId: string } }) => {
  usePvEvent("group_notice_detail_page_view", {
    group_id: groupId,
    notice_id: noticeId,
  });
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
