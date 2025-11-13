import {
  useDeleteNotiMutation,
  useReadNotiItemMutation,
} from "@/app/api/notifications/mutation";
import { IcnBtnDeleteCircle } from "@/asset/svg";
import icnNew from "@/asset/svg/icn_new.svg?url";
import type { NotificationType } from "@/shared/component/Header/Notification";
import { dateContainerStyle } from "@/shared/component/Header/Notification/index.css";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import { differenceInCalendarDays } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import {
  containerStyle,
  dateStyle,
  deleteIconStyle,
  messageStyle,
  nameStyle,
  notificationContentStyle,
  profileImageStyle,
  profileStyle,
} from "./NotificationItem.css";

type NotificationListProps = {
  id: number;
  problemId: number | null;
  solutionId: number | null;
  groupId: number | null;
  groupImage: string;
  groupName: string;
  message: string;
  createdAt: string;
  isRead: boolean;
  notificationType: NotificationType;
};

const NotificationListItem = ({
  id,
  problemId,
  solutionId,
  groupId,
  groupImage,
  groupName,
  message,
  createdAt,
  isRead,
  notificationType,
}: NotificationListProps) => {
  const { isActive, ...handlers } = useA11yHoverHandler();

  const { mutate: readNotiMutate } = useReadNotiItemMutation(notificationType);
  const { mutate: deleteMutate } = useDeleteNotiMutation(notificationType);

  const notificationLink = `/group/${groupId}${problemId ? `/problem-list/${problemId}` : ""}${
    solutionId ? `/solved-detail/${solutionId}` : ""
  }`;

  const handleItemClick = () => {
    if (!isRead) readNotiMutate(id);
  };

  const handleItemDelete = () => {
    deleteMutate(id);
  };

  return (
    <li className={containerStyle} {...handlers}>
      <Link
        href={notificationLink}
        className={notificationContentStyle}
        onClick={handleItemClick}
      >
        <div className={profileStyle}>
          <Image
            src={groupImage || icnNew}
            width={25}
            height={25}
            className={profileImageStyle}
            alt=""
          />
          <div>
            <strong className={nameStyle}>{groupName} </strong>
            <span className={messageStyle({ isRead })}>{message}</span>
          </div>
        </div>
        <div className={dateContainerStyle}>
          <time className={dateStyle} dateTime={createdAt}>
            {`${differenceInCalendarDays(new Date(), new Date(createdAt))}일 전`}
          </time>
        </div>
      </Link>

      <button
        className={deleteIconStyle({ active: isActive })}
        onClick={handleItemDelete}
        aria-label={`${groupName}의 알림 삭제`}
      >
        <IcnBtnDeleteCircle width={"1.6rem"} height={"1.6rem"} aria-hidden />
      </button>
    </li>
  );
};

export default NotificationListItem;
