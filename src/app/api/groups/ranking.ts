import { kyInstance } from "@/app/api";
import type { RankingResponse } from "@/app/api/groups/type";

export const getTopRanking = async (groupId: number) => {
  const response = await kyInstance
    .get<RankingResponse>(`api/groups/${groupId}/rankings`)
    .json();

  return response.content.slice(0, 3);
};

export const getAllRanking = async (groupId: number, page: number) => {
  const response = await kyInstance
    .get<RankingResponse>(`api/groups/${groupId}/rankings?page=${page}&size=4`)
    .json();

  return response;
};
