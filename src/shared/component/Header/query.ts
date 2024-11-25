import { getNotificationList } from "@/api/notifications";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useNotificationsQuery = () => {
  return useSuspenseQuery({
    queryKey: ["notifications"],
    queryFn: getNotificationList,
  });
};
