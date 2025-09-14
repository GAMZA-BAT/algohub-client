import {
  solvedResultTagStyle,
  solvedResultTagTextStyle,
  wrongSolvedItemWrapper,
  wrongSolvedMetaStyle,
  wrongSolvedTitleContainer,
  wrongSolvedTitleStyle,
  wrongSolvedTitleWrapper,
} from "@/app/[user]/edge-case/components/WrongSolvedList/index.css";
import { IcnBtnArrowRight } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import { getTierImage } from "@/shared/util/img";
import Link from "next/link";

const WrongSolvedItem = () => {
  const TierIcon = getTierImage(1);

  return (
    <li className={wrongSolvedItemWrapper}>
      <Link href={`/problem/${1166}`}>
        <div className={wrongSolvedMetaStyle}>
          <Avatar size="xMini" alt="group image" role="img" />
          <div className={wrongSolvedTitleWrapper}>
            <div className={wrongSolvedTitleContainer}>
              <TierIcon width={16} height={16} />
              <h3 className={wrongSolvedTitleStyle}>1166번: 선물</h3>
            </div>
            <div className={solvedResultTagStyle}>
              <span className={solvedResultTagTextStyle}>시간 초과</span>
            </div>
          </div>
        </div>
        <IcnBtnArrowRight width={12} height={12} />
      </Link>
    </li>
  );
};

export default WrongSolvedItem;
