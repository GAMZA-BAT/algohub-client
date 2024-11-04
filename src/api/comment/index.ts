import { kyInstance } from "@/api";
import type { CommentRequest, EditCommentRequest } from "@/api/comment/type";
import type { Comment } from "@/shared/type";

export const getCommentList = async (solutionId: number) => {
  const response = await kyInstance
    .get<Comment[]>(`api/comment?solutionId=${solutionId}`)
    .json();

  return response;
};

export const postCommentInput = async (formData: CommentRequest) => {
  await kyInstance.post<CommentRequest>("api/comment", {
    json: formData,
  });
};

export const deleteComment = async (commentId: number) => {
  const response = await kyInstance.delete(
    `api/comment?commentId=${commentId}`,
  );

  return response;
};

export const editComment = async (formData: EditCommentRequest) => {
  const response = await kyInstance.put("api/comment", {
    json: formData,
  });

  return response;
};
