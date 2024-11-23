"use client";
import GroupDashboardPage from "@/app/group/[groupId]/page";
import { IcnBtnDeleteCircle } from "@/asset/svg";
import Modal from "@/common/component/Modal";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import NoticeCreate from "@/view/group/dashboard/NoticeModal/NoticeCreate";
import {
  noticeHeaderStyle,
  noticeModalWrapper,
} from "@/view/group/dashboard/NoticeModal/index.css";
import { textStyle } from "@/view/group/dashboard/index.css";
import { useRouter } from "next/navigation";

const NoticeCreatePage = () => {
  const params = { groupId: useGetGroupId() };
  const router = useRouter();
  const groupId = useGetGroupId();
  const handleClose = () => router.push(`/group/${groupId}/notice`);

  return (
    <>
      <GroupDashboardPage params={params} />
      <Modal isOpen={true} onClose={handleClose}>
        <div className={noticeModalWrapper}>
          <header className={noticeHeaderStyle}>
            <h2 className={textStyle.head}>공지 추가하기</h2>
            <button onClick={handleClose} aria-label="공지 모달 닫기">
              <IcnBtnDeleteCircle width={16} height={16} />
            </button>
          </header>
          <NoticeCreate />
        </div>
      </Modal>
    </>
  );
};

export default NoticeCreatePage;
