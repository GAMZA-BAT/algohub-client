import { IcnBtnDeleteCircle } from "@/asset/svg";
import icnNew from "@/asset/svg/icn_new.svg?url";
import { handleA11yClick } from "@/common/util/dom";
import {
  dateContainerStyle,
  dotStyle,
} from "@/shared/component/Header/Notification/index.css";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import { getFormattedcreatedAt } from "@/shared/util/time";
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
};

const NotificationListItem = ({
  onClick,
  profileImg,
  name,
  message,
  date,
  isRead,
}: NotificationListProps) => {
  const { isActive, handleMouseOver, handleMouseOut, handleFocus, handleBlur } =
    useA11yHoverHandler();

  const handleDeleteClick = () => {
    alert("delete");
  };

  return (
    <li
      className={containerStyle}
      aria-label={`${name}님의 알림: ${message}, ${date}`}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
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
            <span className={messageStyle}>{message}</span>
          </div>
        </div>
        <div className={dateContainerStyle}>
          <div className={dotStyle({ isRead })} />
          <time className={dateStyle} aria-label={date}>
            {getFormattedcreatedAt(date)}
          </time>
        </div>
      </div>
      <IcnBtnDeleteCircle
        role="button"
        className={deleteIconStyle({ active: isActive })}
        width={"1.6rem"}
        height={"1.6rem"}
        onClick={handleDeleteClick}
        onKeyDown={handleA11yClick(handleDeleteClick)}
        aria-hidden={!isActive}
        aria-label={`${name}님의 알림 삭제`}
        tabIndex={0}
      />
    </li>
  );
};

export default NotificationListItem;
