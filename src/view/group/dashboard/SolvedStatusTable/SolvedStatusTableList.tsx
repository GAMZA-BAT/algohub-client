import { SolutionsCurrentStatusResponse } from "@/app/api/type";
import {
  bodyWrapper,
  tdStyle,
} from "@/view/group/dashboard/SolvedStatusTable/index.css";
import Link from "next/link";

type SolvedStatusTableListProps = {
  solutionsCurrentStatus: SolutionsCurrentStatusResponse;
};

const SolvedStatusTableList = ({
  solutionsCurrentStatus: {
    rank,
    nickname,
    totalPassedTime,
    totalSubmissionCount,
    problems,
  },
}: SolvedStatusTableListProps) => {
  return (
    <tr className={bodyWrapper}>
      <td className={tdStyle({ column: "rank" })}>{rank}</td>
      <td className={tdStyle()}>{nickname}</td>
      <td
        className={tdStyle({ column: "totalScore" })}
      >{`${totalSubmissionCount}/${totalPassedTime}`}</td>
      {problems.map((problem, idx) =>
        problem.solved ? (
          <td className={tdStyle({ column: "solvedProblem" })} key={idx}>
            <Link href={`/problem/${problem.problemId}`}>
              {`${problem.submissionCount}/${problem.firstCorrectDuration}`}
            </Link>
          </td>
        ) : (
          <td className={tdStyle({ column: "unsolvedProblem" })} key={idx}>
            0/--
          </td>
        ),
      )}
    </tr>
  );
};

export default SolvedStatusTableList;
