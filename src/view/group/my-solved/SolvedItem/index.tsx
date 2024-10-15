import { IcnMessage, IcnMessageDot } from "@/asset/svg";
import type { Solution } from "@/shared/type";
import { getFormattedMemory } from "@/shared/util/byte";
import { getTierImage } from "@/shared/util/img";
import {
  commentWrapperStyle,
  itemStyle,
  textCommonStyle,
  textStyle,
  titleStyle,
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
  const LevelIcon = getTierImage(level);

  const dataClassName = `${textStyle} ${textCommonStyle}`;

  return (
    <li aria-label={`문제 ${solutionId}`} className={itemStyle}>
      <LevelIcon style={{ placeSelf: "center" }} width={25} height={32} />
      <Link
        className={`${titleStyle} ${textCommonStyle}`}
        href={`/problem/${solutionId}`}
      >
        {title}
      </Link>
      <time className={dataClassName}>{solvedDateTime}</time>

      {[
        getFormattedMemory(memoryUsage),
        `${executionTime}ms`,
        language,
        codeLength,
        result,
      ].map((item, index) => (
        <p key={index} className={dataClassName}>
          {item}
        </p>
      ))}

      <div className={commentWrapperStyle}>
        {commentCount > 0 ? (
          <IcnMessageDot width={24} height={24} />
        ) : (
          <IcnMessage width={24} height={24} />
        )}
        <p className={dataClassName}>{commentCount}</p>
      </div>
    </li>
  );
};

export default SolvedItem;
