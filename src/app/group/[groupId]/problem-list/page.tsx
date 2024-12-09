"use client";

import { getExpiredProblems, getInProgressProblems } from "@/app/api/problems";
import { useGroupRoleQuery } from "@/app/group/[groupId]/query";
import Sidebar from "@/common/component/Sidebar";
import TabGroup from "@/common/component/Tab";
import { usePaginationQuery } from "@/shared/hook/usePaginationQuery";
import { sidebarWrapper } from "@/styles/shared.css";
import ProgressList from "@/view/group/problem-list";
import PendingList from "@/view/group/problem-list/PendingList";
import PendingListHeader from "@/view/group/problem-list/PendingListHeader";
import ProblemSidebar from "@/view/group/problem-list/ProblemSidebar";
import { pageStyle, titleStyle } from "@/view/group/problem-list/index.css";

const ProblemListPage = ({
  params: { groupId },
}: { params: { groupId: string } }) => {
  const { data: role } = useGroupRoleQuery(+groupId);
  const isOwner = role !== "PARTICIPANT";

  const {
    data: inProgressData,
    currentPage: inProgressPage,
    totalPages: inProgressTotalPages,
    setCurrentPage: setInProgressPage,
  } = usePaginationQuery({
    queryKey: ["inProgressProblem", groupId],
    queryFn: (page) =>
      getInProgressProblems({ groupId: +groupId, page, size: 3 }),
  });
  const inProgressList = inProgressData?.content;

  const {
    data: expiredData,
    currentPage: expiredPage,
    totalPages: expiredTotalPages,
    setCurrentPage: setExpiredPage,
  } = usePaginationQuery({
    queryKey: ["expiredProblem", groupId],
    queryFn: (page) => getExpiredProblems({ groupId: +groupId, page, size: 3 }),
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
              <section>
                <div style={{ width: "100%", margin: "1.6rem 0" }}>
                  <h2 className={titleStyle}>진행중인 문제</h2>
                  {inProgressList?.length && (
                    <ProgressList
                      data={inProgressList}
                      totalPages={inProgressTotalPages}
                      currentPage={inProgressPage}
                      isOwner={isOwner}
                      onPageChange={setInProgressPage}
                    />
                  )}
                </div>
                <div style={{ width: "100%", margin: "1.6rem 0" }}>
                  <h2 className={titleStyle}>만료된 문제</h2>
                  {expiredList?.length && (
                    <ProgressList
                      data={expiredList}
                      totalPages={expiredTotalPages}
                      currentPage={expiredPage}
                      isOwner={false}
                      onPageChange={setExpiredPage}
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
              {inProgressList?.length && (
                <ProgressList
                  data={inProgressList}
                  totalPages={inProgressTotalPages}
                  currentPage={inProgressPage}
                  isOwner={isOwner}
                  onPageChange={setInProgressPage}
                />
              )}
            </div>
            <div style={{ width: "100%", margin: "1.6rem 0" }}>
              <h2 className={titleStyle}>만료된 문제</h2>
              {expiredList?.length && (
                <ProgressList
                  data={expiredList}
                  totalPages={expiredTotalPages}
                  currentPage={expiredPage}
                  isOwner={false}
                  onPageChange={setExpiredPage}
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
