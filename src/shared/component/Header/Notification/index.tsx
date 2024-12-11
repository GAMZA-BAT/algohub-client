import type { NotificationItem } from "@/app/api/notifications/type";
import { IcnBellHeader } from "@/asset/svg";
import {
  countStyle,
  notificationContainer,
  ulStyle,
} from "@/shared/component/Header/Notification/index.css";
import { usePatchNotificationMutation } from "@/shared/component/Header/Notification/query";
import { iconStyle } from "@/shared/component/Header/index.css";
import type { HTMLAttributes } from "react";
import NotificationListItem from "./NotificationItem";

interface NotificationProps extends HTMLAttributes<HTMLUListElement> {
  notificationList: NotificationItem[];
}

const Notification = ({ notificationList, ...props }: NotificationProps) => {
  const { mutate: readNotification } = usePatchNotificationMutation();

  return (
    <div className={notificationContainer}>
      <ul className={ulStyle} {...props} aria-label="알림 목록">
        {notificationList.map((notification, index) => (
          <NotificationListItem
            key={index}
            isRead={notification.isRead}
            name={notification.groupName}
            message={notification.message}
            date={notification.createdAt}
            profileImg={notification.groupImage}
            onClick={() => readNotification(notification.id)}
          />
        ))}
      </ul>
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
      {count > 0 && (
        <div aria-live="polite" className={countStyle}>
          {count}
        </div>
      )}
      <IcnBellHeader className={iconStyle} />
    </button>
  );
};

export default Notification;
