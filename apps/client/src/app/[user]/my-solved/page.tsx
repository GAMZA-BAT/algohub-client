"use client";
import {
  useExpiredMySolutionsQueryObject,
  useInProgressMySolutionsQueryObject,
} from "@/app/api/users/query";
import MySolvedSection from "@/app/group/[groupId]/my-solved/components/Section";
import Sidebar from "@/common/component/Sidebar";
import { usePaginationQuery } from "@/shared/hook/usePaginationQuery";
import { usePvEvent } from "@/shared/hook/usePvEvent";
import { sidebarWrapper, solvedSectionStyle } from "@/styles/shared.css";
import { useParams } from "next/navigation";

const MySolvedPage = () => {
  const params = useParams();
  const userId = Array.isArray(params.user) ? params.user[0] : params.user;

  usePvEvent("user_my_solved_page_view", {
    user_id: userId ?? "",
  });
  const {
    data: inProgressData,
    currentPage: inProgressPage,
    totalPages: inProgressTotalPages,
    setCurrentPage: setInProgressPage,
  } = usePaginationQuery({
    ...useInProgressMySolutionsQueryObject(),
    searchParam: "inProgress",
  });
  const inProgressList = inProgressData?.content || [];

  const {
    data: expiredData,
    currentPage: expiredPage,
    totalPages: expiredTotalPages,
    setCurrentPage: setExpiredPage,
  } = usePaginationQuery({
    ...useExpiredMySolutionsQueryObject(),
    searchParam: "expired",
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
