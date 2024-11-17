"use client";

import { useEditCommentMutation } from "@/app/group/[groupId]/solved-detail/[id]/query";
import { CommentsContext } from "@/view/group/solved-detail/CommentSection/provider";
import { type KeyboardEvent, useContext } from "react";
import { flushSync } from "react-dom";
import { type SubmitHandler, useForm } from "react-hook-form";

type EditForm = {
  input: string;
};
export const useEditForm = (commentId: number, defaultValue: string) => {
  const { editingItem, handleEditItem, handleReset, solutionId } =
    useContext(CommentsContext);

  const { register, setValue, setFocus, handleSubmit } = useForm<EditForm>({
    defaultValues: {
      input: defaultValue,
    },
  });

  const { mutate: editMutate } = useEditCommentMutation(solutionId, commentId);

  const isEditing = editingItem === commentId;

  const handleEditBtnClick = () => {
    flushSync(() => {
      handleEditItem(commentId);
    });

    setFocus("input");
  };

  const handleEditSubmit: SubmitHandler<EditForm> = (data) => {
    editMutate(data.input);

    handleReset();
  };

  const handleTextAreaKeyDown = (e: KeyboardEvent) => {
    e.stopPropagation();

    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(handleEditSubmit)();
    }

    if (e.key === "Escape") {
      handleReset();

      setValue("input", defaultValue);
    }
  };

  const handleHookFormSubmit = handleSubmit(handleEditSubmit);

  return {
    register,
    isEditing,
    handleEditBtnClick,
    handleTextAreaKeyDown,
    handleHookFormSubmit,
  };
};
