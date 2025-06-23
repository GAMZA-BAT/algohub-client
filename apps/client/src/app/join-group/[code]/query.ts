import { getGroupsByCode } from "@/app/api/groups";
import { useQuery } from "@tanstack/react-query";

export const useGroupByCodeQuery = (code: string) => {
  return useQuery({
    queryKey: ["groupByCode", code],
    queryFn: () => getGroupsByCode(code),
  });
};
