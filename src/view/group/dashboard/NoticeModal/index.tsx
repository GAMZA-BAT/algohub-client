"use client";

import { IcnBtnDeleteCircle, IcnNew } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import Button from "@/common/component/Button";
import Modal from "@/common/component/Modal";
import Pagination from "@/shared/component/Pagination";
import { getNoticeBannerCreateAt } from "@/shared/util/time";
import { textStyle } from "@/view/group/dashboard/index.css";
import { type ComponentProps, useState } from "react";
import { tmpData } from "../NoticeBanner/constant";
import {
  avatarStyle,
  buttonStyle,
  contentStyle,
  contentWrapper,
  infoWrapper,
  itemStyle,
  noticeHeaderStyle,
  noticeInfoStyle,
  noticeModalWrapper,
  paginationStyle,
  ulStyle,
} from "./index.css";

const NoticeModal = ({ isOpen, onClose }: ComponentProps<typeof Modal>) => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={noticeModalWrapper}>
        {/* 모달 헤더 */}
        <header className={noticeHeaderStyle}>
          <h2 className={textStyle.title}>NOTICE</h2>
          <button onClick={onClose} aria-label="공지 모달 닫기">
            <IcnBtnDeleteCircle width={16} height={16} />
          </button>
        </header>

        {/* 공지사항 목록 */}
        <ul aria-label="공지사항 목록" className={ulStyle}>
          {tmpData.map(
            ({ noticeTitle, noticeContent, author, createAt, noticeId }) => (
              <li key={noticeId} aria-labelledby={`notice-title-${noticeId}`}>
                <article className={itemStyle}>
                  <div className={contentWrapper}>
                    <Avatar className={avatarStyle} alt="작성자 프로필 사진" />
                    <div className={contentStyle}>
                      <h3
                        id={`notice-title-${noticeId}`}
                        className={textStyle.head}
                      >
                        {noticeTitle}
                      </h3>
                      <p className={textStyle.modalContent}>{noticeContent}</p>
                    </div>
                  </div>
                  <div className={noticeInfoStyle}>
                    <div className={infoWrapper}>
                      <span className={textStyle.author}>{author}</span>
                      <time dateTime={createAt} className={textStyle.time}>
                        {getNoticeBannerCreateAt(createAt)}
                      </time>
                    </div>
                    <IcnNew
                      width={13}
                      height={13}
                      aria-label="읽지 않은 공지"
                    />
                  </div>
                </article>
              </li>
            ),
          )}
        </ul>

        {/* 모달 하단 */}
        <footer>
          <Button size="small" color="gray" className={buttonStyle}>
            글쓰기
          </Button>
          <Pagination
            totalPages={10}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            className={paginationStyle}
          />
        </footer>
      </div>
    </Modal>
  );
};

export default NoticeModal;
