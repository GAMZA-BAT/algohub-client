"use client";

import SearchStudyInput from "@/app/[user]/components/SearchStudyInput";
import { useSearchStudyQueryObject } from "@/app/api/groups/query";
import imgEmpty from "@/asset/img/img_empty.png";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import RecommendCard from "./RecommendCard";
import {
  emptyGuideStyle,
  emptyWrapper,
  recommendHeaderContentWrapper,
  recommendHeaderWrapper,
  recommendSectionWrapper,
  recommendStudyTitle,
  searchedStudyCountStyle,
  studyListWrapper,
} from "./index.css";

const RecommendStudySection = () => {
  const searchParam = useSearchParams();
  const searchPattern = searchParam.get("search");

  const { data: studyList } = useQuery(
    useSearchStudyQueryObject({ searchPattern: searchPattern || "" }),
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
        <ul className={studyListWrapper}>
          {studyList?.content && studyList.content.length > 0 ? (
            studyList.content.map((study) => (
              <RecommendCard
                key={study.id}
                name={study.name}
                introduction={study.introduction}
                groupImage={study.groupImage}
              />
            ))
          ) : (
            <div className={emptyWrapper}>
              <Image
                src={imgEmpty}
                alt="검색 결과가 없을 때 이미지"
                width={369}
                height={192}
              />
              <p className={emptyGuideStyle}>검색 결과가 없습니다.</p>
            </div>
          )}
        </ul>
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
