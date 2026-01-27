"use client";

import type { SolutionContent } from "@/app/api/solutions/type";
import {
  commentWrapperStyle,
  iconWrapperStyle,
  itemStyle,
  textStyle,
} from "@/app/group/[groupId]/my-solved/components/SolvedItem/index.css";
import { IcnMessage, IcnMessageDot } from "@/asset/svg";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import { getFormattedMemory } from "@/shared/util/byte";
import { getTierImage } from "@/shared/util/img";
import { useRouter } from "next/navigation";

const SolvedItem = ({ solutionInfo }: { solutionInfo: SolutionContent }) => {
  const {
    problemLevel,
    problemTitle,
    solutionId,
    solvedDateTime,
    result,
    memoryUsage,
    executionTime,
    language,
    codeLength,
    commentCount,
    groupId,
  } = solutionInfo;
  const pathGroupId = useGetGroupId();
  const LevelIcon = getTierImage(problemLevel);

  const router = useRouter();
  const { isActive, ...handlers } = useA11yHoverHandler();

  const handleClickItem = () => {
    router.push(`/group/${groupId || pathGroupId}/solved-detail/${solutionId}`);
  };

  return (
    <li
      // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole:
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClickItem()}
      onClick={handleClickItem}
      {...handlers}
      aria-label={`${problemLevel}: ${solutionId}`}
      className={itemStyle({ isActive })}
    >
      <div className={iconWrapperStyle}>
        <LevelIcon width={25} height={32} />
      </div>

      <span className={textStyle}>{problemTitle}</span>

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
