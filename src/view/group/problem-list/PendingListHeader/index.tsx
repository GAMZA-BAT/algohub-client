import { IcnCalendarTable } from "@/asset/svg";
import {
  dateStyle,
  headerStyle,
  textStyle,
} from "@/view/group/problem-list/PendingListHeader/index.css";

const PendingListHeader = () => {
  return (
    <header className={headerStyle}>
      <p className={textStyle}>Level</p>
      <p className={textStyle}>문제</p>
      <p className={`${textStyle} ${dateStyle}`}>
        <IcnCalendarTable width={20} height={20} />
        기간
      </p>
    </header>
  );
};

export default PendingListHeader;
