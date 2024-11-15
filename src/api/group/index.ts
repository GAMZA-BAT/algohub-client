import { kyFileInstance, kyInstance } from "@/api";
import type { groupSchema } from "@/api/group/schema";
import type { GroupListResponse, GroupResponse } from "@/api/group/type";
import type { z } from "zod";

export const postCreateGroup = async (formData: FormData) => {
  const response = await kyFileInstance.post("api/groups", {
    body: formData,
  });

  return response;
};

export const patchGroupInfo = async (formData: z.infer<typeof groupSchema>) => {
  const response = await kyFileInstance.patch<typeof groupSchema>(
    "api/groups",
    {
      json: formData,
    },
  );

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

export const getGroupInviteCode = async (groupId: number) => {
  const response = await kyInstance
    .get(`api/groups/group-code?groupId=${groupId}`)
    .json();

  return response;
};

export const getGroupMemberList = async (groupId: number) => {
  const response = await kyInstance
    .get(`api/groups/member-list?groupId=${groupId}`)
    .json();

  return response;
};

export const deleteGroup = async (groupId: number) => {
  const response = await kyInstance.delete(
    `api/groups/leave?groupId=${groupId}`,
  );

  return response;
};
