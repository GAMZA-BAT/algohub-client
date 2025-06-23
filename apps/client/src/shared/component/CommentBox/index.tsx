"use client";

import type { CommentContent } from "@/app/api/comments/type";
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
import { textareaEditStyle } from "@/view/group/dashboard/NoticeModal/NoticeDetail/index.css";
import clsx from "clsx";
import { useState } from "react";

type CommentBoxProps = CommentContent & {
  variant: "detail" | "notice";
  onDelete?: (commentId: number) => void;
  className?: string;
  isMine?: boolean;
};

const CommentBox = ({
  variant,
  commentId,
  writerNickname,
  writerProfileImage,
  content,
  createdAt,
  onDelete,
  className,
  isMine,
}: CommentBoxProps) => {
  const { isActive, ...handlers } = useA11yHoverHandler();

  const { register, control } = useEditForm(commentId, content);

  const [isCommentEdit, setIsCommentEdit] = useState(false);

  const {
    isEditing,
    handleEditBtnClick: _handleEditBtnClick,
    handleHookFormSubmit,
    handleTextAreaKeyDown,
  } = control[variant];

  const handleEditBtnClick = () => {
    _handleEditBtnClick();
    setIsCommentEdit(!isCommentEdit);
  };

  return (
    <li
      {...handlers}
      aria-label={`코멘트 ${commentId}`}
      className={clsx(containerStyle({ isActive }), className)}
    >
      <Avatar
        src={writerProfileImage}
        alt={`${writerNickname} 프로필 이미지`}
        size="small"
      />
      <div className={contentWrapperStyle({ variant })}>
        <div className={topContentStyle}>
          <p className={writerStyle}>{writerNickname}</p>
          <p className={createdAtStyle}>{formatDistanceDate(createdAt)}</p>
        </div>
        {isEditing ? (
          <form
            onSubmit={handleHookFormSubmit}
            className={editInputWrapperStyle}
          >
            <Textarea
              {...register("input")}
              onKeyDown={handleTextAreaKeyDown}
              className={clsx(isCommentEdit && textareaEditStyle)}
            />
          </form>
        ) : (
          <p className={contentStyle}>{content}</p>
        )}
      </div>

      {isMine && (
        <div className={iconContainerStyle}>
          <button
            title={isCommentEdit ? "댓글 수정 완료하기" : "댓글 수정하기"}
            onClick={handleEditBtnClick}
            className={iconStyle({
              variant: "edit",
              isActive: isActive,
            })}
          >
            <IcnEdit width={18} height={18} />
          </button>
          <div
            title="댓글 삭제하기"
            role="button"
            tabIndex={0}
            onClick={() => onDelete?.(commentId)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onDelete?.(commentId);
            }}
            className={iconStyle({
              variant: "close",
              isActive: isActive,
            })}
          >
            <IcnClose width={16} height={16} />
          </div>
        </div>
      )}
    </li>
  );
};

export default CommentBox;
