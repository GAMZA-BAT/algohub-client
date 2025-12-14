"use client";
import WrongSolvedItem from "@/app/[user]/edge-case/components/WrongSolvedList/WrongSolvedItem";
import {
  wrongSolvedListContainer,
  wrongSolvedListCountStyle,
  wrongSolvedListTitleStyle,
  wrongSolvedListTitleWrapper,
  wrongSolvedListWrapper,
} from "@/app/[user]/edge-case/components/WrongSolvedList/index.css";
import { useQuery } from "@tanstack/react-query";
import { useIncorrectMySolutionsQueryObject } from "@/app/api/users/query";

const WrongSolvedList = () => {
  const { data } = useQuery(useIncorrectMySolutionsQueryObject());

  if (!data) return null;

  return (
    <div className={wrongSolvedListContainer}>
      <div className={wrongSolvedListTitleWrapper}>
        <h2 className={wrongSolvedListTitleStyle}>내가 틀린 문제 리스트</h2>
        <span className={wrongSolvedListCountStyle}>{data.totalElements}</span>
      </div>
      <ul className={wrongSolvedListWrapper}>
        {data.content.map((item) => (
          <WrongSolvedItem key={item.solutionId} solutionInfo={item} />
        ))}
      </ul>
    </div>
  );
};

export default WrongSolvedList;
