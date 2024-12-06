"use client";

import type { SolutionContent } from "@/api/solutions/type";
import Pagination from "@/shared/component/Pagination";
import Header from "@/view/group/my-solved/Header";
import {
  listStyle,
  sectionStyle,
  titleStyle,
} from "@/view/group/my-solved/Section/index.css";
import SolvedItem from "@/view/group/my-solved/SolvedItem";

type MySolvedSectionProps = {
  title: string;
  data: SolutionContent[];
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const MySolvedSection = ({
  title,
  data,
  totalPages,
  currentPage,
  onPageChange,
}: MySolvedSectionProps) => {
  return (
    <div className={sectionStyle}>
      <h2 className={titleStyle}>{title}</h2>
      <Header />
      <ul className={listStyle}>
        {data.map((item) => (
          <SolvedItem key={item.solutionId} solutionInfo={item} />
        ))}
      </ul>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default MySolvedSection;
