import { IcnBellHeader } from "@/asset/svg";
import {
  alarmContainer,
  countStyle,
  ulStyle,
} from "@/shared/component/Header/Alarm/Alarm.css";
import { iconStyle } from "@/shared/component/Header/index.css";
import { alarms } from "@/shared/constant/example";
import type { HTMLAttributes } from "react";
import AlarmListItem from "./AlarmListItem";

type AlarmProps = HTMLAttributes<HTMLUListElement>;

const Alarm = ({ ...props }: AlarmProps) => {
  return (
    <div className={alarmContainer}>
      <ul className={ulStyle} {...props} aria-label="알림 목록">
        {/* TODO: api 연결 후 alarms 데이터 변경 */}
        {alarms.map((alarm, index) => (
          <AlarmListItem
            key={index} // TODO: api 연결 후 key 변경
            name={alarm.name}
            message={alarm.message}
            date={alarm.date}
            profileImg={alarm.profileImg}
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
