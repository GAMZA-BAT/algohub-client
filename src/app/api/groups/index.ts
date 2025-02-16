import { kyFormWithTokenInstance, kyJsonWithTokenInstance } from "@/app/api";
import type {
  GroupCodeResponse,
  GroupListResponse,
  GroupResponse,
  GroupSettingsContent,
  MemberResponse,
  MemberRoleRequest,
  Role,
} from "@/app/api/groups/type";
import { notFound } from "next/navigation";

export const postCreateGroup = async (formData: FormData) => {
  const response = await kyFormWithTokenInstance
    .post<GroupCodeResponse>("api/groups", {
      body: formData,
    })
    .json();

  return response;
};

export const getGroupList = async () => {
  const response = await kyJsonWithTokenInstance
    .get<GroupListResponse>("api/users/me/groups")
    .json();

  return response;
};

export const getGroupInfo = async (groupId: number) => {
  const response = await kyJsonWithTokenInstance
    .get<GroupResponse>(`api/groups/${groupId}`, {
      next: {
        tags: ["groupInfo"],
      },
    })
    .json();

  return response;
};

export const getGroupMemberList = async (groupId: number) => {
  const response = await kyJsonWithTokenInstance
    .get<MemberResponse[]>(`api/groups/${groupId}/members`, {
      next: {
        tags: ["groupMember"],
      },
    })
    .json();

  return response;
};

export const patchGroupVisibility = async (groupId: number, flag: boolean) => {
  const response = await kyJsonWithTokenInstance.patch(
    `api/groups/${groupId}/visibility`,
    {
      json: {
        isVisible: flag,
      },
    },
  );

  return response;
};

export const patchGroupInfo = async (groupId: number, formData: FormData) => {
  const response = await kyFormWithTokenInstance.patch(
    `api/groups/${groupId}`,
    {
      body: formData,
    },
  );

  return response;
};

export const getGroupCode = async (groupId: number) => {
  const response = await kyJsonWithTokenInstance
    .get<GroupCodeResponse>(`api/groups/${groupId}/code`)
    .json();

  return response;
};

export const withdrawGroup = async (groupId: number) => {
  const response = await kyJsonWithTokenInstance
    .delete(`api/groups/${groupId}/members/me`)
    .json();

  return response;
};

export const getGroupsByCode = async (code: string) => {
  const response = await kyJsonWithTokenInstance
    .get<GroupResponse>(`api/groups?code=${code}`)
    .json();

  return response;
};

export const postJoinGroupByCode = async (code: string) => {
  const response = await kyJsonWithTokenInstance.post(
    `api/groups/${code}/join`,
  );

  return response;
};

export const getRoleByGroupId = async (groupId: number) => {
  try {
    const response = await kyJsonWithTokenInstance
      .get<{ role: Role }>(`api/groups/${groupId}/role`, {
        next: {
          tags: ["role"],
        },
      })
      .json();
    return response.role;
  } catch (_error) {
    notFound();
  }
};

export const deleteGroupMember = async (userId: number, groupId: number) => {
  const response = await kyJsonWithTokenInstance.delete(
    `api/groups/${groupId}/members/${userId}`,
  );

  return response;
};

export const deleteGroup = async (groupId: number) => {
  const response = await kyJsonWithTokenInstance.delete(
    `api/groups/${groupId}`,
  );

  return response;
};

export const patchMemberRole = async (
  groupId: number,
  request: MemberRoleRequest,
) => {
  const response = await kyJsonWithTokenInstance.patch(
    `api/groups/${groupId}/role`,
    {
      json: request,
    },
  );

  return response;
};

export const getMyGroupSettings = async () => {
  const response = await kyJsonWithTokenInstance
    .get<GroupSettingsContent[]>("api/groups/settings")
    .json();

  return response;
};

export const postGroupBookmark = async (groupId: number) => {
  const response = await kyJsonWithTokenInstance.post(
    `api/groups/${groupId}/bookmark`,
  );

  return response;
};
