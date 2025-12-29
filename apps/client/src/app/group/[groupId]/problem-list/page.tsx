"use client";

import { getExpiredProblems, getInProgressProblems } from "@/app/api/groups";
import { groupQueryKey, useGroupRoleQueryObject } from "@/app/api/groups/query";
import CheckBox from "@/common/component/CheckBox";
import Sidebar from "@/common/component/Sidebar";
import TabGroup from "@/common/component/Tab";
import { usePaginationQuery } from "@/shared/hook/usePaginationQuery";
import { usePvEvent } from "@/shared/hook/usePvEvent";
import {
  fullWidthStyle,
  sidebarWrapper,
  topBottomMarginStyle,
} from "@/styles/shared.css";

import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { useState } from "react";
import PendingList from "./components/PendingList";
import PendingListHeader from "./components/PendingListHeader";
import ProblemSection from "./components/ProblemSection";
import ProblemSidebar from "./components/ProblemSidebar";
import {
  checkBoxStyle,
  pageStyle,
  titleStyle,
  unSolvedFilterTextStyle,
} from "./components/index.css";

const ProblemListPage = ({
  params: { groupId },
}: { params: { groupId: string } }) => {
  usePvEvent("group_problem_list_page_view", {
    group_id: groupId,
  });
  const { data: role } = useQuery(useGroupRoleQueryObject(+groupId));
  const isOwner = role !== "PARTICIPANT";

  const [isUnsolvedOnlyChecked, setIsUnsolvedOnlyChecked] = useState(false);

  const {
    data: inProgressData,
    currentPage: inProgressPage,
    totalPages: inProgressTotalPages,
    setCurrentPage: setInProgressPage,
  } = usePaginationQuery({
    queryKey: [
      ...groupQueryKey.inProgressProblems(+groupId),
      { unsolved: isUnsolvedOnlyChecked },
    ],
    queryFn: (page) =>
      getInProgressProblems({
        groupId: +groupId,
        page,
        size: 3,
        unsolvedOnly: isUnsolvedOnlyChecked,
      }),
      searchParam: "inProgress"
  });
  const inProgressList = inProgressData?.content;

  const {
    data: expiredData,
    currentPage: expiredPage,
    totalPages: expiredTotalPages,
    setCurrentPage: setExpiredPage,
  } = usePaginationQuery({
    queryKey: groupQueryKey.expiredProblems(+groupId),
    queryFn: (page) =>
      getExpiredProblems({
        groupId: +groupId,
        page,
        size: 3,
      }),
      searchParam: "expired"
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
                    isExpired
                    list={expiredList ?? []}
                    totalPages={expiredTotalPages}
                    currentPage={expiredPage}
                    onPageChange={setExpiredPage}
                  />
                </>
              </div>
              <section>
                <div className={clsx(fullWidthStyle, topBottomMarginStyle)}>
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
                isExpired
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
