"use client";

import type { ProblemContent } from "@/app/api/problems/type";
import ProblemList from "@/shared/component/ProblemList";

type ProgressListProps = {
  data: ProblemContent[];
  isOwner: boolean;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  isExpired?: boolean;
};

const ProgressList = ({
  data,
  isOwner,
  isExpired = false,
}: ProgressListProps) => {
  return (
    <>
      <ProblemList>
        {data.map((item) => (
          <ProblemList.Item
            key={item.problemId}
            {...item}
            isOwner={isOwner}
            isExpired={isExpired}
          />
        ))}
      </ProblemList>
    </>
  );
};

export default ProgressList;
