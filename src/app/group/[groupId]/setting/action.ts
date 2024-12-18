"use server";

import { patchGroupInfo, patchMemberRole } from "@/app/api/groups";
import type { MemberRoleRequest } from "@/app/api/groups/type";
import { revalidateTag } from "next/cache";

export const editGroup = async (groupId: number, formData: FormData) => {
  try {
    await patchGroupInfo(groupId, formData);

    revalidateTag("groupInfo");
  } catch {
    throw new Error("fail to patch info");
  }
};

export const editRole = async (groupId: number, request: MemberRoleRequest) => {
  try {
    await patchMemberRole(groupId, request);

    revalidateTag("groupMember");
    revalidateTag("role");
  } catch {
    throw new Error("fail to patch member role");
  }
};
