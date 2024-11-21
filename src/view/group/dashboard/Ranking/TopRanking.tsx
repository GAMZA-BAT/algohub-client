import type { RankingItem } from "@/api/groups/type";
import RankingCard from "@/view/group/dashboard/Ranking/RankingCard";
import { topRankingWrapper } from "@/view/group/dashboard/Ranking/index.css";

const TopRanking = ({ topRankingData }: { topRankingData: RankingItem[] }) => {
  return (
    <div className={topRankingWrapper}>
      {topRankingData.map((data, idx) => (
        <RankingCard key={idx} idx={idx} info={data} />
      ))}
    </div>
  );
};

export default TopRanking;
