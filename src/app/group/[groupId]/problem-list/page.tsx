"use client";

import {
  useExpiredProblemQuery,
  useInProgressProblemQuery,
} from "@/app/group/[groupId]/problem-list/query";
import { useGroupRoleQuery } from "@/app/group/[groupId]/query";
import Sidebar from "@/common/component/Sidebar";
import TabGroup from "@/common/component/Tab";
import { sidebarWrapper } from "@/styles/shared.css";
import ProgressList from "@/view/group/problem-list";
import PendingList from "@/view/group/problem-list/PendingList";
import PendingListHeader from "@/view/group/problem-list/PendingListHeader";
import ProblemSidebar from "@/view/group/problem-list/ProblemSidebar";
import { pageStyle, titleStyle } from "@/view/group/problem-list/index.css";
import { useState } from "react";

const ProblemListPage = ({
  params: { groupId },
}: { params: { groupId: string } }) => {
  const { data: role } = useGroupRoleQuery(+groupId);
  const isOwner = role !== "PARTICIPANT";

  const [inProgressPage, setInProgressPage] = useState(1);
  const [expiredPage, setExpiredPage] = useState(1);

  const { content: inProgressData, totalPages: inProgressTotalPages } =
    useInProgressProblemQuery(+groupId, inProgressPage - 1);
  const { content: expiredData, totalPages: expiredTotalPages } =
    useExpiredProblemQuery(+groupId, expiredPage - 1);

  const handleInProgressPageChange = (page: number) => setInProgressPage(page);
  const handleExpiredPageChange = (page: number) => setExpiredPage(page);

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
              <section>
                <div style={{ width: "100%", margin: "1.6rem 0" }}>
                  <h2 className={titleStyle}>진행중인 문제</h2>
                  {inProgressData.length && (
                    <ProgressList
                      data={inProgressData}
                      totalPages={inProgressTotalPages}
                      currentPage={inProgressPage}
                      onPageChange={handleInProgressPageChange}
                      isOwner={isOwner}
                    />
                  )}
                </div>
                <div style={{ width: "100%", margin: "1.6rem 0" }}>
                  <h2 className={titleStyle}>만료된 문제</h2>
                  {expiredData.length && (
                    <ProgressList
                      data={expiredData}
                      totalPages={expiredTotalPages}
                      currentPage={expiredPage}
                      onPageChange={handleExpiredPageChange}
                      isOwner={false}
                    />
                  )}
                </div>
              </section>
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
          <section>
            <div style={{ width: "100%", margin: "1.6rem 0" }}>
              <h2 className={titleStyle}>진행중인 문제</h2>
              {inProgressData.length && (
                <ProgressList
                  data={inProgressData}
                  totalPages={inProgressTotalPages}
                  currentPage={inProgressPage}
                  onPageChange={handleInProgressPageChange}
                  isOwner={isOwner}
                />
              )}
            </div>
            <div style={{ width: "100%", margin: "1.6rem 0" }}>
              <h2 className={titleStyle}>만료된 문제</h2>
              {expiredData.length && (
                <ProgressList
                  data={expiredData}
                  totalPages={expiredTotalPages}
                  currentPage={expiredPage}
                  onPageChange={handleExpiredPageChange}
                  isOwner={false}
                />
              )}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProblemListPage;
