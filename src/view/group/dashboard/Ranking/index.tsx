import type { RankingResponse } from "@/api/groups/type";
import TabGroup from "@/common/component/Tab";
import AllRanking from "@/view/group/dashboard/Ranking/AllRanking";
import TopRanking from "@/view/group/dashboard/Ranking/TopRanking";

const Ranking = ({ rankingData }: { rankingData: RankingResponse[] }) => {
  return (
    <TabGroup.Tabs tag="section" variant="secondary">
      <TabGroup.TabList>
        <TabGroup.Tab tabId="1">TOP 랭킹</TabGroup.Tab>
        <TabGroup.Tab tabId="2">전체</TabGroup.Tab>
      </TabGroup.TabList>
      <TabGroup.TabPanels>
        <TopRanking topRankingData={rankingData.slice(0, 3)} />
        <AllRanking />
      </TabGroup.TabPanels>
    </TabGroup.Tabs>
  );
};

export default Ranking;
