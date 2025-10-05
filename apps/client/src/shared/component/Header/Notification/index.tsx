"use client";
import { useNotificationsQueryObject } from "@/app/api/notifications/query";
import { IcnBellHeader, IcnBtnArrowDown } from "@/asset/svg";
import Empty from "@/shared/component/Empty";
import { notificationTabListStyle } from "@/shared/component/Header/Notification/Notification.css";
import NotificationTab from "@/shared/component/Header/Notification/NotificationTab";
import {
  countChipStyle,
  countStyle,
  headerStyle,
  moreButtonStyle,
  notificationContainer,
  titleStyle,
  ulStyle,
} from "@/shared/component/Header/Notification/index.css";
import { iconStyle } from "@/shared/component/Header/index.css";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import NotificationListItem from "./NotificationItem";

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
  const [isOpen, setIsOpen] = useState(false);

  const { data: notificationData, isFetching } = useQuery(useNotificationsQueryObject(notificationType));

  const notificationList = isOpen ? notificationData : notificationData?.slice(0, 6);

  return (
    <div className={notificationContainer}>
      <header className={headerStyle}>
        <h2 className={titleStyle}>알림</h2>
        <div className={countChipStyle}>{`신규 ${notiCounts}`}</div>
      </header>

      <ul className={notificationTabListStyle}>
        {Object.entries(notificationMap).map(([tabId, tabText]) => (
          <NotificationTab
            key={tabId}
            tabId={tabId as NotificationType}
            notificationType={notificationType}
            setNotificationType={setNotificationType}
            setIsOpen={setIsOpen}
          >
            {tabText}
          </NotificationTab>
        ))}
      </ul>

      {notificationList ? (
        <>
          <ul className={ulStyle} aria-label="알림 목록">
            <AnimatePresence>
              {notificationList.map((notification) => (
                <motion.li
                  key={notification.id}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <NotificationListItem {...notification} notificationType={notificationType} />
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          {!isOpen && (
            <button className={moreButtonStyle} onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
              <IcnBtnArrowDown width={"1.2rem"} height={"1.2rem"} />
              더보기
            </button>
          )}
        </>
      ) : isFetching ? (
        <></>
      ) : (
        <Empty guideText="지금은 알림이 없어요." />
      )}
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
