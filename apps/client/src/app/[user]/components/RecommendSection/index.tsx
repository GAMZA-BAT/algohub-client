"use client";

import SearchStudyInput from "@/app/[user]/components/SearchStudyInput";
import { useSearchStudyQueryObject } from "@/app/api/groups/query";

import RecommendList from "@/app/[user]/components/RecommendSection/RecommendList";
import Spinner from "@/common/component/Spinner";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import RecommendCard from "./RecommendCard";
import {
  recommendHeaderContentWrapper,
  recommendHeaderWrapper,
  recommendSectionWrapper,
  recommendStudyTitle,
  searchedStudyCountStyle,
} from "./index.css";

const RecommendStudySection = () => {
  const searchParam = useSearchParams();
  const searchPattern = searchParam.get("search") || "";

  const { data: studyList, isFetching } = useQuery(
    useSearchStudyQueryObject({ searchPattern }),
  );

  return (
    <section
      className={recommendSectionWrapper}
      aria-labelledby="recommend-title"
    >
      <div className={recommendHeaderWrapper}>
        <div className={recommendHeaderContentWrapper}>
          <h2 id="recommend-title" className={recommendStudyTitle}>
            {searchPattern ? "검색 결과" : "추천 스터디"}
          </h2>
          {searchPattern && (
            <div className={searchedStudyCountStyle}>
              {studyList?.content.length || 0}
            </div>
          )}
        </div>

        <SearchStudyInput />
      </div>

      {searchPattern ? (
        isFetching ? (
          <Spinner />
        ) : (
          <RecommendList studyList={studyList?.content || []} />
        )
      ) : (
        <RecommendCard
          name={"기본 스터디"}
          introduction={"기본 스터디 입니다."}
          groupImage={null}
        />
      )}
    </section>
  );
};

export default RecommendStudySection;
