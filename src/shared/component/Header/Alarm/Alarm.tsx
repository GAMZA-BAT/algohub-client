import type { NotificationItem } from "@/api/notifications/type";
import { IcnBellHeader } from "@/asset/svg";
import {
  alarmContainer,
  countStyle,
  ulStyle,
} from "@/shared/component/Header/Alarm/Alarm.css";
import { iconStyle } from "@/shared/component/Header/index.css";
import type { HTMLAttributes } from "react";
import AlarmListItem from "./AlarmListItem";

interface AlarmProps extends HTMLAttributes<HTMLUListElement> {
  alarmList: NotificationItem[];
}

const Alarm = ({ alarmList, ...props }: AlarmProps) => {
  return (
    <div className={alarmContainer}>
      <ul className={ulStyle} {...props} aria-label="알림 목록">
        {/* TODO: api 연결 후 alarms 데이터 변경 */}
        {alarmList.map((alarm, index) => (
          <AlarmListItem
            key={index} // TODO: api 연결 후 key 변경
            name={alarm.groupName}
            message={alarm.message}
            date={alarm.createAt}
            profileImg={alarm.groupImage}
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

Alarm.TriggerButton = ({ count, ...props }: TriggerButtonProps) => {
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

export default Alarm;
