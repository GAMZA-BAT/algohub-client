import { kyInstance } from "@/api";
import type { GroupResponse } from "@/api/groups/type";

export const getGroupsByCode = async (code: string) => {
  const response = await kyInstance
    .get<GroupResponse>(`api/groups?code=${code}`)
    .json();
  return response;
};
