import { kyJsonWithTokenInstance } from "@/app/api";
import type { CommentContent } from "@/app/api/comments/type";

export const getCommentList = async (solutionId: number) => {
  const response = await kyJsonWithTokenInstance
    .get<CommentContent[]>(`api/solutions/${solutionId}/comments`)
    .json();

  return response;
};

export const postCommentInput = async (solutionId: number, content: string) => {
  const response = await kyJsonWithTokenInstance.post(
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
  const response = await kyJsonWithTokenInstance.delete(
    `api/solutions/comments/${commentId}`,
  );

  return response;
};

export const editComment = async (commentId: number, content: string) => {
  const response = await kyJsonWithTokenInstance.patch(
    `api/solutions/comments/${commentId}`,
    {
      json: {
        content,
      },
    },
  );

  return response;
};
