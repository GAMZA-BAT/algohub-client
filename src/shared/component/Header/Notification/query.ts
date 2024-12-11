import { patchNotificationRead } from "@/app/api/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePatchNotificationMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => patchNotificationRead(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notifications"],
      });
    },
  });
};
