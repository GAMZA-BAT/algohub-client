import type { RankingContent } from "@/app/api/groups/type";
import RankingCard from "@/app/group/[groupId]/components/Ranking/RankingCard";
import { topRankingWrapper } from "@/app/group/[groupId]/components/Ranking/index.css";

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
