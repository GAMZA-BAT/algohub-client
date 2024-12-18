import type { GroupResponse } from "@/app/api/groups/type";
import { IcnGroupInfoCard } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import GroupDateInfo from "@/view/user/join-group/GroupInfoCard/GroupDateInfo";
import {
  descStyle,
  groupNameStyle,
  infoCardWrapper,
  infoWrapper,
} from "@/view/user/join-group/GroupInfoCard/index.css";

const GroupInfoCard = ({ groupInfo }: { groupInfo: GroupResponse }) => {
  const { name, groupImage, startDate, endDate, introduction } = groupInfo;

  return (
    <article className={infoCardWrapper}>
      <IcnGroupInfoCard width={246} height={341} />
      <div className={infoWrapper}>
        <Avatar src={groupImage} alt={`${name} 그룹 사진`} size="large" />
        <h1 className={groupNameStyle}>{name}</h1>
        <GroupDateInfo startDate={startDate} endDate={endDate} />
        <p className={descStyle}>{introduction}</p>
      </div>
    </article>
  );
};

export default GroupInfoCard;
