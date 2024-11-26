import { kyInstance } from "@/api";
import type { PaginationResponse } from "@/api/type";

export const getAllRanking = async (groupId: number) => {
  const response = await kyInstance
    .get<PaginationResponse>(`api/groups/${groupId}/rankings`)
    .json();

  return response;
};
