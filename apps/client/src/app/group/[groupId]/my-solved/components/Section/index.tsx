"use client";

import type { SolutionContent } from "@/app/api/solutions/type";
import Header from "@/app/group/[groupId]/my-solved/components/Header";
import {
  listStyle,
  sectionStyle,
  titleStyle,
} from "@/app/group/[groupId]/my-solved/components/Section/index.css";
import SolvedItem from "@/app/group/[groupId]/my-solved/components/SolvedItem";
import Pagination from "@/shared/component/Pagination";

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
