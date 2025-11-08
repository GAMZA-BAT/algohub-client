"use client";
import { useAtomValue, useSetAtom } from "jotai";
import type { KeyboardEvent } from "react";
import { flushSync } from "react-dom";
import { type SubmitHandler, useForm } from "react-hook-form";
import {
  editingItemIdAtom,
  resetEditingItemAtom,
  toggleEditingItemAtom,
} from "./store";

type EditForm = {
  input: string;
};
type EditFormProps = {
  commentId: number;
  defaultValue: string;
  onCommentEdit: (commentId: number, content: string) => void;
};

export const useEditForm = ({
  commentId,
  defaultValue,
  onCommentEdit,
}: EditFormProps) => {
  const isEditing = useAtomValue(editingItemIdAtom) === commentId;
  const handleEditItem = useSetAtom(toggleEditingItemAtom);
  const handleReset = useSetAtom(resetEditingItemAtom);
  const {
    register,
    setValue,
    setFocus,
    handleSubmit: _handleSubmit,
  } = useForm<EditForm>({
    defaultValues: {
      input: defaultValue,
    },
  });

  const handleEditBtnClick = () => {
    flushSync(() => {
      handleEditItem(commentId);
    });

    setFocus("input");
  };

  const handleEditSubmit: SubmitHandler<EditForm> = (data) => {
    onCommentEdit(commentId, data.input);

    handleReset();
  };
  const handleSubmit = _handleSubmit(handleEditSubmit);

  const handleTextAreaKeyDown = (e: KeyboardEvent) => {
    e.stopPropagation();

    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit();
    }

    if (e.key === "Escape") {
      handleReset();

      setValue("input", defaultValue);
    }
  };

  return {
    register,
    isEditing,
    handleEditBtnClick,
    handleTextAreaKeyDown,
    handleSubmit,
  };
};
