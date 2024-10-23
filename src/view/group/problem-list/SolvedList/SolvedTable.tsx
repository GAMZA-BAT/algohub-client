import type { SolutionByIdResponse } from "@/api/solution/type";
import Avatar from "@/common/component/Avatar";
import { tmpSolvedListData } from "@/shared/util/example";
import {
  SOLVED_TABLE_BODY,
  SOLVED_TABLE_HEADER,
  type SolvedHeader,
} from "@/view/group/problem-list/SolvedList/constant";
import {
  avatarStyle,
  nicknameStyle,
  tableStyle,
  tableWrapper,
  tdTextStyle,
  thTextStyle,
  trStyle,
} from "@/view/group/problem-list/SolvedList/index.css";

const SolvedTable = () => {
  const formatCellValue = (
    prop: keyof SolutionByIdResponse,
    value: string | number,
  ) => {
    switch (prop) {
      case "memoryUsage":
        return `${value}KB`;
      case "executionTime":
        return `${value}ms`;
      case "codeLength":
        return `${value}B`;
      default:
        return value;
    }
  };

  return (
    <div className={tableWrapper}>
      <table className={tableStyle}>
        <thead>
          <tr>
            {SOLVED_TABLE_HEADER.map((header: SolvedHeader, idx) => (
              <th className={thTextStyle({ variants: header })} key={idx}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tmpSolvedListData.map((row) => (
            <tr key={row.solutionId} className={trStyle}>
              {SOLVED_TABLE_BODY.map((prop) => {
                if (prop === "nickname") {
                  return (
                    <td key={prop} className={nicknameStyle}>
                      <Avatar
                        src={row.profileImage}
                        alt="회원 프로필"
                        size="small"
                        className={avatarStyle}
                      />
                      <p className={tdTextStyle}>{row[prop]}</p>
                    </td>
                  );
                }
                return (
                  <td key={prop} className={tdTextStyle}>
                    {formatCellValue(prop, row[prop])}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SolvedTable;
