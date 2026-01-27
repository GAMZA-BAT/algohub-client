import { statusChipStyle } from "@/app/[user]/setting/components/GroupList/StatusIcon/index.css";
import type { GroupStatus } from "@/app/api/groups/type";

type StatusChipProps = {
  status: GroupStatus;
};

const StatusChip = ({ status }: StatusChipProps) => {
  const text = {
    bookmarked: "Favorites",
    inProgress: "Progress",
    queued: "Queued",
    done: "Done",
  };

  return <span className={statusChipStyle({ status })}>{text[status]}</span>;
};

export default StatusChip;
