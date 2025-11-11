"use client";
import { useNotificationsQueryObject } from "@/app/api/notifications/query";
import { IcnBellHeader } from "@/asset/svg";
import { notificationTabListStyle } from "@/shared/component/Header/Notification/Notification.css";
import NotificationList from "@/shared/component/Header/Notification/NotificationList";
import NotificationTab from "@/shared/component/Header/Notification/NotificationTab";
import {
  countChipStyle,
  countStyle,
  headerStyle,
  notificationContainer,
  titleStyle,
} from "@/shared/component/Header/Notification/index.css";
import { iconStyle } from "@/shared/component/Header/index.css";
import { useQuery } from "@tanstack/react-query";
import {} from "framer-motion";
import { useState } from "react";

export enum NotificationType {
  ALL = "ALL",
  PROBLEM = "PROBLEM",
  COMMENT = "COMMENT",
  STUDY_GROUP = "STUDY_GROUP",
}

const notificationMap: Record<NotificationType, string> = {
  [NotificationType.ALL]: "전체",
  [NotificationType.PROBLEM]: "문제",
  [NotificationType.COMMENT]: "코멘트",
  [NotificationType.STUDY_GROUP]: "스터디",
};

const Notification = () => {
  const [notificationType, setNotificationType] = useState<NotificationType>(
    NotificationType.ALL,
  );
  const [isExpanded, setIsExpanded] = useState(false);

  const { data } = useQuery(useNotificationsQueryObject(notificationType));
  const notiCounts = data ? data.filter((item) => !item.isRead).length : 0;

  const shrinkList = () => {
    setIsExpanded(false);
  };

  const expandList = () => {
    setIsExpanded(true);
  };

  return (
    <div className={notificationContainer}>
      <header className={headerStyle} aria-labelledby="notification-title">
        <h2 className={titleStyle} id="notification-title">
          알림
        </h2>
        <div className={countChipStyle}>{`신규 ${notiCounts}`}</div>
      </header>

      <ul role="tablist" className={notificationTabListStyle}>
        {Object.entries(notificationMap).map(([tabId, tabText]) => (
          <NotificationTab
            key={tabId}
            tabId={tabId as NotificationType}
            notificationType={notificationType}
            setNotificationType={setNotificationType}
            shrinkList={shrinkList}
          >
            {tabText}
          </NotificationTab>
        ))}
      </ul>

      <NotificationList
        notificationType={notificationType}
        isExpanded={isExpanded}
        expandList={expandList}
      />
    </div>
  );
};

interface TriggerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  count: number;
}

Notification.TriggerButton = ({ count, ...props }: TriggerButtonProps) => {
  return (
    <button {...props}>
      {count > 0 && <div aria-live="polite" className={countStyle} />}
      <IcnBellHeader className={iconStyle} />
    </button>
  );
};

export default Notification;
