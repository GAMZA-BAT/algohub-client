import { statusDotStyle } from "@/app/[user]/components/GroupCard/index.css";
import type { GroupStatus } from "@/app/api/groups/type";

const StatusDot = ({ status }: { status: GroupStatus }) => {
  return <div className={statusDotStyle({ status })} />;
};

export default StatusDot;
