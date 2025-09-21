"use client";

import SearchStudyInput from "@/app/[user]/components/SearchStudyInput";
import { useSearchStudyQueryObject } from "@/app/api/groups/query";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import RecommendCard from "./RecommendCard";
import {
  recommendHeaderWrapper,
  recommendSectionWrapper,
  recommendStudyTitle,
} from "./index.css";

const RecommendStudySection = () => {
  const searchParam = useSearchParams();
  const searchPattern = searchParam.get("search") || "";

  const { data: studyList } = useQuery(
    useSearchStudyQueryObject({ searchPattern }),
  );

  return (
    <section
      className={recommendSectionWrapper}
      aria-labelledby="recommend-title"
    >
      <div className={recommendHeaderWrapper}>
        <h2 id="recommend-title" className={recommendStudyTitle}>
          추천 스터디
        </h2>
        <SearchStudyInput />
      </div>
      {studyList?.content ? (
        studyList.content.map((study) => <RecommendCard key={study.id} />)
      ) : (
        <RecommendCard />
      )}
    </section>
  );
};

export default RecommendStudySection;
