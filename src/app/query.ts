import {
  deleteNotification,
  getNotificationList,
  patchAllNotificationRead,
  patchNotificationRead,
} from "@/app/api/notifications";
import type { NotificationItem } from "@/app/api/notifications/type";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";

export const useNotificationsQuery = () => {
  return useSuspenseQuery({
    queryKey: ["notifications"],
    queryFn: getNotificationList,
    staleTime: 0,
  });
};

export const useReadNotiItemMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => patchNotificationRead(id),
    onMutate: async (id: number) => {
      await queryClient.cancelQueries({ queryKey: ["notifications"] });

      const prev = queryClient.getQueryData<NotificationItem[]>([
        "notifications",
      ]);
      const newData = prev?.map((item) =>
        item.id === id ? { ...item, isRead: true } : item,
      );

      queryClient.setQueryData(["notifications"], newData);

      return { prev };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
    onError: (_err, _new, context) => {
      queryClient.setQueryData(["notifications"], context?.prev);
    },
  });
};

export const useReadAllNotiMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchAllNotificationRead,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["notifications"] });

      const prev = queryClient.getQueryData<NotificationItem[]>([
        "notifications",
      ]);
      const newData = prev?.map((item) => ({ ...item, isRead: true }));

      queryClient.setQueryData(["notifications"], newData);

      return { prev };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
    onError: (_err, _new, context) => {
      queryClient.setQueryData(["notifications"], context?.prev);
    },
  });
};

export const useDeleteNotiMutation = () => {
  return useMutation({
    mutationFn: (id: number) => deleteNotification(id),
  });
};
