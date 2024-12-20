import type { ProblemContent } from "@/app/api/problems/type";
import ProgressList from "@/view/group/problem-list";
import { containerStyle } from "@/view/group/problem-list/SolvedSection/index.css";
import { titleStyle } from "@/view/group/problem-list/index.css";

interface SolvedSectionProps {
  title: string;
  list: ProblemContent[];
  totalPages: number;
  currentPage: number;
  isOwner?: boolean;
  onPageChange: (page: number) => void;
}

const SolvedSection = ({
  title,
  list,
  totalPages,
  currentPage,
  isOwner = false,
  onPageChange,
}: SolvedSectionProps) => {
  return (
    <section>
      <div className={containerStyle}>
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

export default SolvedSection;
