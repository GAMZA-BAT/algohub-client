import { withdrawGroup } from "@/app/api/groups";
import { useMutation } from "@tanstack/react-query";

export const useWithdrawMutation = (groupId: number) => {
  return useMutation({
    mutationFn: () => withdrawGroup(groupId),
  });
};
