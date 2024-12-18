"use client";

import type { ProblemContent } from "@/app/api/problems/type";
import ProblemEdit from "@/shared/component/ProblemList/ProblemEdit";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import { getTierImage } from "@/shared/util/img";
import {
  activeStyle,
  itemStyle,
  textStyle,
  titleStyle,
} from "@/view/group/problem-list/PendingList/index.css";
import clsx from "clsx";

import { format } from "date-fns";
import Link from "next/link";

export type PendingListItemProps = Pick<
  ProblemContent,
  "problemId" | "title" | "startDate" | "endDate" | "level"
> & {
  className?: string;
};

const PendingListItem = ({
  problemId,
  title,
  startDate,
  endDate,
  level,
  className,
}: PendingListItemProps) => {
  const Icon = getTierImage(level);
  const groupId = useGetGroupId();
  const { isActive, handleBlur, handleFocus, handleMouseOut, handleMouseOver } =
    useA11yHoverHandler();

  return (
    <li
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
      aria-label={`${level}: ${title}`}
      className={clsx(itemStyle, isActive && activeStyle, className)}
    >
      <Icon width={25} height={32} />
      <Link
        className={titleStyle}
        href={`/group/${groupId}/problem-list/${problemId}`}
      >
        <span className={textStyle}>{title}</span>
      </Link>
      <time dateTime={startDate} className={textStyle}>
        {format(startDate, "yyyy.MM.dd")}
      </time>
      <time dateTime={endDate} className={textStyle}>
        {format(endDate, "yyyy.MM.dd")}
      </time>
      <ProblemEdit problemId={problemId} isActive={isActive} />
    </li>
  );
};

export default PendingListItem;
