"use client";
import { useNoticeByIdQuery } from "@/app/group/[groupId]/notice/query";
import GroupDashboardPage from "@/app/group/[groupId]/page";
import { IcnBtnDeleteCircle } from "@/asset/svg";
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

  const { data: selectedNotice } = useNoticeByIdQuery(+noticeId);

  return (
    <>
      <GroupDashboardPage params={{ groupId }} />
      <Modal isOpen={true} onClose={handleClose}>
        <div className={noticeModalWrapper}>
          <header className={noticeHeaderStyle}>
            <h2 className={textStyle.head}>NOTICE</h2>
            <button onClick={handleClose} aria-label="공지 리스트로 돌아가기">
              <IcnBtnDeleteCircle width={16} height={16} />
            </button>
          </header>
          <NoticeDetail data={selectedNotice} goBack={handleClose} />
        </div>
      </Modal>
    </>
  );
};

export default NoticeDetailPage;
