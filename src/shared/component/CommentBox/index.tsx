"use client";

import type { CommentContent, EditCommentRequest } from "@/api/comments/type";
import { useEditCommentMutation } from "@/app/group/[groupId]/solved-detail/[id]/query";
import { IcnBtnSend, IcnClose, IcnEdit } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import Textarea from "@/common/component/Textarea";
import {
  containerStyle,
  contentStyle,
  contentWrapperStyle,
  createAtStyle,
  editInputWrapperStyle,
  iconContainerStyle,
  iconStyle,
  topContentStyle,
  writerStyle,
} from "@/shared/component/CommentBox/index.css";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import { getFormattedcreateAt } from "@/shared/util/time";
import { CommentsContext } from "@/view/group/solved-detail/CommentSection/provider";
import clsx from "clsx";
import { type KeyboardEvent, useContext } from "react";
import { flushSync } from "react-dom";
import { type SubmitHandler, useForm } from "react-hook-form";

type CommentBox = CommentContent & {
  variant: "detail" | "notice";
  onDelete?: (commentId: number) => void;
  onEdit?: (data: EditCommentRequest) => void;
  className?: string;
};

type EditForm = {
  input: string;
};

const CommentBox = ({
  variant,
  commentId,
  writerNickname,
  writerProfileImage,
  content,
  createAt,

  onDelete,
  className,
}: CommentBox) => {
  const { isActive, handleFocus, handleBlur, handleMouseOver, handleMouseOut } =
    useA11yHoverHandler();

  const { editingItem, handleEditItem, handleReset, solutionId } =
    useContext(CommentsContext);

  const { register, setValue, setFocus, handleSubmit } = useForm<EditForm>({
    defaultValues: {
      input: content,
    },
  });

  const { mutate: editMutate, isPending } = useEditCommentMutation(solutionId);

  const handleEditClick = () => {
    flushSync(() => {
      handleEditItem(commentId);
    });

    setFocus("input");
  };

  const onEditSubmit: SubmitHandler<EditForm> = (data) => {
    editMutate({
      commentId,
      content: data.input,
    });

    handleReset();
  };

  const handleEscClick = (e: KeyboardEvent) => {
    e.stopPropagation();

    if (e.key === "Escape") {
      handleReset();

      setValue("input", content);
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
          <p className={createAtStyle}>{getFormattedcreateAt(createAt)}</p>
        </div>
        {editingItem === commentId ? (
          <form
            onSubmit={handleSubmit(onEditSubmit)}
            className={editInputWrapperStyle}
          >
            <Textarea {...register("input")} onKeyDown={handleEscClick} />
            <button type="submit">
              <IcnBtnSend
                onClick={() => editMutate({ commentId, content })}
                width={24}
                height={24}
              />
            </button>
          </form>
        ) : (
          <p className={contentStyle}>{isPending ? "" : content}</p>
        )}
      </div>

      <div className={iconContainerStyle}>
        <button
          onClick={handleEditClick}
          className={iconStyle({ variant: "edit", isActive })}
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
          className={iconStyle({ variant: "close", isActive })}
        >
          <IcnClose width={16} height={16} />
        </div>
      </div>
    </li>
  );
};

export default CommentBox;
