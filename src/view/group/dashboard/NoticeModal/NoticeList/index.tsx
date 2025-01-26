"use client";
import { getNotices } from "@/app/api/notices";
import defaultImage from "@/asset/img/img_card_profile.png";
import { IcnNew } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import Pagination from "@/shared/component/Pagination";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import { usePaginationQuery } from "@/shared/hook/usePaginationQuery";
import { textStyle } from "@/view/group/dashboard/index.css";
import Link from "next/link";
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
  const groupId = useGetGroupId();

  const {
    data: noticeData,
    currentPage,
    totalPages,
    setCurrentPage,
  } = usePaginationQuery({
    queryKey: ["notices", groupId],
    queryFn: (page) => getNotices({ groupId: +groupId, page }),
  });
  const noticeList = noticeData?.content;

  return (
    <>
      {noticeList?.length ? (
        <>
          <ul aria-label="공지사항 목록" className={ulStyle}>
            {noticeList.map(
              ({
                noticeId,
                title,
                category,
                author,
                createdAt,
                isRead,
                authorImage,
              }) => (
                <li
                  key={noticeId}
                  className={liStyle}
                  aria-labelledby={`notice-title-${noticeId}`}
                >
                  <Link href={`/group/${groupId}/notice/${noticeId}`}>
                    <article className={itemStyle}>
                      <div className={contentWrapper}>
                        <Avatar
                          size="small"
                          src={authorImage || defaultImage}
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
                          <time dateTime={createdAt} className={textStyle.time}>
                            {createdAt}
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
                  </Link>
                </li>
              ),
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
