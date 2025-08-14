import {
  dateStyle,
  headerStyle,
  textStyle,
} from "@/app/group/[groupId]/problem-list/components/PendingListHeader/index.css";
import { IcnCalendarTable } from "@/asset/svg";

const PendingListHeader = () => {
  return (
    <header className={headerStyle}>
      <p className={textStyle}>Level</p>
      <p className={textStyle}>문제</p>
      <p className={`${textStyle} ${dateStyle}`}>
        <IcnCalendarTable width={20} height={20} />
        시작 날짜
      </p>
      <p className={`${textStyle} ${dateStyle}`}>
        <IcnCalendarTable width={20} height={20} />
        마감 날짜
      </p>
    </header>
  );
};

export default PendingListHeader;
