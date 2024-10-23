import type { RankingResponse } from "@/api/group/type";
import RankingCard from "@/view/group/dashboard/Ranking/RankingCard";
import { topRankingWrapper } from "@/view/group/dashboard/Ranking/index.css";

const TopRanking = () => {
  const tmpData: RankingResponse = {
    userNickname: "달리는 지니",
    profileImage: "",
    rank: 1,
    solvedCount: 38,
  };
  return (
    <div className={topRankingWrapper}>
      {[tmpData, tmpData, tmpData].map((data, idx) => (
        <RankingCard key={idx} info={data} />
      ))}
    </div>
  );
};

export default TopRanking;
