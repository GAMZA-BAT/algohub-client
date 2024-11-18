import type { GroupResponse } from "@/api/groups/type";
import CircleNumber from "@/view/group/dashboard/GroupSidebar/CircleNumber";
import GroupCard from "@/view/group/dashboard/GroupSidebar/GroupCard";
import {
  labelStyle,
  labelWrapper,
  memberWrapper,
  sidebarWrapper,
} from "@/view/group/dashboard/GroupSidebar/index.css";
import MemberAvatar from "@/view/group/index/MemberAvatar";

type GroupCardProps = {
  info: GroupResponse;
};

const GroupSidebar = ({ info }: GroupCardProps) => {
  return (
    <div className={sidebarWrapper}>
      <GroupCard info={info} />
      <div className={labelWrapper}>
        <h2 className={labelStyle}>스터디장</h2>
        <CircleNumber>3</CircleNumber>
      </div>
      <ul className={memberWrapper}>
        {[0, 1, 2, 3, 4].map((_elem, idx) => (
          <li key={idx}>
            <MemberAvatar src="" isLeader />
          </li>
        ))}
      </ul>
      <div className={labelWrapper}>
        <h2 className={labelStyle}>스터디 멤버</h2>
        <CircleNumber>10</CircleNumber>
      </div>
      <ul className={memberWrapper}>
        {[0, 1, 2].map((_elem, idx) => (
          <li key={idx}>
            <MemberAvatar src="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupSidebar;
