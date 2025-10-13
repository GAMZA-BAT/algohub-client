import { useNotificationsQueryObject } from "@/app/api/notifications/query";
import type { NotificationType } from "@/shared/component/Header/Notification";
import {
  indicatorStyle,
  notificationTabStyle,
  textStyle,
} from "@/shared/component/Header/Notification/Notification.css";
import { useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";

type NotificationTabProps = {
  tabId: NotificationType;
  notificationType: NotificationType;
  setNotificationType: Dispatch<SetStateAction<NotificationType>>;
  shrinkList: () => void;

  children: string;
};

const NotificationTab = ({
  tabId,
  notificationType,
  setNotificationType,
  shrinkList,

  children,
}: NotificationTabProps) => {
  const queryClient = useQueryClient();

  const prefetchNotification = (notificationType: NotificationType) => {
    // biome-ignore lint/correctness/useHookAtTopLevel: <explanation>
    queryClient.prefetchQuery(useNotificationsQueryObject(notificationType));
  };

  const isSelected = notificationType === tabId;

  const handleTabClick = () => {
    setNotificationType(tabId);
    shrinkList();
  };

  return (
    <li
      onMouseEnter={() => prefetchNotification(tabId)}
      onFocus={() => prefetchNotification(tabId)}
    >
      <button
        role="tab"
        aria-selected={isSelected}
        className={notificationTabStyle({ isSelected })}
        onClick={handleTabClick}
      >
        <span className={textStyle}>{children}</span>
        {isSelected && (
          <motion.div
            layoutId={"notification-tab-indicator"}
            className={indicatorStyle}
          />
        )}
      </button>
    </li>
  );
};

export default NotificationTab;
