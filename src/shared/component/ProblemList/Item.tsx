"use client";

import { IcnEdit } from "@/asset/svg";
import CheckBox from "@/common/component/CheckBox";
import {
  checkboxStyle,
  editIconStyle,
  itemStyle,
  textStyle,
  titleStyle,
  wrongCheckBoxStyle,
} from "@/shared/component/ProblemList/index.css";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import type { Problem } from "@/shared/type";
import { getTierImage } from "@/shared/util/img";
import clsx from "clsx";

import { format } from "date-fns";
import Link from "next/link";

type ProblemListItemProps = Problem & {
  onEdit?: () => void;
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
  onEdit,
  isOwner,
}: ProblemListItemProps) => {
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
      className={itemStyle({ isActive: isOwner ? isActive : false })}
    >
      <Icon width={25} height={32} />
      <Link
        className={`${titleStyle} ${textStyle}`}
        href={`/problem/${problemId}`}
      >
        <span className={textStyle}>{title}</span>
      </Link>
      <time dateTime={endDate} className={textStyle}>
        {format(endDate, "yyyy.MM.dd")}
      </time>
      <span className={textStyle}>{`${submitMemberCount}/${memberCount}`}</span>
      <span className={textStyle}>{accuracy}</span>
      {JSX_BY_STATUS[status]}

      {isOwner && (
        <IcnEdit
          onClick={onEdit}
          className={editIconStyle({ isActive })}
          width={24}
          height={24}
        />
      )}
    </li>
  );
};

export default ProblemListItem;
