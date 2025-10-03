"use client";

import SearchStudyInput from "@/app/[user]/components/SearchStudyInput";
import { useSearchStudyQueryObject } from "@/app/api/groups/query";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import RecommendCard from "./RecommendCard";
import { recommendHeaderWrapper, recommendSectionWrapper, recommendStudyTitle, studyListWrapper } from "./index.css";

const RecommendStudySection = () => {
  const searchParam = useSearchParams();
  const searchPattern = searchParam.get("search");

  const { data: studyList } = useQuery(useSearchStudyQueryObject({ searchPattern: searchPattern || "" }));

  return (
    <section className={recommendSectionWrapper} aria-labelledby="recommend-title">
      <div className={recommendHeaderWrapper}>
        <h2 id="recommend-title" className={recommendStudyTitle}>
          추천 스터디
        </h2>
        <SearchStudyInput />
      </div>

      <ul className={studyListWrapper}>
        {studyList?.content?.length && studyList.content.length > 0 ? (
          studyList.content.map((study) => (
            <RecommendCard
              key={study.id}
              name={study.name}
              introduction={study.introduction}
              groupImage={study.groupImage}
            />
          ))
        ) : (
          <RecommendCard name={"기본 스터디"} introduction={"기본 스터디 입니다."} groupImage={null} />
        )}
      </ul>
    </section>
  );
};

export default RecommendStudySection;
