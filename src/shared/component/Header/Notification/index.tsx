"use client";
import type { NotificationItem } from "@/app/api/notifications/type";
import { IcnBellHeader } from "@/asset/svg";
import {
  allReadButtonStyle,
  countStyle,
  notificationContainer,
  ulStyle,
} from "@/shared/component/Header/Notification/index.css";

import { iconStyle } from "@/shared/component/Header/index.css";

import { useReadAllNotiMutation, useReadNotiItemMutation } from "@/app/query";
import { useRouter } from "next/navigation";
import type { HTMLAttributes } from "react";
import NotificationListItem from "./NotificationItem";

interface NotificationProps extends HTMLAttributes<HTMLUListElement> {
  notificationList: NotificationItem[];
}

const Notification = ({ notificationList, ...props }: NotificationProps) => {
  const router = useRouter();

  const { mutate: readNotiMutate } = useReadNotiItemMutation();
  const { mutate: readAllMutate } = useReadAllNotiMutation();

  const handleItemClick = (data: NotificationItem) => {
    if (!data.isRead) readNotiMutate(data.id);
    router.push(
      `/group/${data.groupId}${data.problemId ? `/problem-list/${data.problemId}` : ""}${data.solutionId ? `/solved-detail/${data.solutionId}` : ""}`,
    );
  };

  return (
    <div className={notificationContainer}>
      <button onClick={() => readAllMutate()} className={allReadButtonStyle}>
        모두 읽음 표시
      </button>
      <ul className={ulStyle} {...props} aria-label="알림 목록">
        {notificationList.map((notification, index) => (
          <NotificationListItem
            key={index}
            isRead={notification.isRead}
            name={notification.groupName}
            message={notification.message}
            date={notification.createdAt}
            profileImg={notification.groupImage}
            onClick={() => handleItemClick(notification)}
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
      {count > 0 && <div aria-live="polite" className={countStyle} />}
      <IcnBellHeader className={iconStyle} />
    </button>
  );
};

export default Notification;
