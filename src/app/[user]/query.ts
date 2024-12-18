import { getGroupsByUsers } from "@/app/api/users";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useUserGroupsQuery = (user: string) => {
  return useSuspenseQuery({
    queryKey: ["userGroups"],
    queryFn: () => getGroupsByUsers(user),
  });
};
