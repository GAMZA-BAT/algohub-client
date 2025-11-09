"use client";
import { usePrevious } from "@/common/hook/usePrevious";
import { useAtomValue, useSetAtom } from "jotai";
import { type KeyboardEvent, useEffect } from "react";
import { flushSync } from "react-dom";
import { type SubmitHandler, useForm } from "react-hook-form";
import {
  clearEditingItemAtom,
  editingItemIdAtom,
  setEditingItemAtom,
} from "./store";

type EditForm = {
  input: string;
};
type EditFormProps = {
  commentId: number;
  defaultValue: string;
  onCommentEdit: (commentId: number, content: string) => void;
};

export const useEditComment = ({
  commentId,
  defaultValue,
  onCommentEdit,
}: EditFormProps) => {
  const currentEditingItemId = useAtomValue(editingItemIdAtom);
  const isCurrentEditing = currentEditingItemId === commentId;
  const setCurrentEditItem = useSetAtom(setEditingItemAtom);
  const clearCurrentEditItem = useSetAtom(clearEditingItemAtom);
  const prevEditingItemId = usePrevious(currentEditingItemId);
  const {
    register,
    formState: { isDirty },
    resetField,
    reset,
    setFocus,
    handleSubmit: _handleSubmit,
  } = useForm<EditForm>({
    defaultValues: {
      input: defaultValue,
    },
  });

  const applyEdit: SubmitHandler<EditForm> = ({ input }) => {
    if (isDirty) {
      onCommentEdit(commentId, input);
      resetField("input", {
        keepDirty: false,
        defaultValue: input,
      });
    }
  };

  const handleSubmit = _handleSubmit(applyEdit);

  const handleEdit = () => {
    if (!isCurrentEditing) return;
    handleSubmit();
    clearCurrentEditItem();
  };

  useEffect(() => {
    if (prevEditingItemId === commentId && !isCurrentEditing) {
      handleSubmit();
    }
  }, [
    currentEditingItemId,
    prevEditingItemId,
    isCurrentEditing,
    commentId,
    handleSubmit,
  ]);

  const handleEditBtnClick = () => {
    if (isCurrentEditing) {
      handleEdit();
      return;
    }
    // isEditing 상태로 전환 시 즉시 포커스 이동을 위해 flushSync 사용
    // form, textarea는 isEditing 상태에 따라 조건부로 렌더링되기 때문에 사용됨
    flushSync(() => {
      setCurrentEditItem(commentId);
    });

    setFocus("input");
  };

  const handleEditCancel = () => {
    reset();
    clearCurrentEditItem();
  };

  const handleTextAreaKeyDown = (e: KeyboardEvent) => {
    e.stopPropagation();

    if (e.key === "Enter" && !e.shiftKey) {
      handleEditBtnClick();
      clearCurrentEditItem();
    }

    if (e.key === "Escape") {
      handleEditCancel();
    }
  };

  return {
    register,
    isEditing: isCurrentEditing,
    handleEdit,
    handleEditBtnClick,
    handleEditCancel,
    handleTextAreaKeyDown,
    handleSubmit,
  };
};
