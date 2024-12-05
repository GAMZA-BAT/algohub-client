import { withdrawGroup } from "@/api/groups";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useWithdrawMutation = (groupId: number) => {
  const queryClient = useQueryClient();

  const router = useRouter();

  return useMutation({
    mutationFn: () => withdrawGroup(groupId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["group", "list", "user"],
      });

      router.push("/rladmstn");
    },
  });
};
