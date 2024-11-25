import type { ProblemContent } from "@/api/problems/type";
import ProblemList from "@/shared/component/ProblemList";
import { getTierByLevel } from "@/shared/util/tier";

type ProblemInfoProps = {
  info: ProblemContent;
};

const ProblemInfo = ({ info }: ProblemInfoProps) => {
  return (
    <ProblemList>
      <ProblemList.Header />
      <ProblemList.Item
        problemId={info.problemId}
        title={info.title}
        endDate={info.endDate}
        level={getTierByLevel(info.level)}
        solved={info.solved}
        memberCount={info.memberCount}
        submitMemberCount={info.submitMemberCount}
        accuracy={info.accuracy}
      />
    </ProblemList>
  );
};

export default ProblemInfo;
