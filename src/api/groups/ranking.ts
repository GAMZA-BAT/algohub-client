import { kyInstance } from "@/api";
import type { RankingResponse } from "@/api/groups/type";

export const getAllRanking = async (groupId: number) => {
  const response = await kyInstance
    .get<RankingResponse[]>(`api/groups/${groupId}/rankings`)
    .json();

  return response;
};
