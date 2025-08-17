import type { RankingContent } from "@/app/api/groups/type";
import AllRanking from "@/app/group/[groupId]/components/Ranking/AllRanking";
import EmptyRanking from "@/app/group/[groupId]/components/Ranking/EmptyRanking";
import TopRanking from "@/app/group/[groupId]/components/Ranking/TopRanking";
import TabGroup from "@/common/component/Tab";
import { rankingTabStyle } from "./index.css";

const Ranking = ({ rankingData }: { rankingData: RankingContent[] }) => {
  const isValid = rankingData.length > 0;

  return (
    <TabGroup.Tabs
      tag="section"
      variant="secondary"
      className={rankingTabStyle}
    >
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
