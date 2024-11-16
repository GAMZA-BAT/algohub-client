import { kyInstance } from "@/api";
import type { CommentRequest, EditCommentRequest } from "@/api/comment/type";
import type { Comment } from "@/shared/type";

export const getCommentList = async (solutionId: number) => {
  const response = await kyInstance
    .get<Comment[]>(`api/solutions/${solutionId}/comments`)
    .json();

  return response;
};

export const postCommentInput = async (
  solutionId: number,
  formData: CommentRequest,
) => {
  await kyInstance.post<CommentRequest>(
    `api/solutions/${solutionId}/comments`,
    {
      json: formData,
    },
  );
};

export const deleteComment = async (commentId: number) => {
  const response = await kyInstance.delete(
    `api/solutions/comments/${commentId}`,
  );

  return response;
};

export const editComment = async (
  commentId: number,
  formData: EditCommentRequest,
) => {
  const response = await kyInstance.patch(
    `api/solutions/comments/${commentId}`,
    {
      json: formData,
    },
  );

  return response;
};
