import {
  getNotificationList,
  patchAllNotificationRead,
  patchNotificationRead,
} from "@/app/api/notifications";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";

export const useNotificationsQuery = () => {
  return useSuspenseQuery({
    queryKey: ["notifications"],
    queryFn: getNotificationList,
  });
};

export const usePatchNotificationItemMutation = () => {
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

export const usePatchAllNotificationMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchAllNotificationRead,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notifications"],
      });
    },
  });
};
