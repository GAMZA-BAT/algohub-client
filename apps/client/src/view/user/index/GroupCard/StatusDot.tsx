import type { GroupStatus } from "@/app/api/groups/type";
import { statusDotStyle } from "@/view/user/index/GroupCard/index.css";

const StatusDot = ({ status }: { status: GroupStatus }) => {
  return <div className={statusDotStyle({ status })} />;
};

export default StatusDot;
