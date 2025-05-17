import {
  headerFontStyle,
  headerWrapper,
} from "@/view/group/dashboard/SolvedStatusTable/index.css";

type SolvedStatusTableHeaderProps = {
  problemCount: number;
};

const SolvedStatusTableHeader = ({
  problemCount,
}: SolvedStatusTableHeaderProps) => {
  return (
    <tr className={headerWrapper}>
      <th className={headerFontStyle} style={{ width: "4rem" }}>
        랭킹
      </th>
      <th className={headerFontStyle}>아이디</th>
      <th className={headerFontStyle} style={{ marginRight: "6.6rem" }}>
        총점
      </th>
      {Array.from({ length: problemCount }).map((_, index) => (
        <th key={index} className={headerFontStyle}>
          문제{index + 1}
        </th>
      ))}
    </tr>
  );
};

export default SolvedStatusTableHeader;
