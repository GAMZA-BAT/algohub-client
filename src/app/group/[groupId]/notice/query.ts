import { getNotices } from "@/api/notices";
import { useQuery } from "@tanstack/react-query";

export const useNoticesQuery = (groupId: number) => {
  return useQuery({
    queryKey: ["notices", groupId],
    queryFn: () => getNotices(groupId),
  });
};
