import { kyFileInstance, kyInstance } from "@/api";
import type {
  GroupListResponse,
  GroupResponse,
  MemberResponse,
} from "@/api/groups/type";

export const postCreateGroup = async (formData: FormData) => {
  const response = await kyFileInstance.post("api/groups", {
    body: formData,
  });

  return response;
};

export const getGroupList = async () => {
  const response = await kyInstance
    .get<GroupListResponse>("api/users/me/groups")
    .json();

  return response;
};

export const getGroupInfo = async (groupId: number) => {
  const response = await kyInstance
    .get<GroupResponse>(`api/groups/${groupId}`)
    .json();

  return response;
};

export const getGroupMemberList = async (groupId: number) => {
  const response = await kyInstance
    .get<MemberResponse[]>(`api/groups/${groupId}/members`)
    .json();

  return response;
};
