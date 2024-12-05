"use client";

import {
  useExpiredMySolutionsQuery,
  useInProgressMySolutionsQuery,
} from "@/app/[user]/my-solved/query";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import MySolvedSection from "@/view/group/my-solved/Section";
import { useState } from "react";

const MySolvedPage = () => {
  const [inProgressPage, setInProgressPage] = useState(1);
  const [expiredPage, setExpiredPage] = useState(1);

  const { content: inProgressData, totalPages: inProgressTotalPages } =
    useInProgressMySolutionsQuery({ page: inProgressPage - 1 });
  const { content: expiredData, totalPages: expiredTotalPages } =
    useExpiredMySolutionsQuery({ page: expiredPage - 1 });

  const handleInProgressPageChange = (page: number) => setInProgressPage(page);
  const handleExpiredPageChange = (page: number) => setExpiredPage(page);

  return (
    <main className={sidebarWrapper}>
      <Sidebar />
      <section style={{ width: "80%", marginTop: "4.8rem" }}>
        <MySolvedSection
          data={inProgressData}
          title="진행중인 문제"
          totalPages={inProgressTotalPages}
          currentPage={inProgressPage}
          onPageChange={handleInProgressPageChange}
        />
        <MySolvedSection
          data={expiredData}
          title="만료된 문제"
          totalPages={expiredTotalPages}
          currentPage={expiredPage}
          onPageChange={handleExpiredPageChange}
        />
      </section>
    </main>
  );
};

export default MySolvedPage;
