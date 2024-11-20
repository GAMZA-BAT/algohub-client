"use client";
import type { RankingResponse } from "@/api/groups/type";
import Pagination from "@/shared/component/Pagination";
import RankList from "@/view/group/dashboard/Ranking/RankList";
import { allRankingWrapper } from "@/view/group/dashboard/Ranking/index.css";
import { useState } from "react";

const AllRanking = ({
  allRankingData,
}: { allRankingData: RankingResponse[] }) => {
  const [page, setPage] = useState(1);

  return (
    <>
      <ol className={allRankingWrapper}>
        {allRankingData.map((data, idx) => (
          <RankList key={idx} info={data} />
        ))}
      </ol>
      {allRankingData.length > 0 && (
        <Pagination
          totalPages={allRankingData.length / 4}
          currentPage={page}
          onPageChange={setPage}
        />
      )}
    </>
  );
};

export default AllRanking;
