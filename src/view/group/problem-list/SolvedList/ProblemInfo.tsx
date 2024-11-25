import type { ProblemContent } from "@/api/problems/type";
import ProblemList from "@/shared/component/ProblemList";

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
        level={info.level}
        solved={info.solved}
        memberCount={info.memberCount}
        submitMemberCount={info.submitMemberCount}
        accuracy={info.accuracy}
        link={info.link}
      />
    </ProblemList>
  );
};

export default ProblemInfo;
