import { withdrawGroup } from "@/api/group";
import { useMutation } from "@tanstack/react-query";

export const useWithdrawMutation = (groupId: number) => {
  return useMutation({
    mutationFn: () => withdrawGroup(groupId),
  });
};
