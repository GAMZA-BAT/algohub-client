"use client";

import type { Problem } from "@/shared/type";
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
  Problem,
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

  return (
    <li
      aria-label={`${level}: ${title}`}
      className={clsx(itemStyle, className)}
    >
      <Icon width={25} height={32} />
      <Link className={titleStyle} href={`/problem/${problemId}`}>
        <span className={textStyle}>{title}</span>
      </Link>
      <time dateTime={startDate} className={textStyle}>
        {format(startDate, "yyyy.MM.dd")}
      </time>
    </li>
  );
};

export default PendingListItem;
