import { kyInstance } from "@/api";
import type { NoticeResponse } from "@/api/notices/type";

export const getNotices = async (groupId: number) => {
  const response = await kyInstance
    .get<NoticeResponse[]>(`api/groups/${groupId}/notices`)
    .json();

  return response;
};
