"use client";

import {
  getExpiredMySolutions,
  getInProgressMySolutions,
} from "@/app/api/users";
import Sidebar from "@/common/component/Sidebar";
import { usePaginationQuery } from "@/shared/hook/usePaginationQuery";
import { sidebarWrapper } from "@/styles/shared.css";
import MySolvedSection from "@/view/group/my-solved/Section";

const MySolvedPage = () => {
  const {
    data: inProgressData,
    currentPage: inProgressPage,
    totalPages: inProgressTotalPages,
    setCurrentPage: setInProgressPage,
  } = usePaginationQuery({
    queryKey: ["inProgressMySolutions"],
    queryFn: (page: number) =>
      getInProgressMySolutions({
        page,
        size: 3,
      }),
  });
  const inProgressList = inProgressData?.content || [];

  const {
    data: expiredData,
    currentPage: expiredPage,
    totalPages: expiredTotalPages,
    setCurrentPage: setExpiredPage,
  } = usePaginationQuery({
    queryKey: ["expiredMySolutions"],
    queryFn: (page: number) =>
      getExpiredMySolutions({
        page,
        size: 3,
      }),
  });
  const expiredList = expiredData?.content || [];

  return (
    <main className={sidebarWrapper}>
      <Sidebar />
      <section style={{ width: "80%", marginTop: "4.8rem" }}>
        <MySolvedSection
          data={inProgressList}
          title="진행중인 문제"
          totalPages={inProgressTotalPages}
          currentPage={inProgressPage}
          onPageChange={setInProgressPage}
        />
        <MySolvedSection
          data={expiredList}
          title="만료된 문제"
          totalPages={expiredTotalPages}
          currentPage={expiredPage}
          onPageChange={setExpiredPage}
        />
      </section>
    </main>
  );
};

export default MySolvedPage;
