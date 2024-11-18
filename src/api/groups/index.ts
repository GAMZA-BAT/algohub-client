import { kyInstance } from "@/api";

export const patchGroupVisibility = async (groupId: number) => {
  const response = await kyInstance
    .patch(`api/groups/${groupId}/visibility`)
    .json();

  return response;
};
