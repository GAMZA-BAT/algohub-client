import type { NotificationItem } from "@/app/api/notifications/type";
import { IcnBellHeader } from "@/asset/svg";
import {
  countStyle,
  notificationContainer,
  ulStyle,
} from "@/shared/component/Header/Notification/index.css";
import { iconStyle } from "@/shared/component/Header/index.css";
import type { HTMLAttributes } from "react";
import NotificationListItem from "./NotificationItem";

interface NotificationProps extends HTMLAttributes<HTMLUListElement> {
  notificationList: NotificationItem[];
}

const Notification = ({ notificationList, ...props }: NotificationProps) => {
  return (
    <div className={notificationContainer}>
      <ul className={ulStyle} {...props} aria-label="알림 목록">
        {/* TODO: api 연결 후 notifications 데이터 변경 */}
        {notificationList.map((notification, index) => (
          <NotificationListItem
            key={index} // TODO: api 연결 후 key 변경
            name={notification.groupName}
            message={notification.message}
            date={notification.createAt}
            profileImg={notification.groupImage}
            onClick={() => {
              alert("click");
            }}
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
