import TabGroup from "@/common/component/Tab";
import AllRanking from "@/view/group/dashboard/Ranking/AllRanking";
import TopRanking from "@/view/group/dashboard/Ranking/TopRanking";

const Ranking = () => {
  return (
    <TabGroup.Tabs tag="section" variant="secondary">
      <TabGroup.TabList>
        <TabGroup.Tab tabId="1">TOP 랭킹</TabGroup.Tab>
        <TabGroup.Tab tabId="2">전체</TabGroup.Tab>
      </TabGroup.TabList>
      <TabGroup.TabPanels>
        <TopRanking />
        <AllRanking />
      </TabGroup.TabPanels>
    </TabGroup.Tabs>
  );
};

export default Ranking;
