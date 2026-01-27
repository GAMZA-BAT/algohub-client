import { kyJsonWithTokenInstance } from "@/app/api";
import type { CommentContent } from "@/app/api/comments/type";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { HTTPError } from "ky";

export const getCommentList = async (solutionId: number) => {
  try {
    const response = await kyJsonWithTokenInstance
      .get<CommentContent[]>(`api/solutions/${solutionId}/comments`)
      .json();
    return response;
  } catch (error) {
    if (
      error instanceof HTTPError &&
      error.response.status === HTTP_ERROR_STATUS.BAD_REQUEST
    ) {
      return [];
    }
    throw error;
  }
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
