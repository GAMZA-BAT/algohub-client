import {
  solvedResultTagStyle,
  solvedResultTagTextStyle,
  wrongSolvedItemWrapper,
  wrongSolvedMetaStyle,
  wrongSolvedTitleContainer,
  wrongSolvedTitleStyle,
  wrongSolvedTitleWrapper,
} from "@/app/[user]/edge-case/components/WrongSolvedList/index.css";
import { SolutionContent } from "@/app/api/solutions/type";
import { IcnBtnArrowRight } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import { getTierImage } from "@/shared/util/img";
import Link from "next/link";

type WrongSolvedItemProps = {
  solutionInfo: SolutionContent;
};

const WrongSolvedItem = ({ solutionInfo }: WrongSolvedItemProps) => {
  const { problemId, problemTitle, problemLevel, result } = solutionInfo;
  const TierIcon = getTierImage(problemLevel);

  return (
    <li>
      <Link href={`/problem/${1166}`} className={wrongSolvedItemWrapper}>
        <div className={wrongSolvedMetaStyle}>
          <Avatar size="xMini" alt="group image" />
          <div className={wrongSolvedTitleWrapper}>
            <div className={wrongSolvedTitleContainer}>
              <TierIcon width={16} height={16} />
              <h3 className={wrongSolvedTitleStyle}>{`${problemId}번: ${problemTitle}`}</h3>
            </div>
            <div className={solvedResultTagStyle}>
              <span className={solvedResultTagTextStyle}>{result}</span>
            </div>
          </div>
        </div>
        <IcnBtnArrowRight width={12} height={12} />
      </Link>
    </li>
  );
};

export default WrongSolvedItem;
