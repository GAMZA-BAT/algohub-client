import type { ProblemContent } from "@/app/api/problems/type";
import Pagination from "@/shared/component/Pagination";
import ProblemList from "@/shared/component/ProblemList";
import ProgressList from "@/view/group/problem-list";
import { titleStyle } from "@/view/group/problem-list/index.css";

interface ProblemSectionProps {
  title: string;
  list: ProblemContent[];
  totalPages: number;
  currentPage: number;
  isOwner?: boolean;
  onPageChange: (page: number) => void;
  isExpired?: boolean;
}

const ProblemSection = ({
  title,
  list,
  totalPages,
  currentPage,
  isOwner = false,
  onPageChange,
  isExpired = false,
}: ProblemSectionProps) => {
  return (
    <section>
      <div style={{ width: "100%", margin: "1.6rem 0" }}>
        <div>
          <h2 className={titleStyle}>{title}</h2>
        </div>
        <ProblemList.Header />

        {list?.length && (
          <ProgressList
            data={list}
            totalPages={totalPages}
            currentPage={currentPage}
            isOwner={isOwner}
            onPageChange={onPageChange}
            isExpired={isExpired}
          />
        )}

        <Pagination
          style={{ marginTop: "1.6rem" }}
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </section>
  );
};

export default ProblemSection;
