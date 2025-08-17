"use client";
import {
  noticeHeaderStyle,
  noticeModalWrapper,
} from "@/app/group/[groupId]/components/NoticeModal/index.css";
import { textStyle } from "@/app/group/[groupId]/components/index.css";
import Modal from "@/common/component/Modal";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import { usePvEvent } from "@/shared/hook/usePvEvent";

import { useRouter } from "next/navigation";
import NoticeCreate from "../../components/NoticeModal/NoticeCreate";

const NoticeCreatePage = () => {
  const router = useRouter();
  const groupId = useGetGroupId();

  usePvEvent("group_notice_create_page_view", {
    group_id: groupId?.toString() ?? "",
  });
  const handleClose = () => router.replace(`/group/${groupId}/notice`);

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
            <h2 className={textStyle.head}>공지 추가하기</h2>
          </header>
          <NoticeCreate />
        </div>
      </Modal>
    </>
  );
};

export default NoticeCreatePage;
