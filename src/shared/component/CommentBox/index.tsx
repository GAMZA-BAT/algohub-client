"use client";

import { IcnClose, IcnEdit } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import Input from "@/common/component/Input";
import {
  containerStyle,
  contentStyle,
  contentWrapperStyle,
  createdAtStyle,
  editInputStyle,
  iconContainerStyle,
  iconStyle,
  topContentStyle,
  writerStyle,
} from "@/shared/component/CommentBox/index.css";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import type { Comment } from "@/shared/type/comment";
import { getFormattedCreatedAt } from "@/shared/util/time";
import { CommentsContext } from "@/view/group/solved-detail/CommentSection/provider";
import clsx from "clsx";
import { type KeyboardEvent, useContext } from "react";
import { flushSync } from "react-dom";
import { Controller, useForm } from "react-hook-form";

type CommentBox = Comment & {
  variant: "detail" | "notice";
  onDelete?: () => void;
  onEdit?: () => void;
  className?: string;
};

const CommentBox = ({
  variant,
  commentId,
  writerNickname,
  writerProfileImage,
  content,
  createdAt,
  onDelete,
  onEdit,
  className,
}: CommentBox) => {
  const { isActive, handleFocus, handleBlur, handleMouseOver, handleMouseOut } =
    useA11yHoverHandler();

  const { editingItem, handleEditItem, handleReset } =
    useContext(CommentsContext);

  const { setFocus, control } = useForm();

  const handleEditClick = () => {
    flushSync(() => {
      handleEditItem(commentId);
    });

    setFocus("edit");
  };

  const handleEscClick = (e: KeyboardEvent) => {
    e.stopPropagation();

    if (e.key === "Escape") {
      handleReset();
    }
  };

  return (
    <li
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
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
          <p className={createdAtStyle}>{getFormattedCreatedAt(createdAt)}</p>
        </div>
        {editingItem === commentId ? (
          <Controller
            control={control}
            name="edit"
            render={({ field }) => (
              <Input
                className={editInputStyle}
                onKeyDown={handleEscClick}
                {...field}
              />
            )}
            defaultValue={content}
          />
        ) : (
          <p className={contentStyle}>{content}</p>
        )}
      </div>

      <div className={iconContainerStyle}>
        <div
          role="button"
          tabIndex={0}
          onClick={handleEditClick}
          onKeyDown={(e) => {
            if (e.key === "Enter") onEdit?.();
          }}
          className={iconStyle({ variant: "edit", isActive })}
        >
          <IcnEdit width={18} height={18} />
        </div>
        <div
          role="button"
          tabIndex={0}
          onClick={onDelete}
          onKeyDown={(e) => {
            if (e.key === "Enter") onDelete?.();
          }}
          className={iconStyle({ variant: "close", isActive })}
        >
          <IcnClose width={16} height={16} />
        </div>
      </div>
    </li>
  );
};

export default CommentBox;
