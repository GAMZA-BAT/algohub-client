"use client";

import Modal from "@/common/component/Modal";
import { usePvEvent } from "@/shared/hook/usePvEvent";
import NoticeList from "@/view/group/dashboard/NoticeModal/NoticeList";
import {
  noticeHeaderStyle,
  noticeModalWrapper,
} from "@/view/group/dashboard/NoticeModal/index.css";
import { textStyle } from "@/view/group/dashboard/index.css";
import { useRouter } from "next/navigation";

const NoticeListPage = ({
  params: { groupId },
}: { params: { groupId: string } }) => {
  usePvEvent("group_notice_list_page_view", {
    group_id: groupId,
  });
  const router = useRouter();
  const handleClose = () => router.replace(`/group/${groupId}`);

  return (
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
        <NoticeList />
      </div>
    </Modal>
  );
};

export default NoticeListPage;
