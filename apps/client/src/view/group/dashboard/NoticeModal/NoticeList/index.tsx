"use client";
import defaultImage from "@/asset/img/img_card_profile.png";
import { IcnNew } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import Button from "@/common/component/Button";
import { formatDistanceDate } from "@/common/util/date";
import Pagination from "@/shared/component/Pagination";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import { usePaginationQuery } from "@/shared/hook/usePaginationQuery";
import { buttonStyle } from "@/view/group/dashboard/NoticeModal/index.css";
import { textStyle } from "@/view/group/dashboard/index.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  contentStyle,
  contentWrapper,
  infoWrapper,
  itemStyle,
  liStyle,
  noNoticeGuideTextStyle,
  noticeInfoStyle,
  paginationStyle,
  ulStyle,
  wrapperStyle,
} from "./index.css";
import { getGroupNotices } from "@/app/api/groups";

const NoticeList = () => {
  const groupId = useGetGroupId();

  const router = useRouter();

  const {
    data: noticeData,
    currentPage,
    totalPages,
    setCurrentPage,
  } = usePaginationQuery({
    queryKey: ["notices", +groupId],
    queryFn: (page) => getGroupNotices({ groupId: +groupId, page }),
  });
  const noticeList = noticeData?.content;

  const handleNavigateToCreateNotice = () =>
    router.replace(`/group/${groupId}/notice/create`);

  return (
    <article className={wrapperStyle}>
      {noticeList && noticeList?.length > 0 ? (
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
                <Link
                  replace={true}
                  href={`/group/${groupId}/notice/${noticeId}`}
                >
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
                          {formatDistanceDate(createdAt)}
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
      ) : (
        <p className={noNoticeGuideTextStyle}>공지가 없습니다.</p>
      )}
      <footer style={{}}>
        <div style={{ width: "8.4rem", placeSelf: "end" }}>
          <Button
            size="small"
            color="gray"
            className={buttonStyle}
            onClick={handleNavigateToCreateNotice}
          >
            글쓰기
          </Button>
        </div>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          className={paginationStyle}
        />
      </footer>
    </article>
  );
};

export default NoticeList;
