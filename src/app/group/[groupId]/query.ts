import { groupRoleAction } from "@/app/group/[groupId]/action";
import { useQuery } from "@tanstack/react-query";

export const useGroupRoleQuery = (groupId: number) => {
  return useQuery({
    queryKey: ["groupRole", groupId],
    queryFn: () => groupRoleAction(groupId),
    staleTime: 0,
  });
};
