import type { SolutionsCurrentStatusResponse } from "@/app/api/type";
import SolvedStatusTable from "@/app/group/[groupId]/components/SolvedStatusSection/SolvedStatusTable";
import { SolvedStatusTableProvider } from "@/app/group/[groupId]/components/SolvedStatusSection/SolvedStatusTable/provider";
import { titleStyle } from "@/app/group/[groupId]/page.css";
import Empty from "@/shared/component/Empty";

type SolvedStatusSectionProps = {
  solutionsCurrentStatusInfo: SolutionsCurrentStatusResponse[];
};

const SolvedStatusSection = ({
  solutionsCurrentStatusInfo,
}: SolvedStatusSectionProps) => {
  const hasInProgressProblems =
    solutionsCurrentStatusInfo[0].problems.length > 0;

  return (
    <section>
      <h2 className={titleStyle}>진행 중인 풀이 현황</h2>
      {hasInProgressProblems ? (
        <SolvedStatusTableProvider value={solutionsCurrentStatusInfo}>
          <SolvedStatusTable />
        </SolvedStatusTableProvider>
      ) : (
        <Empty guideText="진행중인 문제가 없습니다." />
      )}
    </section>
  );
};

export default SolvedStatusSection;
