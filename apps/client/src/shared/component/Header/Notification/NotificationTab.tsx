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
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: string;
};

const NotificationTab = ({
  tabId,
  notificationType,
  setNotificationType,
  setIsOpen,
  children,
}: NotificationTabProps) => {
  const isSelected = notificationType === tabId;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === "Enter") {
      setNotificationType(tabId);
      setIsOpen(false);
    }
  };

  return (
    <li
      // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole:
      role="tab"
      id={`tab-${notificationType}`}
      tabIndex={-1}
      aria-selected={isSelected}
      className={notificationTabStyle({ isSelected })}
      onClick={() => {
        setNotificationType(tabId);
        setIsOpen(false);
      }}
      onKeyDown={handleKeyDown}
    >
      <span className={textStyle}>{children}</span>
      {isSelected && <motion.div layoutId={"notification-tab-indicator"} className={indicatorStyle} />}
    </li>
  );
};

export default NotificationTab;
