"use client";

import type { ProblemContent } from "@/app/api/problems/type";
import { IcnSolved, IcnUnsolved } from "@/asset/svg";
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
import { useMemo } from "react";

type ProblemListItemProps = Omit<ProblemContent, "startDate"> & {
  isOwner?: boolean;
  className?: string;
  isExpired?: boolean;
  hasAnchor?: boolean;
};

const JSX_BY_STATUS = {
  wrong: (
    <input
      type="checkbox"
      disabled
      className={clsx(checkboxStyle, wrongCheckBoxStyle)}
    />
  ),
  unsolved: <IcnUnsolved className={checkboxStyle} />,
  solved: <IcnSolved className={checkboxStyle} />,
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
  hasAnchor = false,
  isOwner = false,
  isExpired = false,
}: ProblemListItemProps) => {
  const groupId = useGetGroupId();
  const Icon = getTierImage(level);

  const status = solved ? "solved" : isExpired ? "wrong" : "unsolved";

  const { isActive, handleBlur, handleFocus, handleMouseOut, handleMouseOver } =
    useA11yHoverHandler();

  const Title = useMemo(
    () =>
      hasAnchor ? (
        <span className={clsx(titleStyle, commonStyle)}>{title}</span>
      ) : (
        <Link
          className={titleStyle}
          href={`/group/${groupId}/problem-list/${problemId}`}
        >
          <span className={commonStyle}>{title}</span>
        </Link>
      ),
    [hasAnchor],
  );

  return (
    <li
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
      aria-label={`문제: ${title}`}
      className={clsx(itemStyle({ isActive }), className)}
    >
      <Icon width={25} height={32} />
      {Title}
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
