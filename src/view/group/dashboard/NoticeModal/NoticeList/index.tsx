"use client";

import type { NoticeListResponse } from "@/api/notices/type";
import { IcnNew } from "@/asset/svg";
import Button from "@/common/component/Button";
import Pagination from "@/shared/component/Pagination";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import { getNoticeBannerCreateAt } from "@/shared/util/time";
import { overlayStyle, textStyle } from "@/view/group/dashboard/index.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
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
};

const NoticeList = ({ noticeList }: NoticeListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const groupId = useGetGroupId();
  return (
    <>
      {/* 공지사항 목록 */}
      <ul aria-label="공지사항 목록" className={ulStyle}>
        {noticeList.map((notice) => {
          const { noticeId, title, category, author, createAt, isRead } =
            notice;
          return (
            <li
              key={noticeId}
              className={liStyle}
              aria-labelledby={`notice-title-${noticeId}`}
            >
              <button
                className={overlayStyle}
                aria-label={`${title} 공지 상세 보기`}
                onClick={() =>
                  router.push(`/group/${groupId}/notice/${noticeId}`)
                }
              />
              <article className={itemStyle}>
                <div className={contentWrapper}>
                  <div className={contentStyle}>
                    <h3
                      id={`notice-title-${noticeId}`}
                      className={textStyle.category}
                    >
                      {category}
                    </h3>
                    <p className={textStyle.modalTitle}>{title}</p>
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
                    style={{ opacity: isRead ? "0" : "1" }}
                  />
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      {/* 모달 하단 */}
      <footer>
        <Button
          size="small"
          color="gray"
          className={buttonStyle}
          onClick={() => router.push(`/group/${groupId}/notice/create`)}
        >
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
