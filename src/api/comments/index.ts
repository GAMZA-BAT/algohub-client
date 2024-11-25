import { kyInstance } from "@/api";
import type {
  CommentContent,
  CommentRequest,
  EditCommentRequest,
} from "@/api/comments/type";

export const getCommentList = async (solutionId: number) => {
  const response = await kyInstance
    .get<CommentContent[]>(`api/solution/comment?solutionId=${solutionId}`)
    .json();

  return response;
};

export const postCommentInput = async (formData: CommentRequest) => {
  await kyInstance.post<CommentRequest>("api/solution/comment", {
    json: formData,
  });
};

export const deleteComment = async (commentId: number) => {
  const response = await kyInstance.delete(
    `api/solution/comment?commentId=${commentId}`,
  );

  return response;
};

export const editComment = async (formData: EditCommentRequest) => {
  const response = await kyInstance.patch("api/solution/comment", {
    json: formData,
  });

  return response;
};
