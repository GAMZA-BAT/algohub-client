import type { NotificationType } from "@/shared/component/Header/Notification";
import {
  indicatorStyle,
  notificationTabStyle,
  textStyle,
} from "@/shared/component/Header/Notification/Notification.css";
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
  const isSelected = notificationType === tabId;

  const handleTabClick = () => {
    setNotificationType(tabId);
    shrinkList();
  };

  return (
    <li>
      <button
        role="tab"
        aria-selected={isSelected}
        className={notificationTabStyle({ isSelected })}
        onClick={handleTabClick}
      >
        <span className={textStyle}>{children}</span>
        {isSelected && <motion.div layoutId={"notification-tab-indicator"} className={indicatorStyle} />}
      </button>
    </li>
  );
};

export default NotificationTab;
