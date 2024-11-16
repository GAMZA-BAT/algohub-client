import { kyInstance } from "@/api";
import type { GroupCodeResponse } from "@/api/group/type";

export const patchGroupInfo = async (groupId: number, formData: FormData) => {
  const response = await kyInstance.post(`api/groups/${groupId}`, {
    body: formData,
  });

  return response;
};

export const getGroupCode = async (groupId: number) => {
  const response = await kyInstance
    .get<GroupCodeResponse>(`api/groups/${groupId}/code`)
    .json();

  return response;
};
