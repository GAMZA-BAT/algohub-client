import { IcnCalenderCard } from "@/asset/svg";
import {
  groupDateInfoWrapper,
  groupDateStyle,
} from "@/view/user/join-group/GroupInfoCard/GroupDateInfo.css";

interface GroupDateInfoProps {
  startDate: string;
  endDate: string;
}
const GroupDateInfo = ({ startDate, endDate }: GroupDateInfoProps) => {
  return (
    <div className={groupDateInfoWrapper}>
      <IcnCalenderCard width={20} height={20} />
      <time dateTime={startDate} className={groupDateStyle}>
        {startDate}
      </time>
      <span className={groupDateStyle}>~</span>
      <time dateTime={endDate} className={groupDateStyle}>
        {endDate}
      </time>
    </div>
  );
};

export default GroupDateInfo;
