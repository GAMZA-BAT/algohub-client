import { getGroupsByCode } from "@/app/api/groups";
import { joinGroupAction } from "@/app/join-group/[code]/action";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useGroupByCodeQuery = (code: string) => {
  return useSuspenseQuery({
    queryKey: ["groupByCode", code],
    queryFn: () => getGroupsByCode(code),
  });
};

export const useJoinGroupMutation = (groupId: number) => {
  const router = useRouter();

  return useMutation({
    mutationFn: (code: string) => joinGroupAction(code),
    onSuccess: () => {
      router.push(`/group/${groupId}`);
    },
  });
};
