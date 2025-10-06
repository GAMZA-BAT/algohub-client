"use client";
import { IcnBellHeader } from "@/asset/svg";
import Spinner from "@/common/component/Spinner";
import { notificationTabListStyle } from "@/shared/component/Header/Notification/Notification.css";
import NotificationList from "@/shared/component/Header/Notification/NotificationList";
import NotificationTab from "@/shared/component/Header/Notification/NotificationTab";
import {
  countChipStyle,
  countStyle,
  headerStyle,
  loadingContainer,
  notificationContainer,
  titleStyle,
} from "@/shared/component/Header/Notification/index.css";
import { iconStyle } from "@/shared/component/Header/index.css";
import {} from "framer-motion";
import { Suspense, useState } from "react";

export type NotificationType = "ALL" | "PROBLEM" | "COMMENT" | "STUDY_GROUP";

const notificationMap: Record<NotificationType, string> = {
  ALL: "전체",
  PROBLEM: "문제",
  COMMENT: "코멘트",
  STUDY_GROUP: "스터디",
};

interface NotificationProps {
  notiCounts: number;
}

const Notification = ({ notiCounts }: NotificationProps) => {
  const [notificationType, setNotificationType] = useState<NotificationType>("ALL");
  const [isExpanded, setIsExpanded] = useState(false);

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

      <ul className={notificationTabListStyle}>
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

      <Suspense
        fallback={
          <div className={loadingContainer}>
            <Spinner />
          </div>
        }
      >
        <NotificationList notificationType={notificationType} isExpanded={isExpanded} expandList={expandList} />
      </Suspense>
    </div>
  );
};

interface TriggerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
