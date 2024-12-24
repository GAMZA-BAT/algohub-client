import type { ProblemContent } from "@/app/api/problems/type";
import ProgressList from "@/view/group/problem-list";
import { titleStyle } from "@/view/group/problem-list/index.css";

interface ProblemSectionProps {
  title: string;
  list: ProblemContent[];
  totalPages: number;
  currentPage: number;
  isOwner?: boolean;
  onPageChange: (page: number) => void;
}

const ProblemSection = ({
  title,
  list,
  totalPages,
  currentPage,
  isOwner = false,
  onPageChange,
}: ProblemSectionProps) => {
  return (
    <section>
      <div style={{ width: "100%", margin: "1.6rem 0" }}>
        <div>
          <h2 className={titleStyle}>{title}</h2>
        </div>
        {list?.length && (
          <ProgressList
            data={list}
            totalPages={totalPages}
            currentPage={currentPage}
            isOwner={isOwner}
            onPageChange={onPageChange}
          />
        )}
      </div>
    </section>
  );
};

export default ProblemSection;
