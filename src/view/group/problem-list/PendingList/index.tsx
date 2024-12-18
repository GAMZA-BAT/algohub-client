import { getQueuedProblems } from "@/app/api/problems";
import Pagination from "@/shared/component/Pagination";
import { usePaginationQuery } from "@/shared/hook/usePaginationQuery";
import PendingListItem from "@/view/group/problem-list/PendingList/Item";
import { listStyle } from "@/view/group/problem-list/PendingList/index.css";

const PendingList = ({ groupId }: { groupId: number }) => {
  const {
    data: queuedData,
    currentPage: queuedPage,
    totalPages: queuedTotalPages,
    setCurrentPage: setQueuedPage,
  } = usePaginationQuery({
    queryKey: ["queuedProblem", groupId],
    queryFn: (page) => getQueuedProblems({ groupId, page, size: 7 }),
  });
  const queuedList = queuedData?.content;

  return (
    <>
      <ul className={listStyle}>
        {queuedList?.map((item) => (
          <PendingListItem
            key={item.problemId}
            problemId={item.problemId}
            title={item.title}
            startDate={item.startDate}
            endDate={item.endDate}
            level={item.level}
          />
        ))}
      </ul>
      {queuedList?.length && (
        <Pagination
          style={{ marginTop: "1.6rem" }}
          totalPages={queuedTotalPages}
          currentPage={queuedPage}
          onPageChange={setQueuedPage}
        />
      )}
    </>
  );
};

export default PendingList;
