import type { Problem } from "@/shared/type";
import PendingListItem from "@/view/group/problem-list/PendingList/Item";
import { listStyle } from "@/view/group/problem-list/PendingList/index.css";

type PendingListProps = {
  data: Problem[];
};

const PendingList = ({ data }: PendingListProps) => {
  return (
    <ul className={listStyle}>
      {data.map((item) => (
        <PendingListItem
          key={item.problemId}
          problemId={item.problemId}
          title={item.title}
          startDate={item.startDate}
          level={item.level}
        />
      ))}
    </ul>
  );
};

export default PendingList;
