import type { ProblemContent } from "@/app/api/problems/type";
import ProblemList from "@/shared/component/ProblemList";

type ProblemInfoProps = {
  problemInfo: ProblemContent;
};

const ProblemInfo = ({ problemInfo }: ProblemInfoProps) => {
  return (
    <ProblemList>
      <ProblemList.Header />
      <ProblemList.Item
        problemId={problemInfo.problemId}
        title={problemInfo.title}
        endDate={problemInfo.endDate}
        level={problemInfo.level}
        solved={problemInfo.solved}
        memberCount={problemInfo.memberCount}
        submitMemberCount={problemInfo.submitMemberCount}
        accuracy={problemInfo.accuracy}
        link={problemInfo.link}
      />
    </ProblemList>
  );
};

export default ProblemInfo;
