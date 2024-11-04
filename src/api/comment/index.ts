import { kyInstance } from "@/api";
import type { Comment } from "@/shared/type";

export const getCommentList = async (solutionId: number) => {
  const response = await kyInstance
    .get<Comment[]>(`api/comment?solutionId=${solutionId}`)
    .json();

  return response;
};
