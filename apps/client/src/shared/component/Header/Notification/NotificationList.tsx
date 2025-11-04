import { useNotificationsQueryObject } from "@/app/api/notifications/query";
import { IcnBtnArrowDown } from "@/asset/svg";
import Empty from "@/shared/component/Empty";
import type { NotificationType } from "@/shared/component/Header/Notification";
import NotificationListItem from "@/shared/component/Header/Notification/NotificationItem";
import {
  emptyWrapper,
  moreButtonStyle,
  ulStyle,
} from "@/shared/component/Header/Notification/index.css";
import { useSuspenseQuery } from "@tanstack/react-query";

interface NotificationListProps {
  notificationType: NotificationType;
  isExpanded: boolean;
  expandList: () => void;
}

const NotificationList = ({
  notificationType,
  isExpanded,
  expandList: handleExpandList,
}: NotificationListProps) => {
  const { data: notificationData } = useSuspenseQuery(
    useNotificationsQueryObject(notificationType),
  );

  const notificationList = isExpanded
    ? notificationData
    : notificationData?.slice(0, 6);

  const shouldShowMoreButton = notificationList.length >= 6 && !isExpanded;

  return notificationList.length > 0 ? (
    <>
      <ul className={ulStyle} aria-label="알림 목록">
        {notificationList.map((notification) => (
          <NotificationListItem
            key={notification.id}
            {...notification}
            notificationType={notificationType}
          />
        ))}
      </ul>

      {shouldShowMoreButton && (
        <button
          className={moreButtonStyle}
          onClick={handleExpandList}
          aria-expanded={isExpanded}
        >
          <IcnBtnArrowDown width={"1.2rem"} height={"1.2rem"} />
          더보기
        </button>
      )}
    </>
  ) : (
    <div className={emptyWrapper}>
      <Empty guideText="아직 도착한 알림이 없습니다" />
    </div>
  );
};

export default NotificationList;
