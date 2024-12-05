import { getRoleByGroupId } from "@/app/api/groups";

export const groupRoleAction = async (groupId: number) => {
  try {
    const response = await getRoleByGroupId(groupId);

    return response;
  } catch {
    throw new Error("post notice action failed");
  }
};
