"use client";

import type { NoticeResponse } from "@/api/notice/type";
import { IcnBtnDeleteCircle } from "@/asset/svg";
import Modal from "@/common/component/Modal";
import { tmpData } from "@/view/group/dashboard/NoticeBanner/constant";
import NoticeDetail from "@/view/group/dashboard/NoticeModal/NoticeDetail";
import NoticeList from "@/view/group/dashboard/NoticeModal/NoticeList";
import {
  noticeHeaderStyle,
  noticeModalWrapper,
} from "@/view/group/dashboard/NoticeModal/index.css";
import { textStyle } from "@/view/group/dashboard/index.css";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

const NoticeModal = () => {
  const [selectedNotice, setSelectedNotice] = useState<NoticeResponse | null>(
    null,
  );

  const router = useRouter();

  const handleNoticeClick = useCallback((notice: NoticeResponse) => {
    setSelectedNotice(notice);
  }, []);

  const handleBackToList = useCallback(() => {
    setSelectedNotice(null);
  }, []);

  const handleClose = selectedNotice ? handleBackToList : () => router.back();

  const closeBtnLabel = selectedNotice
    ? "공지 리스트로 돌아가기"
    : "공지 모달 닫기";

  return (
    <Modal isOpen={true} onClose={handleClose}>
      <div className={noticeModalWrapper}>
        {/* 모달 헤더 */}
        <header className={noticeHeaderStyle}>
          <h2 className={textStyle.head}>NOTICE</h2>
          <button onClick={handleClose} aria-label={closeBtnLabel}>
            <IcnBtnDeleteCircle width={16} height={16} />
          </button>
        </header>

        {selectedNotice ? (
          <NoticeDetail data={selectedNotice} goBack={handleBackToList} />
        ) : (
          <NoticeList noticeList={tmpData} onClick={handleNoticeClick} />
        )}
      </div>
    </Modal>
  );
};

export default NoticeModal;
