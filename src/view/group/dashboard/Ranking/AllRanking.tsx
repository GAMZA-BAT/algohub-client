"use client";

import { getAllRanking } from "@/app/api/groups/ranking";
import Pagination from "@/shared/component/Pagination";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import { usePaginationQuery } from "@/shared/hook/usePaginationQuery";
import RankList from "@/view/group/dashboard/Ranking/RankList";
import { allRankingWrapper } from "@/view/group/dashboard/Ranking/index.css";

const AllRanking = () => {
  const groupId = useGetGroupId();

  const {
    data: allRankingData,
    currentPage,
    totalPages,
    setCurrentPage,
  } = usePaginationQuery({
    queryKey: ["ranking", +groupId],
    queryFn: (page) => getAllRanking(+groupId, page),
  });
  const allRankingList = allRankingData?.content;

  return (
    <>
      <ol className={allRankingWrapper}>
        {allRankingList?.map((data, idx) => (
          <RankList key={idx} info={data} />
        ))}
      </ol>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default AllRanking;
