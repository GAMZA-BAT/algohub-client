import { withdrawGroup } from "@/api/groups";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useWithdrawMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (groupId: number) => withdrawGroup(groupId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["group", "user"],
      });
    },
  });
};
