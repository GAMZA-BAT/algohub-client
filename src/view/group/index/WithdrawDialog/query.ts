import { withdrawGroup } from "@/api/groups";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useWithdrawMutation = (groupId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => withdrawGroup(groupId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["group", "list", "user"],
      });
    },
  });
};
