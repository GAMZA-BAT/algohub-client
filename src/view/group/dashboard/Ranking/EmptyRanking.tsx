import { IcnEmpty } from "@/asset/svg";
import {
  emptyGuideStyle,
  emptyRankingWrapper,
} from "@/view/group/dashboard/Ranking/index.css";

const EmptyRanking = () => {
  return (
    <div className={emptyRankingWrapper}>
      <IcnEmpty width={100} height={52} />
      <p className={emptyGuideStyle}>아무도 문제를 풀지 않았어요.</p>
    </div>
  );
};

export default EmptyRanking;
