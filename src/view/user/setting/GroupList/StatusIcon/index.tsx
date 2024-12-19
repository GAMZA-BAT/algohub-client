import type { GroupStatus } from "@/app/api/groups/type";
import { statusChipStyle } from "@/view/user/setting/GroupList/StatusIcon/index.css";

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
