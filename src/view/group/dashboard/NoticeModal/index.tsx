"use client";

import type { NoticeResponse } from "@/api/notice/type";
import { IcnBtnDeleteCircle } from "@/asset/svg";
import Modal from "@/common/component/Modal";
import { textStyle } from "@/view/group/dashboard/index.css";
import { type ComponentProps, useCallback, useState } from "react";
import { tmpData } from "../NoticeBanner/constant";
import NoticeDetail from "./NoticeDetail";
import NoticeList from "./NoticeList";
import { noticeHeaderStyle, noticeModalWrapper } from "./index.css";

const NoticeModal = ({ isOpen, onClose }: ComponentProps<typeof Modal>) => {
  const [selectedNotice, setSelectedNotice] = useState<NoticeResponse | null>(
    null,
  );

  const handleNoticeClick = useCallback((notice: NoticeResponse) => {
    setSelectedNotice(notice);
  }, []);

  const handleBackToList = useCallback(() => {
    setSelectedNotice(null);
  }, []);

  const handleClose = selectedNotice ? handleBackToList : onClose;
  const closeBtnLabel = selectedNotice
    ? "공지 리스트로 돌아가기"
    : "공지 모달 닫기";

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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
