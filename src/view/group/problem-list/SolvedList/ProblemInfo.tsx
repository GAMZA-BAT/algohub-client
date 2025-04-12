import type { ProblemContent } from "@/app/api/problems/type";
import ProblemList from "@/shared/component/ProblemList";
import Link from "next/link";

type ProblemInfoProps = {
  problemInfo: ProblemContent;
};

const ProblemInfo = ({ problemInfo }: ProblemInfoProps) => {
  return (
    <ProblemList>
      <ProblemList.Header />
      <Link href={problemInfo.link} target="_blank" rel="noopener noreferrer">
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
          hasAnchor={false}
        />
      </Link>
    </ProblemList>
  );
};

export default ProblemInfo;
