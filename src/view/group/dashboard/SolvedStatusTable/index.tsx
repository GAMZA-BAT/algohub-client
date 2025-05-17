"use client";
import { SolutionsCurrentStatusResponse } from "@/app/api/type";
import SolvedStatusTableHeader from "@/view/group/dashboard/SolvedStatusTable/SolvedStatusTableHeader";
import { tableWrapper } from "./index.css";
import SolvedStatusTableList from "@/view/group/dashboard/SolvedStatusTable/SolvedStatusTableList";
type SolvedStatusTableProps = {
  data: SolutionsCurrentStatusResponse[];
};

const SolvedStatusTable = ({ data }: SolvedStatusTableProps) => {
  console.info({ data });
  return (
    <div className={tableWrapper}>
      <table>
        <thead>
          <SolvedStatusTableHeader problemCount={data[0].problems.length} />
        </thead>
        <tbody>
          {data.map((item) => (
            <SolvedStatusTableList
              key={item.rank}
              solutionsCurrentStatus={item}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SolvedStatusTable;
