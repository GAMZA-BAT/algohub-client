import { useNotificationsQueryObject } from "@/app/api/notifications/query";
import type { NotificationType } from "@/shared/component/Header/Notification";
import {
  indicatorStyle,
  notificationTabStyle,
  textStyle,
} from "@/shared/component/Header/Notification/index.css";

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

  const prefetchNotification = () => {
    // biome-ignore lint/correctness/useHookAtTopLevel: <explanation>
    queryClient.prefetchQuery(useNotificationsQueryObject(tabId));
  };

  const isSelected = notificationType === tabId;

  const handleTabClick = () => {
    setNotificationType(tabId);
    shrinkList();
  };

  return (
    <li role="presentation">
      <button
        role="tab"
        aria-selected={isSelected}
        className={notificationTabStyle({ isSelected })}
        onClick={handleTabClick}
        onMouseEnter={prefetchNotification}
        onFocus={prefetchNotification}
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
