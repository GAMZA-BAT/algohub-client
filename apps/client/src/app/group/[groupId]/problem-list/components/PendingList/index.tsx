import { getQueuedProblems } from "@/app/api/groups";
import PendingListItem from "@/app/group/[groupId]/problem-list/components/PendingList/Item";
import {
  listStyle,
  marginTopStyle,
} from "@/app/group/[groupId]/problem-list/components/PendingList/index.css";
import Pagination from "@/shared/component/Pagination";
import { usePaginationQuery } from "@/shared/hook/usePaginationQuery";

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
          className={marginTopStyle}
          totalPages={queuedTotalPages}
          currentPage={queuedPage}
          onPageChange={setQueuedPage}
        />
      )}
    </>
  );
};

export default PendingList;
