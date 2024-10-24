"use client";
import type { RankingResponse } from "@/api/group/type";
import Pagination from "@/shared/component/Pagination";
import RankList from "@/view/group/dashboard/Ranking/RankList";
import { allRankingWrapper } from "@/view/group/dashboard/Ranking/index.css";
import { useState } from "react";

const AllRanking = () => {
  const tmpData: RankingResponse = {
    userNickname: "달리는 지니",
    profileImage: "",
    rank: 1,
    solvedCount: 38,
  };
  const [page, setPage] = useState(1);

  return (
    <>
      <ol className={allRankingWrapper}>
        {[tmpData, tmpData, tmpData].map((data, idx) => (
          <RankList key={idx} info={data} />
        ))}
      </ol>
      <Pagination totalPages={4} currentPage={page} onPageChange={setPage} />
    </>
  );
};

export default AllRanking;
