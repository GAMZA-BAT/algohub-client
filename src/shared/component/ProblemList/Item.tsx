"use client";

import CheckBox from "@/common/component/CheckBox";
import { getTierImage } from "@/shared/component/ProblemList/img";
import {
  itemStyle,
  textStyle,
  titleStyle,
  wrongCheckBoxStyle,
} from "@/shared/component/ProblemList/index.css";
import type { Problem } from "@/shared/type";
import clsx from "clsx";
import { format } from "date-fns";
import Link from "next/link";

type ProblemListItemProps = Problem & { className?: string };

const JSX_BY_STATUS = {
  wrong: <input type="checkbox" disabled className={wrongCheckBoxStyle} />,
  unsolved: <CheckBox checked={false} style={{ cursor: "default" }} />,
  solved: <CheckBox checked={true} style={{ cursor: "default" }} />,
};

const ProblemListItem = ({
  id,
  title,
  date,
  tier,
  status,
  solved,
  total,
  className,
}: ProblemListItemProps) => {
  const Icon = getTierImage(tier);

  const accuracy = ((solved / total) * 100).toFixed(0);

  return (
    <li aria-label={`문제: ${title}`} className={clsx(itemStyle, className)}>
      <Icon width={25} height={32} />
      <Link className={`${titleStyle} ${textStyle}`} href={`/problem/${id}`}>
        <span className={textStyle}>{title}</span>
      </Link>
      <time dateTime={date} className={textStyle}>
        {format(date, "yyyy.MM.dd")}
      </time>
      <span className={textStyle}>{`${solved}/${total}`}</span>
      <span className={textStyle}>{`${accuracy}%`}</span>
      {JSX_BY_STATUS[status]}
    </li>
  );
};

export default ProblemListItem;
