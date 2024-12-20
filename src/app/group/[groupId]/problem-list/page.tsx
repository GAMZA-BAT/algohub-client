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
import ProblemSidebar from "@/view/group/problem-list/ProblemSidebar";
import SolvedSection from "@/view/group/problem-list/SolvedSection";
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

  const [isUnsolvedOnlyChecked, setIsUnsolvedOnlyChecked] = useState({
    ownerProgressPage: false,
    ownerPendingPage: false,
    participantPage: false,
  });

  const {
    data: inProgressData,
    currentPage: inProgressPage,
    totalPages: inProgressTotalPages,
    setCurrentPage: setInProgressPage,
  } = usePaginationQuery({
    queryKey: [
      "inProgressProblem",
      groupId,
      { unsolved: isUnsolvedOnlyChecked.ownerProgressPage },
    ],
    queryFn: (page) =>
      getInProgressProblems({
        groupId: +groupId,
        page,
        size: 3,
        unsolvedOnly: isUnsolvedOnlyChecked.ownerProgressPage,
      }),
  });
  const inProgressList = inProgressData?.content;

  const {
    data: expiredData,
    currentPage: expiredPage,
    totalPages: expiredTotalPages,
    setCurrentPage: setExpiredPage,
  } = usePaginationQuery({
    queryKey: [
      "expiredProblem",
      groupId,
      { unsolved: isUnsolvedOnlyChecked.ownerProgressPage },
    ],
    queryFn: (page) =>
      getExpiredProblems({
        groupId: +groupId,
        page,
        size: 3,
        unsolvedOnly: isUnsolvedOnlyChecked.ownerProgressPage,
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
                    checked={isUnsolvedOnlyChecked.ownerProgressPage}
                    onChange={() =>
                      setIsUnsolvedOnlyChecked((prev) => ({
                        ...prev,
                        ownerProgressPage: !prev.ownerProgressPage,
                      }))
                    }
                  />
                </div>
                <>
                  <SolvedSection
                    title="진행중인 문제"
                    list={
                      inProgressList?.filter(
                        (item) =>
                          isUnsolvedOnlyChecked.ownerProgressPage === false ||
                          !item.solved,
                      ) ?? []
                    }
                    totalPages={inProgressTotalPages}
                    currentPage={inProgressPage}
                    isOwner={isOwner}
                    onPageChange={setInProgressPage}
                  />
                  <SolvedSection
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
                  <div style={{ display: "flex" }}>
                    <h2 className={titleStyle}>대기중인 문제</h2>
                    <div className={checkBoxStyle}>
                      <p className={unSolvedFilterTextStyle}>Unsolved-Only</p>
                      <CheckBox
                        checked={isUnsolvedOnlyChecked.ownerPendingPage}
                        onChange={() =>
                          setIsUnsolvedOnlyChecked((prev) => ({
                            ...prev,
                            ownerPendingPage: !prev.ownerPendingPage,
                          }))
                        }
                      />
                    </div>
                  </div>
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
                checked={isUnsolvedOnlyChecked.participantPage}
                onChange={() =>
                  setIsUnsolvedOnlyChecked((prev) => ({
                    ...prev,
                    participantPage: !prev.participantPage,
                  }))
                }
              />
            </div>
            <div>
              <SolvedSection
                title="진행중인 문제"
                list={
                  inProgressList?.filter(
                    (item) =>
                      isUnsolvedOnlyChecked.participantPage === false ||
                      !item.solved,
                  ) ?? []
                }
                totalPages={inProgressTotalPages}
                currentPage={inProgressPage}
                isOwner={isOwner}
                onPageChange={setInProgressPage}
              />
              <SolvedSection
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
