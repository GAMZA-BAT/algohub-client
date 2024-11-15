import { kyInstance } from "@/api";
import type { RankingResponse } from "@/api/groups/type";

export const getAllRanking = async (groupId: number) => {
  const response = await kyInstance
    .get<RankingResponse[]>(`api/group/all-ranking?groupId=${groupId}`)
    .json();
  return response;
};
