import { useQueuedProblemQuery } from "@/app/group/[groupId]/problem-list/query";
import Pagination from "@/shared/component/Pagination";
import PendingListItem from "@/view/group/problem-list/PendingList/Item";
import { listStyle } from "@/view/group/problem-list/PendingList/index.css";
import { useState } from "react";

const PendingList = ({ groupId }: { groupId: number }) => {
  const [queuedPage, setQueuedPage] = useState(1);
  const { content: queuedData, totalPages: queuedTotalPages } =
    useQueuedProblemQuery(+groupId, queuedPage - 1);
  const handleQueuedPageChange = (page: number) => setQueuedPage(page);

  return (
    <>
      <ul className={listStyle}>
        {queuedData.map((item) => (
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
      {queuedData.length && (
        <Pagination
          style={{ marginTop: "1.6rem" }}
          totalPages={queuedTotalPages}
          currentPage={queuedPage}
          onPageChange={handleQueuedPageChange}
        />
      )}
    </>
  );
};

export default PendingList;
