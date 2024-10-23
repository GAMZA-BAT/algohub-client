import { IcnBtnDeleteCircle } from "@/asset/svg";
import { handleA11yClick } from "@/common/util/dom";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import Image, { type StaticImageData } from "next/image";
import {
  alarmContentStyle,
  containerStyle,
  dateStyle,
  deleteIconStyle,
  messageStyle,
  nameStyle,
  profileImageStyle,
  profileStyle,
} from "./AlarmListItem.css";

type AlarmListProps = {
  profileImg: StaticImageData;
  name: string;
  message: string;
  date: string;
  onClick: () => void;
};

const AlarmListItem = ({
  onClick,
  profileImg,
  name,
  message,
  date,
}: AlarmListProps) => {
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
        className={alarmContentStyle}
        onClick={onClick}
        onKeyDown={handleA11yClick(onClick)}
        tabIndex={0}
      >
        <div className={profileStyle}>
          <Image
            src={profileImg}
            className={profileImageStyle}
            alt={`${name}님의 프로필 이미지`}
          />
          <div>
            <strong className={nameStyle}>{name} </strong>
            <span className={messageStyle}>{message}</span>
          </div>
        </div>
        <time className={dateStyle} aria-label={date}>
          {date}
        </time>
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

export default AlarmListItem;
