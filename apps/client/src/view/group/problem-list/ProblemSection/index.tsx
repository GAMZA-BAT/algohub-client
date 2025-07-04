import type { ProblemContent } from "@/app/api/problems/type";
import Pagination from "@/shared/component/Pagination";
import ProblemList from "@/shared/component/ProblemList";
import { fullWidthStyle, topBottomMarginStyle } from "@/styles/shared.css";
import ProgressList from "@/view/group/problem-list";
import { titleStyle } from "@/view/group/problem-list/index.css";
import clsx from "clsx";
import { marginTopStyle } from "../PendingList/index.css";

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
      <div className={clsx(fullWidthStyle, topBottomMarginStyle)}>
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
          className={marginTopStyle}
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </section>
  );
};

export default ProblemSection;
