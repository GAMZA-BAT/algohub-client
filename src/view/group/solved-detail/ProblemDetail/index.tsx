import type { SolutionByIdResponse } from "@/api/solutions/type";
import CheckBox from "@/common/component/CheckBox";
import { getTierImage } from "@/shared/util/img";
import { getSolvedStatusByResult } from "@/shared/util/result";
import { getTierByLevel } from "@/shared/util/tier";
import {
  checkboxStyle,
  commonStyle,
  iconStyle,
  itemStyle,
  titleStyle,
  titleWrapperStyle,
  wrongCheckBoxStyle,
} from "@/view/group/solved-detail/ProblemDetail/index.css";
import clsx from "clsx";
import { format } from "date-fns";
import Link from "next/link";

type ProblemDetailProps = Pick<
  SolutionByIdResponse,
  | "solutionId"
  | "problemTitle"
  | "problemLevel"
  | "solvedDateTime"
  | "result"
  | "accuracy"
  | "submitMemberCount"
  | "totalMemberCount"
> & {
  className?: string;
};

const JSX_BY_STATUS = {
  wrong: (
    <input
      type="checkbox"
      disabled
      className={clsx(checkboxStyle, wrongCheckBoxStyle)}
    />
  ),
  solved: <CheckBox checked={true} className={checkboxStyle} />,
};
const ProblemDetail = ({
  problemLevel,
  problemTitle,
  solvedDateTime,
  accuracy,
  submitMemberCount,
  totalMemberCount,
  result,
  className,
}: ProblemDetailProps) => {
  const Icon = getTierImage(getTierByLevel(problemLevel));
  const solved = getSolvedStatusByResult(result);

  return (
    <li
      aria-label={`문제: ${problemTitle}`}
      className={clsx(itemStyle, className)}
    >
      <div className={titleWrapperStyle}>
        <Icon width={25} height={32} />
        <Link className={titleStyle} href="">
          <span className={commonStyle}>{problemTitle}</span>
        </Link>
      </div>
      <time dateTime={solvedDateTime} className={commonStyle}>
        {format(solvedDateTime, "yyyy.MM.dd")}
      </time>
      <span
        className={commonStyle}
      >{`${submitMemberCount}/${totalMemberCount}`}</span>
      <span className={commonStyle}>{`${accuracy}%`}</span>
      <div className={iconStyle}>
        {JSX_BY_STATUS[solved ? "solved" : "wrong"]}
      </div>
    </li>
  );
};

export default ProblemDetail;
