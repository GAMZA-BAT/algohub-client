"use client";

import { IcnEdit } from "@/asset/svg";
import CheckBox from "@/common/component/CheckBox";
import { getTierImage } from "@/shared/component/ProblemList/img";
import {
  checkboxStyle,
  editIconStyle,
  itemStyle,
  textStyle,
  titleStyle,
  wrongCheckBoxStyle,
} from "@/shared/component/ProblemList/index.css";
import type { Problem } from "@/shared/type";
import clsx from "clsx";
import { format } from "date-fns";
import Link from "next/link";
import { useState } from "react";

type ProblemListItemProps = Problem & {
  onEdit?: () => void;
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
  id,
  title,
  date,
  tier,
  status,
  solved,
  total,
  onEdit,
}: ProblemListItemProps) => {
  const [isHover, setIsHover] = useState(false);

  const Icon = getTierImage(tier);

  const accuracy = ((solved / total) * 100).toFixed(0);

  return (
    <li
      // biome-ignore lint/a11y/useKeyWithMouseEvents:
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      aria-label={`문제: ${title}`}
      className={itemStyle({ isHover })}
    >
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

      <IcnEdit
        onClick={onEdit}
        className={editIconStyle({ isHover })}
        width={24}
        height={24}
      />
    </li>
  );
};

export default ProblemListItem;
