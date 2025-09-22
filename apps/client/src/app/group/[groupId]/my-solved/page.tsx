"use client";

import { getMySolutions } from "@/app/api/users";
import Sidebar from "@/common/component/Sidebar";
import { usePaginationQuery } from "@/shared/hook/usePaginationQuery";
import { usePvEvent } from "@/shared/hook/usePvEvent";
import { sidebarWrapper, solvedSectionStyle } from "@/styles/shared.css";
import MySolvedSection from "./components/Section";

const MyGroupSolvedPage = ({
  params: { groupId },
}: { params: { groupId: string } }) => {
  usePvEvent("group_my_solved_page_view", {
    group_id: groupId,
  });
  const {
    data: inProgressData,
    currentPage: inProgressPage,
    totalPages: inProgressTotalPages,
    setCurrentPage: setInProgressPage,
  } = usePaginationQuery({
    queryKey: ["inProgressMyGroupSolutions", +groupId],
    queryFn: (page: number) =>
      getMySolutions({
        page,
        size: 3,
        status: "IN_PROGRESS",
        groupId: +groupId,
      }),
  });
  const inProgressList = inProgressData?.content || [];

  const {
    data: expiredData,
    currentPage: expiredPage,
    totalPages: expiredTotalPages,
    setCurrentPage: setExpiredPage,
  } = usePaginationQuery({
    queryKey: ["expiredMyGroupSolutions", +groupId],
    queryFn: (page: number) =>
      getMySolutions({
        page,
        size: 3,
        status: "EXPIRED",
        groupId: +groupId,
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

export default MyGroupSolvedPage;
