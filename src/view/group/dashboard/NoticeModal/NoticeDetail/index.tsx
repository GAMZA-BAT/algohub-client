"use client";
import type { NoticeContent } from "@/app/api/notices/type";
import {
  useDeleteNoticeMutation,
  usePatchNoticeMutation,
} from "@/app/group/[groupId]/notice/query";
import { IcnClose, IcnEdit, IcnNew } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import Textarea from "@/common/component/Textarea";
import { formatDistanceDate } from "@/common/util/date";
import CommentBox from "@/shared/component/CommentBox";
import CommentInput from "@/shared/component/CommentInput";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import { NoticeCommentsProvider } from "@/view/group/dashboard/NoticeModal/NoticeDetail/provider";
import {
  useDeleteNoticeCommentMutation,
  useNoticeCommentListQuery,
  useNoticeCommentMutation,
} from "@/view/group/dashboard/NoticeModal/NoticeDetail/query";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { type FormEvent, useRef, useState } from "react";
import {
  articleStyle,
  contentStyle,
  contentWrapper,
  contentWrapperStyle,
  headerStyle,
  iconContainerStyle,
  iconStyle,
  inputStyle,
  itemStyle,
  listStyle,
  noticeInfoStyle,
  sectionWrapper,
  textStyle,
  textareaEditStyle,
  textareaStyle,
  textareaWrapper,
} from "./index.css";

type NoticeDetailProps = {
  data: NoticeContent;
  goBack: () => void;
};

const NoticeDetail = ({
  data: { author, title, createdAt, category, noticeId, content, isRead },
  goBack,
}: NoticeDetailProps) => {
  const { data } = useSession();
  const { isActive, ...handlers } = useA11yHoverHandler();

  const [isEdit, setIsEdit] = useState(false);
  const [comment, setComment] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const commentListRef = useRef<HTMLUListElement>(null);

  const { data: commentList } = useNoticeCommentListQuery(noticeId);
  const { mutate: commentMutate } = useNoticeCommentMutation(noticeId);
  const { mutate: deleteCommentMutate } =
    useDeleteNoticeCommentMutation(noticeId);
  const { mutate: patchMutate } = usePatchNoticeMutation(noticeId);
  const { mutate: deleteMutate } = useDeleteNoticeMutation(
    +useGetGroupId(),
    noticeId,
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment === "") return;

    commentMutate(comment, {
      onSuccess: () => {
        commentListRef.current?.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setComment("");
      },
    });
  };

  const handleEditClick = () => {
    if (!isEdit) {
      setIsEdit(true);
      setTimeout(() => textareaRef.current?.focus());
      return;
    }

    setIsEdit(false);
    patchMutate({
      title,
      content: textareaRef.current?.value || "",
      category,
    });
  };

  const handleDeleteClick = () => {
    deleteMutate();
    goBack();
  };

  return (
    <article
      className={articleStyle}
      aria-labelledby={`notice-title-${noticeId}`}
    >
      {/* 상세보기 헤더 */}
      <header className={headerStyle}>
        <div className={contentWrapper}>
          <Avatar size="small" alt="작성자 프로필 사진" />
          <div className={contentStyle}>
            <h3 id={`notice-title-${noticeId}`} className={textStyle.category}>
              {category}
            </h3>
            <p className={textStyle.title}>{title}</p>
          </div>
        </div>

        <div className={noticeInfoStyle}>
          <p className={textStyle.author}>{author}</p>
          <time dateTime={createdAt} className={textStyle.time}>
            {formatDistanceDate(createdAt)}
          </time>
          {!isRead && (
            <IcnNew width={13} height={13} style={{ minWidth: 13 }} />
          )}
        </div>
      </header>

      <div className={contentWrapperStyle}>
        {/* 상세보기 내용 */}
        <div className={textareaWrapper} {...handlers}>
          <Textarea
            ref={textareaRef}
            defaultValue={content}
            disabled={!isEdit}
            className={textareaStyle}
          />
          <div className={iconContainerStyle}>
            <button
              aria-label="공지 수정하기"
              title={isEdit ? "공지 수정 완료하기" : "공지 수정하기"}
              onClick={handleEditClick}
              className={iconStyle({ isEdit, isActive })}
            >
              <IcnEdit width={18} height={18} />
            </button>
            <button
              aria-label="공지 삭제하기"
              title="공지 삭제하기"
              onClick={handleDeleteClick}
              className={iconStyle({ isActive })}
            >
              <IcnClose width={16} height={16} />
            </button>
          </div>
        </div>

        <div className={sectionWrapper}>
          {/* 댓글란 */}
          <ul ref={commentListRef} className={listStyle}>
            <NoticeCommentsProvider noticeId={noticeId}>
              {commentList?.map((item) => (
                <div key={item.commentId} className={itemStyle}>
                  <CommentBox
                    variant="notice"
                    commentId={item.commentId}
                    createdAt={item.createdAt}
                    content={item.content}
                    writerNickname={item.writerNickname}
                    writerProfileImage={item.writerProfileImage}
                    isMine={data?.user?.nickname === item.writerNickname}
                    onDelete={deleteCommentMutate}
                  />
                </div>
              ))}
            </NoticeCommentsProvider>
          </ul>
          {/* 댓글 입력란 */}
          <form onSubmit={handleSubmit} className={inputStyle}>
            <CommentInput
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </form>
        </div>
      </div>
    </article>
  );
};

export default NoticeDetail;
