import type { SolutionByIdResponse } from "@/api/solution/type";
import CheckBox from "@/common/component/CheckBox";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import { getTierImage } from "@/shared/util/img";
import { getSolvedStatusByResult } from "@/shared/util/result";
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
  "solutionId" | "problemTitle" | "problemLevel" | "solvedDateTime" | "result"
> & {
  className?: string;
  accuracy?: number;
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
  solutionId,
  problemLevel,
  problemTitle,
  solvedDateTime,
  accuracy,
  result,
  className,
}: ProblemDetailProps) => {
  const { handleBlur, handleFocus, handleMouseOut, handleMouseOver } =
    useA11yHoverHandler();

  const Icon = getTierImage("bronze 1");
  const solved = getSolvedStatusByResult(result);

  return (
    <li
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
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
      <span className={commonStyle}>50/200</span>
      <span className={commonStyle}>80%</span>
      <div className={iconStyle}>
        {JSX_BY_STATUS[solved ? "solved" : "wrong"]}
      </div>
    </li>
  );
};

export default ProblemDetail;
