import Empty from "@/shared/component/Empty";
import { emptyRankingWrapper } from "@/view/group/dashboard/Ranking/index.css";

const EmptyRanking = () => {
  return (
    <div className={emptyRankingWrapper}>
      <Empty guideText="아무도 문제를 풀지 않았어요." />
    </div>
  );
};

export default EmptyRanking;
