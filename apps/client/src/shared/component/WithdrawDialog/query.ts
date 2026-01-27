import { withdrawGroup } from "@/app/api/groups";
import { groupQueryKey } from "@/app/api/groups/query";
import { userQueryKey } from "@/app/api/users/query";
import { useToast } from "@/common/hook/useToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { HTTPError } from "ky";

export const useWithdrawMutation = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (groupId: number) => withdrawGroup(groupId),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: groupQueryKey.settings(),
        }),
        queryClient.invalidateQueries({
          queryKey: userQueryKey.myGroups(),
        }),
      ]);
      showToast("정상적으로 탈퇴되었어요.", "success");
    },
    onError: (error: HTTPError) => {
      showToast(error.message, "error");
    },
  });
};
