"use client";
import type { SolutionResponse } from "@/api/solution/type";
import { IcnBtnArrowLeft } from "@/asset/svg";
import { handleA11yClick } from "@/common/util/dom";
import SolvedFilterBar from "@/shared/component/SolvedFilterBar";
import ProblemInfo from "@/view/group/problem-list/SolvedList/ProblemInfo";
import SolvedTable from "@/view/group/problem-list/SolvedList/SolvedTable";
import {
  dividerStyle,
  headerContainer,
  headerTextStyle,
  solvedListWrapper,
} from "@/view/group/problem-list/SolvedList/index.css";
import { useRouter } from "next/navigation";

type SolvedListProps = {
  groupId: string;
  problemId: string;
  content: SolutionResponse["content"];
};
const SolvedList = ({ groupId, problemId, content }: SolvedListProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
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
        <h1 className={headerTextStyle}>트리에서의 동적 계획법 {problemId}</h1>
      </div>
      <ProblemInfo />
      <SolvedFilterBar />
      <div className={dividerStyle} />
      <SolvedTable groupId={groupId} content={content} />
    </div>
  );
};

export default SolvedList;
