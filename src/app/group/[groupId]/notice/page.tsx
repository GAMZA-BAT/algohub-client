"use client";
import { useNoticesQuery } from "@/app/group/[groupId]/notice/query";
import GroupDashboardPage from "@/app/group/[groupId]/page";
import { IcnBtnDeleteCircle } from "@/asset/svg";
import Modal from "@/common/component/Modal";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import NoticeList from "@/view/group/dashboard/NoticeModal/NoticeList";
import {
  noticeHeaderStyle,
  noticeModalWrapper,
} from "@/view/group/dashboard/NoticeModal/index.css";
import { textStyle } from "@/view/group/dashboard/index.css";
import { useRouter } from "next/navigation";

const NoticeModal = () => {
  const groupId = useGetGroupId();
  const params = { groupId };
  const router = useRouter();
  const handleClose = () => router.push(`/group/${groupId}`);
  const { data: noticeList } = useNoticesQuery(+groupId);

  if (!noticeList) return;

  return (
    <>
      <GroupDashboardPage params={params} />
      <Modal isOpen={true} onClose={handleClose}>
        <div className={noticeModalWrapper}>
          <header className={noticeHeaderStyle}>
            <h2 className={textStyle.head}>NOTICE</h2>
            <button onClick={handleClose} aria-label="공지 모달 닫기">
              <IcnBtnDeleteCircle width={16} height={16} />
            </button>
          </header>
          {noticeList.length ? (
            <NoticeList noticeList={noticeList} />
          ) : (
            <p>공지가 없습니다.</p>
          )}
        </div>
      </Modal>
    </>
  );
};

export default NoticeModal;
