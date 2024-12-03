import type { RankingContent } from "@/app/api/groups/type";
import RankingCard from "@/view/group/dashboard/Ranking/RankingCard";
import { topRankingWrapper } from "@/view/group/dashboard/Ranking/index.css";

const TopRanking = ({
  topRankingData,
}: { topRankingData: RankingContent[] }) => {
  return (
    <div className={topRankingWrapper}>
      {topRankingData.map((data, idx) => (
        <RankingCard key={idx} idx={idx} info={data} />
      ))}
    </div>
  );
};

export default TopRanking;
