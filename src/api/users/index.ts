import { kyInstance } from "@/api";
import type { GroupListResponse } from "@/api/groups/type";

export const getGroupsByUsers = (userNickname: string) => {
  const response = kyInstance.get<GroupListResponse>(
    `api/users/${userNickname}/groups`,
  );

  return response;
};
