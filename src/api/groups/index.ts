import { kyFileInstance, kyInstance } from "@/api";
import type {
  GroupCodeResponse,
  GroupListResponse,
  GroupResponse,
  MemberResponse,
} from "@/api/groups/type";

export const postCreateGroup = async (formData: FormData) => {
  const response = await kyFileInstance
    .post<GroupCodeResponse>("api/groups", {
      body: formData,
    })
    .json();

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

export const withdrawGroup = async (groupId: number) => {
  const response = await kyInstance
    .delete(`api/groups/${groupId}/members/me`)
    .json();

  return response;
};

export const patchGroupVisibility = async (groupId: number) => {
  const response = kyInstance.patch(`api/groups/${groupId}/visibility`).json();

  return response;
};
