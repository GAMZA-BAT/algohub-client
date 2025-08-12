"use client";

import {
  getExpiredMySolutions,
  getInProgressMySolutions,
} from "@/app/api/users";
import { userQueryKey } from "@/app/api/users/query";
import Sidebar from "@/common/component/Sidebar";
import { usePaginationQuery } from "@/shared/hook/usePaginationQuery";
import { sidebarWrapper, solvedSectionStyle } from "@/styles/shared.css";
import MySolvedSection from "@/view/group/my-solved/Section";

const MySolvedPage = () => {
  const {
    data: inProgressData,
    currentPage: inProgressPage,
    totalPages: inProgressTotalPages,
    setCurrentPage: setInProgressPage,
  } = usePaginationQuery({
    queryKey: userQueryKey.inProgressSolutions({}),
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
    queryKey: userQueryKey.expiredSolutions({}),
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
      <section className={solvedSectionStyle}>
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
