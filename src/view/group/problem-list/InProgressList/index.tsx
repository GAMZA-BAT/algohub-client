"use client";

import Pagination from "@/shared/component/Pagination";
import ProblemList from "@/shared/component/ProblemList";
import type { Problem } from "@/shared/type";
import ProblemListHeader from "@/view/group/dashboard/ProblemListHeader";
import { titleStyle } from "@/view/group/problem-list/index.css";

type InProgressListProps = {
  data: Problem[];
};
const InProgressList = ({ data }: InProgressListProps) => {
  return (
    <div style={{ width: "100%", margin: "1.6rem 0" }}>
      <h2 className={titleStyle}>진행중인 문제</h2>
      <ProblemListHeader />
      <ProblemList>
        {data.map((item) => (
          <ProblemList.Item key={item.problemId} {...item} />
        ))}
      </ProblemList>

      <Pagination
        style={{ marginTop: "1.6rem" }}
        totalPages={10}
        currentPage={1}
        onPageChange={() => {}}
      />
    </div>
  );
};

export default InProgressList;
