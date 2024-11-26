"use client";

import type { ProblemContent } from "@/api/problems/type";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import { getTierImage } from "@/shared/util/img";
import {
  itemStyle,
  textStyle,
  titleStyle,
} from "@/view/group/problem-list/PendingList/index.css";
import clsx from "clsx";

import { format } from "date-fns";
import Link from "next/link";

export type PendingListItemProps = Pick<
  ProblemContent,
  "problemId" | "title" | "startDate" | "level"
> & {
  className?: string;
};

const PendingListItem = ({
  problemId,
  title,
  startDate,
  level,
  className,
}: PendingListItemProps) => {
  const Icon = getTierImage(level);
  const groupId = useGetGroupId();

  return (
    <li
      aria-label={`${level}: ${title}`}
      className={clsx(itemStyle, className)}
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
    </li>
  );
};

export default PendingListItem;
