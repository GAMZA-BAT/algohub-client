import { kyFormWithTokenInstance, kyJsonWithTokenInstance } from "@/app/api";
import type {
  GroupCodeResponse,
  GroupResponse,
  GroupSettingsContent,
  MemberResponse,
  MemberRoleRequest,
  Role,
  SearchRequest,
} from "@/app/api/groups/type";
import type { NoticeListRequest, NoticeRequest, NoticeResponse } from "@/app/api/notices/type";
import type { GetProblemRequest, ProblemListResponse, ProblemRequest } from "@/app/api/problems/type";
import type { MySolutionRequest, MySolutionResponse } from "@/app/api/type";

import { notFound } from "next/navigation";

export const postCreateGroup = async (formData: FormData) => {
  const response = await kyFormWithTokenInstance
    .post<GroupCodeResponse>("api/groups", {
      body: formData,
    })
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
  const response = await kyJsonWithTokenInstance.patch(`api/groups/${groupId}/visibility`, {
    json: {
      isVisible: flag,
    },
  });

  return response;
};

export const patchGroupInfo = async (groupId: number, formData: FormData) => {
  const response = await kyFormWithTokenInstance.patch(`api/groups/${groupId}`, {
    body: formData,
  });

  return response;
};

export const getGroupCode = async (groupId: number) => {
  const response = await kyJsonWithTokenInstance.get<GroupCodeResponse>(`api/groups/${groupId}/code`).json();

  return response;
};

export const withdrawGroup = async (groupId: number) => {
  const response = await kyJsonWithTokenInstance.delete(`api/groups/${groupId}/members/me`).json();

  return response;
};

export const getGroupsByCode = async (code: string) => {
  const response = await kyJsonWithTokenInstance.get<GroupResponse>(`api/groups?code=${code}`).json();

  return response;
};

export const postJoinGroupByCode = async (code: string) => {
  const response = await kyJsonWithTokenInstance.post(`api/groups/${code}/join`);

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
  const response = await kyJsonWithTokenInstance.delete(`api/groups/${groupId}/members/${userId}`);

  return response;
};

export const deleteGroup = async (groupId: number) => {
  const response = await kyJsonWithTokenInstance.delete(`api/groups/${groupId}`);

  return response;
};

export const patchMemberRole = async (groupId: number, request: MemberRoleRequest) => {
  const response = await kyJsonWithTokenInstance.patch(`api/groups/${groupId}/role`, {
    json: request,
  });

  return response;
};

export const getMyGroupSettings = async () => {
  const response = await kyJsonWithTokenInstance.get<GroupSettingsContent[]>("api/groups/settings").json();

  return response;
};

export const postGroupBookmark = async (groupId: number) => {
  const response = await kyJsonWithTokenInstance.post(`api/groups/${groupId}/bookmark`);

  return response;
};

export const getInProgressMyGroupSolutions = async ({
  groupId,
  problemNumber,
  language,
  result,
  page,
  size,
}: MySolutionRequest) => {
  const response = await kyJsonWithTokenInstance
    .get<MySolutionResponse>(
      `api/groups/${groupId}/my-solutions/in-progress?page=${page}&size=${size}${
        problemNumber ? `&problemNumber=${problemNumber}` : ""
      }${language ? `&language=${language}` : ""}${result ? `&result=${result}` : ""}`
    )
    .json();

  return response;
};

export const getExpiredMyGroupSolutions = async ({
  groupId,
  problemNumber,
  language,
  result,
  page,
  size,
}: MySolutionRequest) => {
  const response = await kyJsonWithTokenInstance
    .get<MySolutionResponse>(
      `api/groups/${groupId}/my-solutions/expired?page=${page}&size=${size}${
        problemNumber ? `&problemNumber=${problemNumber}` : ""
      }${language ? `&language=${language}` : ""}${result ? `&result=${result}` : ""}`
    )
    .json();

  return response;
};

export const getGroupNotices = async ({ groupId, size = 5, page = 0 }: NoticeListRequest) => {
  const response = await kyJsonWithTokenInstance
    .get<NoticeResponse>(`api/groups/${groupId}/notices?page=${page}&size=${size}`)
    .json();

  return response;
};

export const postGroupNotice = (groupId: number, requestData: NoticeRequest) => {
  return kyJsonWithTokenInstance.post<NoticeRequest>(`api/groups/${groupId}/notices`, {
    json: requestData,
  });
};

export const postProblem = (groupId: number, body: ProblemRequest) => {
  const response = kyJsonWithTokenInstance.post(`api/groups/${groupId}/problems`, { json: body }).json();

  return response;
};

export const getInProgressProblems = async ({ groupId, page, size, isUnsolvedOnly }: GetProblemRequest) => {
  const response = await kyJsonWithTokenInstance
    .get<ProblemListResponse>(
      `api/groups/${groupId}/problems/in-progress?unsolved-only=${isUnsolvedOnly}&page=${page}&size=${size}`
    )
    .json();

  return response;
};

export const getExpiredProblems = async ({ groupId, page, size }: GetProblemRequest) => {
  const response = await kyJsonWithTokenInstance
    .get<ProblemListResponse>(`api/groups/${groupId}/problems/expired?page=${page}&size=${size}`)
    .json();

  return response;
};

export const getQueuedProblems = async ({ groupId, page, size }: GetProblemRequest) => {
  const response = await kyJsonWithTokenInstance
    .get<ProblemListResponse>(`api/groups/${groupId}/problems/queued?page=${page}&size=${size}`)
    .json();

  return response;
};

export const getSearchStudy = async ({ searchPattern, page, size }: SearchRequest) => {
  const params: SearchRequest = {
    searchPattern,
  };

  if (page !== undefined) {
    params.page = page;
  }
  if (size !== undefined) {
    params.size = size;
  }

  const response = await kyJsonWithTokenInstance
    .get("api/groups/search", {
      searchParams: params,
    })
    .json();

  return response;
};
