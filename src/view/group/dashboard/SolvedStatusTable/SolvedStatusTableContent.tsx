import { DataTable } from "@/shared/component/Table";
import { tableWrapper, wrapperStyle } from "./index.css";
import { useSolvedStatusTable } from "./provider";

const SolvedStatusTableContent = () => {
  const { col, row } = useSolvedStatusTable();

  return (
    <div className={tableWrapper}>
      {/* <table>
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
      </table> */}
      <DataTable
        rows={row}
        cols={col}
        wrapperClassName={wrapperStyle}
        tableClassName={tableWrapper}
      />
    </div>
  );
};

export default SolvedStatusTableContent;
