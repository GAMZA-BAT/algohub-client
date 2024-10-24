"use client";

import Pagination from "@/shared/component/Pagination";
import type { Solution } from "@/shared/type";
import Header from "@/view/group/my-solved/Header";
import {
  listStyle,
  sectionStyle,
  titleStyle,
} from "@/view/group/my-solved/Section/index.css";
import SolvedItem from "@/view/group/my-solved/SolvedItem";

type MySolvedSection = {
  title: string;
  data: Solution[];
};

const MySolvedSection = ({ title, data }: MySolvedSection) => {
  return (
    <div className={sectionStyle}>
      <h2 className={titleStyle}>{title}</h2>
      <Header />
      <ul className={listStyle}>
        {data.map((item) => (
          <SolvedItem key={item.solutionId} {...item} />
        ))}
      </ul>
      <Pagination totalPages={10} currentPage={10} onPageChange={() => {}} />
    </div>
  );
};

export default MySolvedSection;
