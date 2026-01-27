"use client";
import type { ProblemContent } from "@/app/api/problems/type";
import { useSolutionListQueryObject } from "@/app/api/solutions/query";
import type { SolutionLanguage } from "@/app/api/solutions/type";
import ProblemInfo from "@/app/group/[groupId]/problem-list/components/SolvedList/ProblemInfo";
import SolvedTable from "@/app/group/[groupId]/problem-list/components/SolvedList/SolvedTable";
import {
  dividerStyle,
  headerContainer,
  headerTextStyle,
  solvedListWrapper,
} from "@/app/group/[groupId]/problem-list/components/SolvedList/index.css";
import { IcnBtnArrowLeft } from "@/asset/svg";
import { useDebounce } from "@/common/hook/useDebounce";
import { handleA11yClick } from "@/common/util/dom";
import SolvedFilterBar from "@/shared/component/SolvedFilterBar";
import {
  SOLVED_LANGUAGE,
  SOLVED_RESULT,
} from "@/shared/constant/solvedFilterKey";
import type { SolvedFilterType } from "@/shared/type/solvedFilter";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

type SolvedListProps = {
  problemId: number;
  groupId: string;
  problemInfo: ProblemContent;
};

const initOption = {
  solvedId: null,
  language: SOLVED_LANGUAGE[0],
  result: SOLVED_RESULT[0],
};

const SolvedList = ({ problemId, groupId, problemInfo }: SolvedListProps) => {
  const [option, setOption] = useState<SolvedFilterType>(initOption);
  const [nicknameFilter, setNicknameFilter] = useState("");
  const debouncedNicknameFilter = useDebounce(nicknameFilter, 200);

  const router = useRouter();

  const { data } = useQuery(
    useSolutionListQueryObject({
      problemId,
      language:
        option.language === "모든 언어"
          ? undefined
          : (option.language as SolutionLanguage),
      result: option.result === "모든 결과" ? undefined : option.result,
      nickname: debouncedNicknameFilter,
    }),
  );

  const handleChangeIdFilter = (value: string) => {
    setNicknameFilter(value);
  };

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
        <h1 className={headerTextStyle}>{`${problemInfo.title}`}</h1>
      </div>
      <ProblemInfo problemInfo={problemInfo} />
      <SolvedFilterBar
        option={option}
        idFilterValue={nicknameFilter}
        onChangeIdFilter={handleChangeIdFilter}
        onChangeOption={handleChangeOption}
        defaultValue={initOption}
      />
      <div className={dividerStyle} />
      <SolvedTable groupId={groupId} content={data?.content} />
    </div>
  );
};

export default SolvedList;
