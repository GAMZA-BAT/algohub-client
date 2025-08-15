import { emptyRankingWrapper } from "@/app/group/[groupId]/components/Ranking/index.css";
import Empty from "@/shared/component/Empty";

const EmptyRanking = () => {
  return (
    <div className={emptyRankingWrapper}>
      <Empty guideText="아무도 문제를 풀지 않았어요." />
    </div>
  );
};

export default EmptyRanking;
