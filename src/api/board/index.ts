import { kyInstance } from "@/api";

export const getBoard = async (boardId: number) => {
  const response = await kyInstance.get(`board?boardId=${boardId}`).json();

  return response;
};
