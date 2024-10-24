"use client";

import Pagination from "@/shared/component/Pagination";
import ProblemList from "@/shared/component/ProblemList";
import type { Problem } from "@/shared/type";
import ProblemListHeader from "@/view/group/dashboard/ProblemListHeader";
import { titleStyle } from "@/view/group/problem-list/index.css";

type ExpiredListProps = {
  data: Problem[];
};

const ExpiredList = ({ data }: ExpiredListProps) => {
  return (
    <div>
      <h2 className={titleStyle}>만료된 문제</h2>
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

export default ExpiredList;
