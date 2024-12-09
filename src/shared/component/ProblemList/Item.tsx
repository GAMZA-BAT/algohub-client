"use client";

import type { ProblemContent } from "@/app/api/problems/type";
import CheckBox from "@/common/component/CheckBox";
import ProblemEdit from "@/shared/component/ProblemList/ProblemEdit";
import {
  checkboxStyle,
  commonStyle,
  iconStyle,
  itemStyle,
  titleStyle,
  wrongCheckBoxStyle,
} from "@/shared/component/ProblemList/index.css";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import { getTierImage } from "@/shared/util/img";
import clsx from "clsx";

import { format } from "date-fns";
import Link from "next/link";

type ProblemListItemProps = Omit<ProblemContent, "startDate"> & {
  isOwner?: boolean;
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
  unsolved: <CheckBox checked={false} className={checkboxStyle} />,
  solved: <CheckBox checked={true} className={checkboxStyle} />,
};

const ProblemListItem = ({
  problemId,
  title,
  endDate,
  level,
  solved,
  className,
  accuracy,
  memberCount,
  submitMemberCount,
  isOwner = false,
}: ProblemListItemProps) => {
  const groupId = useGetGroupId();
  const Icon = getTierImage(level);

  const isExpired = new Date(endDate).getTime() - new Date().getTime() <= 0;

  const status = solved ? "solved" : isExpired ? "wrong" : "unsolved";

  const { isActive, handleBlur, handleFocus, handleMouseOut, handleMouseOver } =
    useA11yHoverHandler();

  return (
    <li
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
      aria-label={`문제: ${title}`}
      className={clsx(
        itemStyle({ isActive: isOwner ? isActive : false }),
        className,
      )}
    >
      <Icon width={25} height={32} />
      <Link
        className={titleStyle}
        href={`/group/${groupId}/problem-list/${problemId}`}
      >
        <span className={commonStyle}>{title}</span>
      </Link>
      <time dateTime={endDate} className={commonStyle}>
        {format(endDate, "yyyy.MM.dd")}
      </time>
      <span
        className={commonStyle}
      >{`${submitMemberCount}/${memberCount}`}</span>
      <span className={commonStyle}>{`${accuracy}%`}</span>
      <div className={iconStyle}>{JSX_BY_STATUS[status]}</div>
      {isOwner && <ProblemEdit problemId={problemId} isActive={isActive} />}
    </li>
  );
};

export default ProblemListItem;
