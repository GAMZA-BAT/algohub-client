import type { NoticeListResponse, NoticeResponse } from "@/api/notices/type";
import { IcnNew } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import Button from "@/common/component/Button";
import Pagination from "@/shared/component/Pagination";
import { getNoticeBannerCreateAt } from "@/shared/util/time";
import { overlayStyle, textStyle } from "@/view/group/dashboard/index.css";
import { useState } from "react";
import {
  avatarStyle,
  buttonStyle,
  contentStyle,
  contentWrapper,
  infoWrapper,
  itemStyle,
  liStyle,
  noticeInfoStyle,
  paginationStyle,
  ulStyle,
} from "./index.css";

type NoticeListProps = {
  noticeList: NoticeListResponse;
  onClick: (id: NoticeResponse) => void;
};

const NoticeList = ({ noticeList, onClick }: NoticeListProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      {/* 공지사항 목록 */}
      <ul aria-label="공지사항 목록" className={ulStyle}>
        {noticeList.map((notice) => {
          const { noticeTitle, noticeCategory, author, createAt, noticeId } =
            notice;
          return (
            <li
              key={noticeId}
              className={liStyle}
              aria-labelledby={`notice-title-${noticeId}`}
            >
              <button
                className={overlayStyle}
                aria-label={`${noticeTitle} 공지 상세 보기`}
                onClick={() => onClick(notice)}
              />
              <article className={itemStyle}>
                <div className={contentWrapper}>
                  <Avatar className={avatarStyle} alt="작성자 프로필 사진" />
                  <div className={contentStyle}>
                    <h3
                      id={`notice-title-${noticeId}`}
                      className={textStyle.category}
                    >
                      {noticeCategory}
                    </h3>
                    <p className={textStyle.modalTitle}>{noticeTitle}</p>
                  </div>
                </div>
                <div className={noticeInfoStyle}>
                  <div className={infoWrapper}>
                    <span className={textStyle.author}>{author}</span>
                    <time dateTime={createAt} className={textStyle.time}>
                      {getNoticeBannerCreateAt(createAt)}
                    </time>
                  </div>
                  <IcnNew width={13} height={13} aria-label="읽지 않은 공지" />
                </div>
              </article>
            </li>
          );
        })}
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
    </>
  );
};

export default NoticeList;
