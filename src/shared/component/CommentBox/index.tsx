"use client";

import type { CommentContent } from "@/app/api/comments/type";
import { IcnClose, IcnEdit } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import Textarea from "@/common/component/Textarea";
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
import { getFormattedcreatedAt } from "@/shared/util/time";
import clsx from "clsx";

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

  const {
    isEditing,
    handleEditBtnClick,
    handleHookFormSubmit,
    handleTextAreaKeyDown,
  } = control[variant];

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
          <p className={createdAtStyle}>{getFormattedcreatedAt(createdAt)}</p>
        </div>
        {isEditing ? (
          <form
            onSubmit={handleHookFormSubmit}
            className={editInputWrapperStyle}
          >
            <Textarea
              {...register("input")}
              onKeyDown={handleTextAreaKeyDown}
            />
          </form>
        ) : (
          <p className={contentStyle}>{content}</p>
        )}
      </div>

      {isMine && (
        <div className={iconContainerStyle}>
          <button
            onClick={handleEditBtnClick}
            className={iconStyle({
              variant: "edit",
              isActive: isActive,
            })}
          >
            <IcnEdit width={18} height={18} />
          </button>
          <div
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
