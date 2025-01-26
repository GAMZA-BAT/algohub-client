import { getGroupsByCode, postJoinGroupByCode } from "@/app/api/groups";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGroupByCodeQuery = (code: string) => {
  return useQuery({
    queryKey: ["groupByCode", code],
    queryFn: () => getGroupsByCode(code),
  });
};

export const useJoinGroupMutation = () => {
  return useMutation({
    mutationFn: (code: string) => postJoinGroupByCode(code),
  });
};
