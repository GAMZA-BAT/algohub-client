import type { RankingResponse } from "@/api/groups/type";
import TabGroup from "@/common/component/Tab";
import AllRanking from "@/view/group/dashboard/Ranking/AllRanking";
import EmptyRanking from "@/view/group/dashboard/Ranking/EmptyRanking";
import TopRanking from "@/view/group/dashboard/Ranking/TopRanking";

const Ranking = ({ rankingData }: { rankingData: RankingResponse[] }) => {
  const isEmpty = rankingData.length < 1;
  return (
    <TabGroup.Tabs tag="section" variant="secondary">
      <TabGroup.TabList>
        <TabGroup.Tab tabId="1">TOP 랭킹</TabGroup.Tab>
        <TabGroup.Tab tabId="2">전체</TabGroup.Tab>
      </TabGroup.TabList>
      <TabGroup.TabPanels>
        {isEmpty ? (
          <EmptyRanking />
        ) : (
          <TopRanking topRankingData={rankingData.slice(0, 3)} />
        )}
        {isEmpty ? (
          <EmptyRanking />
        ) : (
          <AllRanking allRankingData={rankingData} />
        )}
      </TabGroup.TabPanels>
    </TabGroup.Tabs>
  );
};

export default Ranking;
