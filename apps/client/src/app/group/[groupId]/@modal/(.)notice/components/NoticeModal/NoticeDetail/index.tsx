"use client";
import {
  useDeleteNoticeCommentMutation,
  useDeleteNoticeMutation,
  useNoticeCommentMutation,
  usePatchNoticeMutation,
} from "@/app/api/notices/mutation";
import { useNoticeCommentListQueryObject } from "@/app/api/notices/query";
import type { NoticeContent } from "@/app/api/notices/type";
import { NoticeCommentsProvider } from "@/app/group/[groupId]/@modal/(.)notice/components/NoticeModal/NoticeDetail/provider";
import { IcnClose, IcnEdit, IcnNew } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import Textarea from "@/common/component/Textarea";
import { formatDistanceDate } from "@/common/util/date";
import CommentBox from "@/shared/component/CommentBox";
import CommentInput from "@/shared/component/CommentInput";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { type FormEvent, useEffect, useRef, useState } from "react";
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
  groupId: number;
};

const NoticeDetail = ({
  data: { author, title, createdAt, category, noticeId, content, isRead },
  groupId,
}: NoticeDetailProps) => {
  const { data: session } = useSession();

  const router = useRouter();
  const handleClose = () => {
    router.replace(`/group/${groupId}/notice`);
  };
  useEffect(() => {
    router.prefetch(`/group/${groupId}/notice`);
  }, [router]);

  const { isActive, ...handlers } = useA11yHoverHandler();

  const [isEdit, setIsEdit] = useState(false);
  const [comment, setComment] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const commentListRef = useRef<HTMLUListElement>(null);

  const { data: commentList } = useQuery(
    useNoticeCommentListQueryObject(noticeId),
  );
  const { mutate: commentMutate } = useNoticeCommentMutation(noticeId);
  const { mutate: deleteCommentMutate } =
    useDeleteNoticeCommentMutation(noticeId);
  const { mutate: patchMutate } = usePatchNoticeMutation(groupId, noticeId);
  const { mutate: deleteNoticeMutate } = useDeleteNoticeMutation(
    groupId,
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
    deleteNoticeMutate(undefined, {
      onSuccess: handleClose,
    });
  };

  return (
    <article
      className={articleStyle}
      aria-labelledby={`notice-title-${noticeId}`}
    >
      <header className={headerStyle}>
        <div className={contentWrapper}>
          <Avatar size="small" alt={`${author} 프로필 사진`} />
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
        <div className={textareaWrapper} {...handlers}>
          <Textarea
            ref={textareaRef}
            defaultValue={content}
            disabled={!isEdit}
            className={clsx(textareaStyle, isEdit && textareaEditStyle)}
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
                    isMine={session?.user?.nickname === item.writerNickname}
                    onDelete={deleteCommentMutate}
                  />
                </div>
              ))}
            </NoticeCommentsProvider>
          </ul>
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
