import { kyFileInstance, kyInstance } from "@/api";
import type { groupSchema } from "@/api/group/schema";
import type { GroupListResponse, GroupRequest } from "@/api/group/type";
import type { z } from "zod";

export const postCreateGroup = async (formData: GroupRequest) => {
  const response = await kyFileInstance.post<GroupRequest>("api/group", {
    json: formData,
  });

  return response;
};

export const patchGroupInfo = async (formData: z.infer<typeof groupSchema>) => {
  const response = await kyFileInstance.patch<typeof groupSchema>("api/group", {
    json: formData,
  });

  return response;
};

export const getGroupList = async () => {
  const response = await kyInstance
    .get<GroupListResponse>("api/group/list")
    .json();

  return response;
};

export const getGroupInfo = async (groupId: number) => {
  const response = await kyInstance
    .get<GroupListResponse>(`api/group/group-info?groupId=${groupId}`)
    .json();

  return response;
};

export const getGroupInviteCode = async (groupId: number) => {
  const response = await kyInstance
    .get(`api/group/group-code?groupId=${groupId}`)
    .json();

  return response;
};

export const getGroupMemberList = async (groupId: number) => {
  const response = await kyInstance
    .get(`api/group/member-list?groupId=${groupId}`)
    .json();

  return response;
};

export const deleteGroup = async (groupId: number) => {
  const response = await kyInstance.delete(
    `api/group/leave?groupId=${groupId}`,
  );

  return response;
};
