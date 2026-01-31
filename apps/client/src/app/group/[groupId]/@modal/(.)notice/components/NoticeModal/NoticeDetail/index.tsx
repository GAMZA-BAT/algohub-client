"use client";
import { useGroupRoleQueryObject } from "@/app/api/groups/query";
import {
  useDeleteNoticeCommentMutation,
  useDeleteNoticeMutation,
  useNoticeCommentMutation,
  usePatchNoticeCommentMutation,
  usePatchNoticeMutation,
} from "@/app/api/notices/mutation";
import { useNoticeCommentListQueryObject } from "@/app/api/notices/query";
import type { NoticeContent } from "@/app/api/notices/type";
import { IcnClose, IcnEdit, IcnNew } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import { formatDistanceDate } from "@/common/util/date";
import CommentBox from "@/shared/component/CommentBox";
import CommentInput from "@/shared/component/CommentInput";
import MarkdownEditor from "@/shared/component/MdEditor";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  type FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const nickname = session?.user?.nickname;

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

  const [text, setText] = useState<string | undefined>(content);
  const commentListRef = useRef<HTMLUListElement>(null);

  const { data: commentList } = useQuery(
    useNoticeCommentListQueryObject(noticeId),
  );
  const { data: role } = useQuery(useGroupRoleQueryObject(+groupId));

  const { mutate: commentMutate } = useNoticeCommentMutation(noticeId);
  const { mutate: deleteCommentMutate } =
    useDeleteNoticeCommentMutation(noticeId);
  const { mutate: patchMutate } = usePatchNoticeMutation(groupId, noticeId);
  const { mutate: deleteNoticeMutate } = useDeleteNoticeMutation(
    groupId,
    noticeId,
  );
  const { mutate: commentEditMutate } = usePatchNoticeCommentMutation();

  const handleCommentEdit = useCallback(
    (commentId: number, content: string) => {
      commentEditMutate({ commentId, content });
    },
    [],
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
      return;
    }

    setIsEdit(false);
    patchMutate({
      title,
      content: text || "",
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
        <div className={clsx(textareaWrapper)} {...handlers}>
          <MarkdownEditor
            initialValue={content}
            onChange={setText}
            disabled={!isEdit}
            className={clsx(textareaStyle, isEdit && textareaEditStyle)}
          />
          {role !== "PARTICIPANT" && (
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
          )}
        </div>

        <div className={sectionWrapper}>
          <ul ref={commentListRef} className={listStyle}>
            {commentList?.map((commentContent) => (
              <div key={commentContent.commentId} className={itemStyle}>
                <CommentBox
                  commentContent={commentContent}
                  isMine={nickname === commentContent.writerNickname}
                  onDelete={deleteCommentMutate}
                  onCommentEdit={handleCommentEdit}
                />
              </div>
            ))}
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
