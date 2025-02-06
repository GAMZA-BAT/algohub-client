import Empty from "@/shared/component/Empty";
import { emptyRankingWrapper } from "@/view/group/dashboard/Ranking/index.css";

const EmptyRanking = () => {
  return (
    <Empty className={emptyRankingWrapper}>아무도 문제를 풀지 않았어요.</Empty>
  );
};

export default EmptyRanking;
