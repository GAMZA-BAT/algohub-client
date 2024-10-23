import { IcnBellHeader } from "@/asset/svg";

import { iconStyle } from "@/shared/component/Header/index.css";
import { alarms } from "@/shared/constant/example";
import { alarmContainer, countStyle, ulStyle } from "./Alarm/Alarm.css";
import AlarmListItem from "./Alarm/AlarmListItem";

const Alarm = () => {
  return (
    <div id="alarm" className={alarmContainer} aria-labelledby="alarm-toggle">
      <ul className={ulStyle} aria-label="알림 목록">
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

type TriggerIconProps = {
  count: number;
};

Alarm.TriggerIcon = ({ count }: TriggerIconProps) => {
  return (
    <>
      {count > 0 && (
        <div aria-live="polite" className={countStyle}>
          {count}
        </div>
      )}
      <IcnBellHeader className={iconStyle} />
    </>
  );
};

export default Alarm;
