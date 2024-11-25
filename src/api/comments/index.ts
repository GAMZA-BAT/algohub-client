import { kyInstance } from "@/api";
import type { CommentContent } from "@/api/comments/type";

export const getCommentList = async (solutionId: number) => {
  const response = await kyInstance
    .get<CommentContent[]>(`api/solutions/${solutionId}/comments`)
    .json();

  return response;
};

export const postCommentInput = async (solutionId: number, content: string) => {
  const response = await kyInstance.post(
    `api/solutions/${solutionId}/comments`,
    {
      json: {
        content,
      },
    },
  );

  return response;
};

export const deleteComment = async (commentId: number) => {
  const response = await kyInstance.delete(
    `api/solutions/comments/${commentId}`,
  );

  return response;
};

export const editComment = async (commentId: number, content: string) => {
  const response = await kyInstance.patch(
    `api/solutions/comments/${commentId}`,
    {
      json: {
        content,
      },
    },
  );

  return response;
};
