import { useNotificationsQueryObject } from "@/app/api/notifications/query";
import { IcnBtnArrowDown } from "@/asset/svg";
import Empty from "@/shared/component/Empty";
import type { NotificationType } from "@/shared/component/Header/Notification";
import NotificationListItem from "@/shared/component/Header/Notification/NotificationItem";
import { moreButtonStyle, ulStyle } from "@/shared/component/Header/Notification/index.css";
import { useSuspenseQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";

interface NotificationListProps {
  notificationType: NotificationType;
  isExpanded: boolean;
  expandList: () => void;
}

const NotificationList = ({ notificationType, isExpanded, expandList: handleExpandList }: NotificationListProps) => {
  const { data: notificationData } = useSuspenseQuery(useNotificationsQueryObject(notificationType));

  const notificationList = isExpanded ? notificationData : notificationData?.slice(0, 6);

  return notificationList ? (
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

      {!isExpanded && (
        <button className={moreButtonStyle} onClick={handleExpandList} aria-expanded={isExpanded}>
          <IcnBtnArrowDown width={"1.2rem"} height={"1.2rem"} />
          더보기
        </button>
      )}
    </>
  ) : (
    <Empty guideText="지금은 알림이 없어요." />
  );
};

export default NotificationList;
