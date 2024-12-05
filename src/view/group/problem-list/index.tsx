"use client";

import type { ProblemContent } from "@/api/problems/type";
import {} from "@/app/group/[groupId]/problem-list/query";
import Pagination from "@/shared/component/Pagination";
import ProblemList from "@/shared/component/ProblemList";
import ProblemListHeader from "@/view/group/dashboard/ProblemListHeader";

type ProgressListProps = {
  data: ProblemContent[];
  isOwner: boolean;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const ProgressList = ({
  data,
  isOwner,
  totalPages,
  currentPage,
  onPageChange,
}: ProgressListProps) => {
  return (
    <>
      <ProblemListHeader />
      <ProblemList>
        {data.map((item) => (
          <ProblemList.Item key={item.problemId} {...item} isOwner={isOwner} />
        ))}
      </ProblemList>
      <Pagination
        style={{ marginTop: "1.6rem" }}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default ProgressList;
