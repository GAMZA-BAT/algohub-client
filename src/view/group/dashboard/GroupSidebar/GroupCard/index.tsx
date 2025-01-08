import type { GroupResponse } from "@/app/api/groups/type";
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
import { IcnCalenderCard } from "../../../../../../public/asset/svg";

type GroupCardProps = {
  info: GroupResponse;
};
const GroupCard = ({ info }: GroupCardProps) => {
  const { groupImage, name, startDate, endDate, introduction, role } = info;

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
