"use client";
import { getAllRanking } from "@/app/api/groups/ranking";
import type { RankingContent } from "@/app/api/groups/type";
import TabGroup from "@/common/component/Tab";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import AllRanking from "@/view/group/dashboard/Ranking/AllRanking";
import EmptyRanking from "@/view/group/dashboard/Ranking/EmptyRanking";
import TopRanking from "@/view/group/dashboard/Ranking/TopRanking";
import { useQueryClient } from "@tanstack/react-query";

const Ranking = ({ rankingData }: { rankingData: RankingContent[] }) => {
  const isValid = rankingData.length > 0;

  const queryClient = useQueryClient();
  const groupId = useGetGroupId();
  const prefetchRanking = async () => {
    await queryClient.prefetchQuery({
      queryKey: ["ranking", +groupId],
      queryFn: () => getAllRanking(+groupId, 0),
    });
  };

  return (
    <TabGroup.Tabs
      tag="section"
      variant="secondary"
      style={{ height: "32.4rem" }}
    >
      <TabGroup.TabList>
        <TabGroup.Tab tabId="1" indicatorId="ranking">
          TOP 랭킹
        </TabGroup.Tab>
        <TabGroup.Tab
          tabId="2"
          indicatorId="ranking"
          onMouseEnter={prefetchRanking}
        >
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
