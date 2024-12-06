import type { GroupResponse, Role } from "@/api/groups/type";
import { IcnCalenderCard } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import RoleChip from "@/view/group/dashboard/GroupSidebar/GroupCard/RoleChip";
import {
  calandarIconStyle,
  dateStyle,
  dateTextStyle,
  descStyle,
  nameStyle,
  wrapper,
} from "@/view/group/dashboard/GroupSidebar/GroupCard/index.css";

type GroupCardProps = {
  info: GroupResponse;
  role: Role;
};
const GroupCard = ({ info, role }: GroupCardProps) => {
  const { groupImage, name, startDate, endDate, introduction } = info;

  return (
    <article className={wrapper}>
      <Avatar src={groupImage} alt="Group Info Card" size="large" />
      <h1 className={nameStyle}>{name}</h1>
      <div className={dateStyle}>
        <IcnCalenderCard width={20} height={20} className={calandarIconStyle} />
        <time className={dateTextStyle}>{startDate}</time>
        <p className={dateTextStyle}>~</p>
        <time className={dateTextStyle}>{endDate}</time>
      </div>
      <p className={descStyle}>{introduction}</p>
      <RoleChip role={role} />
    </article>
  );
};

export default GroupCard;
