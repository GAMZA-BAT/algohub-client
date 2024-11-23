import type { GroupStatus } from "@/api/groups/type";
import { statusIconStyle } from "@/view/user/index/GroupCard/index.css";

const StatusIcon = ({ status }: { status: GroupStatus }) => {
  return <div className={statusIconStyle({ status })} />;
};

export default StatusIcon;
