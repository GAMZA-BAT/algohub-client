"use client";
import { useNoticesQuery } from "@/app/group/[groupId]/notice/query";
import defaultImage from "@/asset/img/img_card_profile.png";
import { IcnNew } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import Pagination from "@/shared/component/Pagination";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import { overlayStyle, textStyle } from "@/view/group/dashboard/index.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  contentStyle,
  contentWrapper,
  infoWrapper,
  itemStyle,
  liStyle,
  noticeInfoStyle,
  paginationStyle,
  ulStyle,
} from "./index.css";

const NoticeList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const groupId = useGetGroupId();
  const { content: noticeList, totalPages } = useNoticesQuery({
    groupId: +groupId,
    page: currentPage - 1,
  });

  const handleClick = (noticeId: number) =>
    router.push(`/group/${groupId}/notice/${noticeId}`);

  return (
    <>
      {noticeList?.length ? (
        <>
          <ul aria-label="공지사항 목록" className={ulStyle}>
            {noticeList.map(
              ({ noticeId, title, category, author, createAt, isRead }) => {
                return (
                  <li
                    key={noticeId}
                    className={liStyle}
                    aria-labelledby={`notice-title-${noticeId}`}
                  >
                    <button
                      className={overlayStyle}
                      aria-label={`${title} 공지 상세 보기`}
                      onClick={() => handleClick(noticeId)}
                    />
                    <article className={itemStyle}>
                      <div className={contentWrapper}>
                        <Avatar
                          size="small"
                          src={defaultImage}
                          alt="작성자 프로필 사진"
                        />
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
                            {createAt}
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
              },
            )}
          </ul>
          <footer>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              className={paginationStyle}
            />
          </footer>
        </>
      ) : (
        <p>공지가 없습니다.</p>
      )}
    </>
  );
};

export default NoticeList;
