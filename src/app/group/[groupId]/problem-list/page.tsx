"use client";

import { getExpiredProblems, getInProgressProblems } from "@/app/api/problems";
import { useGroupRoleQuery } from "@/app/group/[groupId]/query";
import CheckBox from "@/common/component/CheckBox";
import Sidebar from "@/common/component/Sidebar";
import TabGroup from "@/common/component/Tab";
import { usePaginationQuery } from "@/shared/hook/usePaginationQuery";
import { sidebarWrapper } from "@/styles/shared.css";
import PendingList from "@/view/group/problem-list/PendingList";
import PendingListHeader from "@/view/group/problem-list/PendingListHeader";
import ProblemSection from "@/view/group/problem-list/ProblemSection";
import ProblemSidebar from "@/view/group/problem-list/ProblemSidebar";
import {
  checkBoxStyle,
  pageStyle,
  titleStyle,
  unSolvedFilterTextStyle,
} from "@/view/group/problem-list/index.css";
import { useState } from "react";

const ProblemListPage = ({
  params: { groupId },
}: { params: { groupId: string } }) => {
  const { data: role } = useGroupRoleQuery(+groupId);
  const isOwner = role !== "PARTICIPANT";

  const [isUnsolvedOnlyChecked, setIsUnsolvedOnlyChecked] = useState(false);

  const {
    data: inProgressData,
    currentPage: inProgressPage,
    totalPages: inProgressTotalPages,
    setCurrentPage: setInProgressPage,
  } = usePaginationQuery({
    queryKey: [
      "inProgressProblem",
      groupId,
      { unsolved: isUnsolvedOnlyChecked },
    ],
    queryFn: (page) =>
      getInProgressProblems({
        groupId: +groupId,
        page,
        size: 3,
        isUnsolvedOnly: isUnsolvedOnlyChecked,
      }),
  });
  const inProgressList = inProgressData?.content;

  const {
    data: expiredData,
    currentPage: expiredPage,
    totalPages: expiredTotalPages,
    setCurrentPage: setExpiredPage,
  } = usePaginationQuery({
    queryKey: ["expiredProblem", groupId],
    queryFn: (page) =>
      getExpiredProblems({
        groupId: +groupId,
        page,
        size: 3,
      }),
  });
  const expiredList = expiredData?.content;

  return (
    <main className={sidebarWrapper}>
      <Sidebar>{isOwner && <ProblemSidebar />}</Sidebar>
      <div className={pageStyle}>
        {isOwner ? (
          <TabGroup.Tabs variant="secondary">
            <TabGroup.TabList>
              <TabGroup.Tab tabId="1" indicatorId="problemlist">
                진행중인 문제·만료된 문제
              </TabGroup.Tab>
              <TabGroup.Tab tabId="2" indicatorId="problemlist">
                대기중인 문제
              </TabGroup.Tab>
            </TabGroup.TabList>
            <TabGroup.TabPanels>
              <div>
                <div className={checkBoxStyle}>
                  <p className={unSolvedFilterTextStyle}>Unsolved-Only</p>
                  <CheckBox
                    checked={isUnsolvedOnlyChecked}
                    onChange={() => setIsUnsolvedOnlyChecked((prev) => !prev)}
                  />
                </div>
                <>
                  <ProblemSection
                    title="진행중인 문제"
                    list={inProgressList ?? []}
                    totalPages={inProgressTotalPages}
                    currentPage={inProgressPage}
                    isOwner={isOwner}
                    onPageChange={setInProgressPage}
                  />
                  <ProblemSection
                    title="만료된 문제"
                    list={expiredList ?? []}
                    totalPages={expiredTotalPages}
                    currentPage={expiredPage}
                    onPageChange={setExpiredPage}
                  />
                </>
              </div>
              <section>
                <div style={{ width: "100%", margin: "1.6rem 0" }}>
                  <h2 className={titleStyle}>대기중인 문제</h2>
                  <PendingListHeader />
                  <PendingList groupId={+groupId} />
                </div>
              </section>
            </TabGroup.TabPanels>
          </TabGroup.Tabs>
        ) : (
          <>
            <div className={checkBoxStyle}>
              <p className={unSolvedFilterTextStyle}>Unsolved-Only</p>
              <CheckBox
                checked={isUnsolvedOnlyChecked}
                onChange={() => setIsUnsolvedOnlyChecked((prev) => !prev)}
              />
            </div>
            <div>
              <ProblemSection
                title="진행중인 문제"
                list={inProgressList ?? []}
                totalPages={inProgressTotalPages}
                currentPage={inProgressPage}
                isOwner={isOwner}
                onPageChange={setInProgressPage}
              />
              <ProblemSection
                title="만료된 문제"
                list={expiredList ?? []}
                totalPages={expiredTotalPages}
                currentPage={expiredPage}
                onPageChange={setExpiredPage}
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default ProblemListPage;
