"use client";
import type { ProblemContent } from "@/app/api/problems/type";
import { getSolutionList } from "@/app/api/solutions";
import type { SolutionLanguage } from "@/app/api/solutions/type";
import { IcnBtnArrowLeft } from "@/asset/svg";
import { handleA11yClick } from "@/common/util/dom";
import SolvedFilterBar from "@/shared/component/SolvedFilterBar";
import {
  SOLVED_LANGUAGE,
  SOLVED_RESULT,
} from "@/shared/constant/solvedFilterKey";
import type { SolvedFilterType } from "@/shared/type/solvedFilter";
import ProblemInfo from "@/view/group/problem-list/SolvedList/ProblemInfo";
import SolvedTable from "@/view/group/problem-list/SolvedList/SolvedTable";
import {
  dividerStyle,
  headerContainer,
  headerTextStyle,
  solvedListWrapper,
} from "@/view/group/problem-list/SolvedList/index.css";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

type SolvedListProps = {
  problemId: number;
  groupId: string;
  problemInfo: ProblemContent;
};

const initOption = {
  problemId: 0,
  solvedId: null,
  language: SOLVED_LANGUAGE[0],
  result: SOLVED_RESULT[0],
};

const SolvedList = ({ problemId, groupId, problemInfo }: SolvedListProps) => {
  const [option, setOption] = useState<SolvedFilterType>(initOption);

  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["solution", option],
    queryFn: () =>
      getSolutionList({
        problemId,
        language:
          option.language === "모든 언어"
            ? undefined
            : (option.language as SolutionLanguage),
        result: option.result === "모든 결과" ? undefined : option.result,
      }),
  });

  const handleChangeOption = (option: SolvedFilterType) => {
    setOption(option);
  };

  const handleBack = () => {
    router.push(`/group/${groupId}/problem-list`);
  };

  return (
    <div className={solvedListWrapper}>
      <div
        className={headerContainer}
        onClick={handleBack}
        onKeyDown={handleA11yClick(handleBack)}
        aria-label="뒤로 가기"
      >
        <IcnBtnArrowLeft width={32} height={32} />
        <h1
          className={headerTextStyle}
        >{`${problemInfo.title} ${problemInfo.problemId}`}</h1>
      </div>
      <ProblemInfo problemInfo={problemInfo} />
      <SolvedFilterBar
        option={option}
        onChange={handleChangeOption}
        defaultValue={initOption}
      />
      <div className={dividerStyle} />
      <SolvedTable groupId={groupId} content={data?.content} />
    </div>
  );
};

export default SolvedList;
