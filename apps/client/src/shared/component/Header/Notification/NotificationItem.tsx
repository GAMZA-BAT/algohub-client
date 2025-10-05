import { IcnBtnDeleteCircle } from "@/asset/svg";
import icnNew from "@/asset/svg/icn_new.svg?url";
import { getDaysDifference } from "@/common/util/date";
import { handleA11yClick } from "@/common/util/dom";
import { dateContainerStyle } from "@/shared/component/Header/Notification/index.css";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import Image from "next/image";
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
  profileImg: string;
  name: string;
  message: string;
  date: string;
  isRead: boolean;
  onClick: () => void;
  onDelete: () => void;
};

const NotificationListItem = ({
  onClick,
  profileImg,
  name,
  message,
  date,
  isRead,
  onDelete,
}: NotificationListProps) => {
  const { isActive, ...handlers } = useA11yHoverHandler();

  return (
    <li className={containerStyle} aria-label={`${name}님의 알림: ${message}, ${date}`} {...handlers}>
      <div
        role="button"
        className={notificationContentStyle}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onKeyDown={(e) => {
          e.stopPropagation();
          handleA11yClick(onClick);
        }}
        tabIndex={0}
      >
        <div className={profileStyle}>
          <Image
            src={profileImg || icnNew}
            width={25}
            height={25}
            className={profileImageStyle}
            alt={`${name}님의 프로필 이미지`}
          />
          <div>
            <strong className={nameStyle}>{name} </strong>
            <span className={messageStyle({ isRead })}>{message}</span>
          </div>
        </div>
        <div className={dateContainerStyle}>
          <time className={dateStyle} aria-label={date}>
            {`${getDaysDifference(date)}일 전`}
          </time>
        </div>
      </div>
      <IcnBtnDeleteCircle
        role="button"
        className={deleteIconStyle({ active: isActive })}
        width={"1.6rem"}
        height={"1.6rem"}
        onClick={(e) => {
          e.stopPropagation();

          onDelete();
        }}
        onKeyDown={handleA11yClick(onDelete)}
        aria-hidden={!isActive}
        aria-label={`${name}님의 알림 삭제`}
        tabIndex={0}
      />
    </li>
  );
};

export default NotificationListItem;
