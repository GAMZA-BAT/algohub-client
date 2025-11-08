"use client";

import type { CommentContent } from "@/app/api/comments/type";
import { textareaEditStyle } from "@/app/group/[groupId]/@modal/(.)notice/components/NoticeModal/NoticeDetail/index.css";
import { IcnClose, IcnEdit } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import Textarea from "@/common/component/Textarea";
import { formatDistanceDate } from "@/common/util/date";
import { useEditForm } from "@/shared/component/CommentBox/hook";
import {
  containerStyle,
  contentStyle,
  contentWrapperStyle,
  createdAtStyle,
  editInputWrapperStyle,
  iconContainerStyle,
  iconStyle,
  topContentStyle,
  writerStyle,
} from "@/shared/component/CommentBox/index.css";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import clsx from "clsx";

type CommentBoxProps = {
  commentContent: CommentContent;
  className?: string;
  isMine?: boolean;
  onDelete?: (commentId: number) => void;
  onCommentEdit: (itemId: number, content: string) => void;
};

const CommentBox = ({
  commentContent: {
    commentId,
    content,
    createdAt,
    writerNickname,
    writerProfileImage,
  },
  className,
  isMine,
  onDelete,
  onCommentEdit,
}: CommentBoxProps) => {
  const { isActive, ...handlers } = useA11yHoverHandler();

  const {
    register,
    isEditing,
    handleEditBtnClick,
    handleTextAreaKeyDown,
    handleSubmit,
  } = useEditForm({
    commentId,
    defaultValue: content,
    onCommentEdit,
  });

  return (
    <li {...handlers} className={clsx(containerStyle({ isActive }), className)}>
      <Avatar
        src={writerProfileImage}
        alt={`${writerNickname} 프로필 이미지`}
        size="small"
      />
      <div className={contentWrapperStyle}>
        <div className={topContentStyle}>
          <p className={writerStyle}>{writerNickname}</p>
          <time className={createdAtStyle} dateTime={createdAt}>
            {formatDistanceDate(createdAt)}
          </time>
        </div>
        {isEditing ? (
          <form onSubmit={handleSubmit} className={editInputWrapperStyle}>
            <Textarea
              {...register("input")}
              onKeyDown={handleTextAreaKeyDown}
              className={clsx(textareaEditStyle)}
            />
          </form>
        ) : (
          <p className={contentStyle}>{content}</p>
        )}
      </div>

      {isMine && (
        <div className={iconContainerStyle}>
          <button
            title={isEditing ? "댓글 수정 완료하기" : "댓글 수정하기"}
            aria-label={isEditing ? "댓글 수정 완료하기" : "댓글 수정하기"}
            onClick={handleEditBtnClick}
            className={iconStyle({
              variant: "edit",
              isActive: isActive,
            })}
          >
            <IcnEdit width={18} height={18} aria-hidden />
          </button>
          <button
            title="댓글 삭제하기"
            aria-label="댓글 삭제하기"
            onClick={() => onDelete?.(commentId)}
            className={iconStyle({
              variant: "close",
              isActive: isActive,
            })}
          >
            <IcnClose width={16} height={16} aria-hidden />
          </button>
        </div>
      )}
    </li>
  );
};

export default CommentBox;
