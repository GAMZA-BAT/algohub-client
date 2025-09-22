"use client";

import { CommentsContext } from "@/app/@modal/(...)group/[groupId]/solved-detail/components/CommentSection/provider";
import { useEditCommentMutation } from "@/app/api/comments/mutation";
import { usePatchNoticeCommentMutation } from "@/app/api/notices/mutation";
import { NoticeCommentsContext } from "@/app/group/[groupId]/components/NoticeModal/NoticeDetail/provider";
import { type KeyboardEvent, useContext } from "react";
import { flushSync } from "react-dom";
import { type SubmitHandler, useForm } from "react-hook-form";

type EditForm = {
  input: string;
};

export const useEditForm = (commentId: number, defaultValue: string) => {
  const { editingItem, handleEditItem, handleReset, solutionId } =
    useContext(CommentsContext);

  const {
    noticeEditingItem,
    handleNoticeEditItem,
    handleNoticeReset,
    noticeId,
  } = useContext(NoticeCommentsContext);

  const { register, setValue, setFocus, handleSubmit } = useForm<EditForm>({
    defaultValues: {
      input: defaultValue,
    },
  });

  const { mutate: editMutate } = useEditCommentMutation(solutionId, commentId);
  const { mutate: noticeEditMutate } = usePatchNoticeCommentMutation(
    noticeId,
    commentId,
  );

  const isEditing = editingItem === commentId;
  const isNoticeEditing = noticeEditingItem === commentId;

  const handleDetailEditBtnClick = () => {
    flushSync(() => {
      handleEditItem(commentId);
    });

    setFocus("input");
  };

  const handleDetailEditSubmit: SubmitHandler<EditForm> = (data) => {
    editMutate(data.input);

    handleReset();
  };

  const handleDetailTextAreaKeyDown = (e: KeyboardEvent) => {
    e.stopPropagation();

    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(handleDetailEditSubmit)();
    }

    if (e.key === "Escape") {
      handleReset();

      setValue("input", defaultValue);
    }
  };

  const handleNoticeTextAreaKeyDown = (e: KeyboardEvent) => {
    e.stopPropagation();

    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(handleNoticeEditSubmit)();
    }

    if (e.key === "Escape") {
      handleNoticeReset();

      setValue("input", defaultValue);
    }
  };

  const handleNoticeEditBtnClick = () => {
    flushSync(() => {
      handleNoticeEditItem(commentId);
    });

    setFocus("input");
  };

  const handleNoticeEditSubmit: SubmitHandler<EditForm> = (data) => {
    noticeEditMutate(data.input);

    handleNoticeReset();
  };

  const handleDetailHookFormSubmit = handleSubmit(handleDetailEditSubmit);
  const handleNoticeHookFormSubmit = handleSubmit(handleNoticeEditSubmit);

  const control = {
    detail: {
      isEditing,
      handleEditBtnClick: handleDetailEditBtnClick,
      handleTextAreaKeyDown: handleDetailTextAreaKeyDown,
      handleHookFormSubmit: handleDetailHookFormSubmit,
    },
    notice: {
      isEditing: isNoticeEditing,
      handleEditBtnClick: handleNoticeEditBtnClick,
      handleTextAreaKeyDown: handleNoticeTextAreaKeyDown,
      handleHookFormSubmit: handleNoticeHookFormSubmit,
    },
  };

  return {
    register,
    control,
  };
};
