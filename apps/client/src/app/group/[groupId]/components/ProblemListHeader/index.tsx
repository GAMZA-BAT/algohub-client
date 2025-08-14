import {
  dateTextStyle,
  headerStyle,
  leftAlignStyle,
  textStyle,
} from "@/app/group/[groupId]/components/ProblemListHeader/index.css";
import { IcnCalendarTable } from "@/asset/svg";

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
