import type { RankingContent } from "@/api/groups/type";
import TabGroup from "@/common/component/Tab";
import AllRanking from "@/view/group/dashboard/Ranking/AllRanking";
import EmptyRanking from "@/view/group/dashboard/Ranking/EmptyRanking";
import TopRanking from "@/view/group/dashboard/Ranking/TopRanking";

const Ranking = ({ rankingData }: { rankingData: RankingContent[] }) => {
  const isValid = rankingData.length > 0;

  return (
    <TabGroup.Tabs tag="section" variant="secondary">
      <TabGroup.TabList>
        <TabGroup.Tab tabId="1" indicatorId="ranking">
          TOP 랭킹
        </TabGroup.Tab>
        <TabGroup.Tab tabId="2" indicatorId="ranking">
          전체
        </TabGroup.Tab>
      </TabGroup.TabList>
      <TabGroup.TabPanels>
        {isValid ? (
          <TopRanking topRankingData={rankingData} />
        ) : (
          <EmptyRanking />
        )}
        {isValid ? <AllRanking /> : <EmptyRanking />}
      </TabGroup.TabPanels>
    </TabGroup.Tabs>
  );
};

export default Ranking;
