import { getGroupsByCode } from "@/app/api/groups";
import { joinGroupAction } from "@/app/join-group/[code]/action";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";

export const useGroupByCodeQuery = (code: string) => {
  return useSuspenseQuery({
    queryKey: ["groupByCode", code],
    queryFn: () => getGroupsByCode(code),
  });
};

export const useJoinGroupMutation = () => {
  return useMutation({
    mutationFn: (code: string) => joinGroupAction(code),
  });
};
