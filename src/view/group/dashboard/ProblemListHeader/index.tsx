import { IcnCalendarTable } from "@/asset/svg";
import {
  dateTextStyle,
  headerStyle,
  leftAlignStyle,
  textStyle,
} from "@/view/group/dashboard/ProblemListHeader/index.css";

const ProblemListHeader = () => {
  return (
    <header className={headerStyle}>
      <p className={leftAlignStyle}>Level</p>
      <p className={leftAlignStyle}>문제</p>
      <p className={`${textStyle} ${dateTextStyle}`}>
        <IcnCalendarTable width={20} height={20} />
        기간
      </p>
      <p className={textStyle}>Solved</p>
      <p className={textStyle}>Accuracy</p>
      <p className={textStyle}>Status</p>
    </header>
  );
};

export default ProblemListHeader;
