"use client";
import { IcnMessage, IcnMessageDot } from "@/asset/svg";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import type { Solution } from "@/shared/type";
import { getFormattedMemory } from "@/shared/util/byte";
import { getTierImage } from "@/shared/util/img";
import {
  commentWrapperStyle,
  itemStyle,
  textStyle,
} from "@/view/group/my-solved/SolvedItem/index.css";
import Link from "next/link";

const SolvedItem = ({
  solutionId,
  level,
  title,
  solvedDateTime,
  result,
  memoryUsage = 0,
  executionTime,
  language,
  codeLength,
  commentCount = 0,
}: Solution) => {
  const groupId = useGetGroupId();
  const LevelIcon = getTierImage(level);

  return (
    <li aria-label={`${level}: ${solutionId}`} className={itemStyle}>
      <LevelIcon width={25} height={32} />
      <Link
        className={textStyle}
        href={`/group/${groupId}/problem-list/${solutionId}`}
      >
        {title}
      </Link>
      <time dateTime={solvedDateTime} className={textStyle}>
        {solvedDateTime}
      </time>

      {[
        getFormattedMemory(memoryUsage),
        `${executionTime}ms`,
        language,
        codeLength,
        result,
      ].map((item, index) => (
        <p key={index} className={textStyle}>
          {item}
        </p>
      ))}

      <div className={commentWrapperStyle}>
        {commentCount > 0 ? (
          <IcnMessageDot width={24} height={24} />
        ) : (
          <IcnMessage width={24} height={24} />
        )}
        <p className={textStyle}>{commentCount}</p>
      </div>
    </li>
  );
};

export default SolvedItem;
