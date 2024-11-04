"use client";

import { IcnMessage, IcnMessageDot } from "@/asset/svg";
import type { Solution } from "@/shared/type";
import { getFormattedMemory } from "@/shared/util/byte";
import { getTierImage } from "@/shared/util/img";
import {
  commentWrapperStyle,
  itemStyle,
  textStyle,
} from "@/view/group/my-solved/SolvedItem/index.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  const LevelIcon = getTierImage(level);

  const router = useRouter();

  const handleClickItem = () => {
    router.push(`/group/problem-list/${solutionId}`);
  };

  return (
    <li
      // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole:
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClickItem()}
      onClick={handleClickItem}
      aria-label={`${level}: ${solutionId}`}
      className={itemStyle}
    >
      <LevelIcon width={25} height={32} />
      <Link className={textStyle} href={`/problem/${solutionId}`}>
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
