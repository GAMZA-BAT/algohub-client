import { SolutionsCurrentStatusResponse } from "@/app/api/type";
import { tdStyle } from "@/app/group/[groupId]/components/SolvedStatusSection/SolvedStatusTable/index.css";
import { TableDataType } from "@/shared/type/table";

const SOLVED_STATUS_BASE_COLUMNS: TableDataType<SolutionsCurrentStatusResponse>[] =
  [
    {
      key: "rank",
      Header: () => "랭킹",
      Cell: (data) => data.rank,
      width: 56,
    },
    {
      key: "total",
      Header: () => "총점",
      Cell: (data) => (
        <p className={tdStyle({ column: "totalScore" })}>
          {data.totalSubmissionCount === 0 ? "-" : data.totalSubmissionCount}/
          {data.totalPassedTime}
        </p>
      ),
      width: 84,
    },
    {
      key: "id",
      Header: () => "아이디",
      Cell: (data) => (
        <p className={tdStyle({ column: "nickname" })}>{data.nickname}</p>
      ),
      width: 150,
      align: "left",
    },
  ];

export default SOLVED_STATUS_BASE_COLUMNS;
