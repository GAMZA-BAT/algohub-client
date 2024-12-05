import { kyInstance } from "@/app/api";
import type { RankingResponse } from "@/app/api/groups/type";

export const getAllRanking = async (groupId: number) => {
  const response = await kyInstance
    .get<RankingResponse>(`api/groups/${groupId}/rankings`)
    .json();

  return response;
};
