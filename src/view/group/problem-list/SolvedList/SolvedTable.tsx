"use client";

import type {
  SolutionByIdResponse,
  SolutionResponse,
} from "@/api/solution/type";
import Avatar from "@/common/component/Avatar";
import {
  SOLVED_TABLE_BODY,
  SOLVED_TABLE_HEADER,
  type SolvedHeader,
} from "@/view/group/problem-list/SolvedList/constant";
import {
  alignLeftStyle,
  tableStyle,
  tableWrapper,
  tbodyStyle,
  tdTextStyle,
  thTextStyle,
  theadStyle,
  trStyle,
} from "@/view/group/problem-list/SolvedList/index.css";
import { useRouter } from "next/navigation";

type SolvedTableProps = {
  groupId: string;
  content: SolutionResponse["content"];
};

const SolvedTable = ({ groupId, content }: SolvedTableProps) => {
  const router = useRouter();

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

  const handleGoDetail = (id: number) => {
    router.push(`/group/${groupId}/solved-detail/${id}`);
  };

  return (
    <div className={tableWrapper}>
      <table className={tableStyle}>
        <thead className={theadStyle}>
          <tr>
            {SOLVED_TABLE_HEADER.map((header: SolvedHeader, idx) => (
              <th className={thTextStyle({ variants: header })} key={idx}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={tbodyStyle}>
          {content.map((row) => (
            <tr
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && handleGoDetail(row.solutionId)
              }
              key={row.solutionId}
              className={trStyle}
              onClick={() => handleGoDetail(row.solutionId)}
            >
              {SOLVED_TABLE_BODY.map((prop) => {
                if (prop === "profileImage") {
                  return (
                    <td key={prop} className={tdTextStyle}>
                      <Avatar src={row[prop]} alt="회원 프로필" size="small" />
                    </td>
                  );
                }
                return (
                  <td
                    key={prop}
                    className={
                      prop === "nickname"
                        ? `${alignLeftStyle} ${tdTextStyle}`
                        : tdTextStyle
                    }
                  >
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
