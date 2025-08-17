"use client";
import type { GroupResponse, MemberResponse } from "@/app/api/groups/type";
import CircleNumber from "@/app/group/[groupId]/components/GroupSidebar/CircleNumber";
import GroupCard from "@/app/group/[groupId]/components/GroupSidebar/GroupCard";
import {
  labelStyle,
  labelWrapper,
  memberWrapper,
  sidebarWrapper,
} from "@/app/group/[groupId]/components/GroupSidebar/index.css";
import MemberAvatar from "@/app/group/[groupId]/components/MemberAvatar";

type GroupCardProps = {
  info: GroupResponse;
  memberList: MemberResponse[];
};

const GroupSidebar = ({ info, memberList }: GroupCardProps) => {
  const [ownerList, partList] = memberList.reduce(
    ([owner, nonOwner]: [MemberResponse[], MemberResponse[]], item) => {
      if (item.role !== "PARTICIPANT") owner.push(item);
      else nonOwner.push(item);
      return [owner, nonOwner];
    },
    [[], []],
  );

  return (
    <div className={sidebarWrapper}>
      <GroupCard info={info} />
      <div className={labelWrapper}>
        <h2 className={labelStyle}>스터디장</h2>
        <CircleNumber>{ownerList.length}</CircleNumber>
      </div>
      <ul className={memberWrapper}>
        {ownerList.map(({ memberId, profileImage, nickname }) => (
          <li key={memberId}>
            <MemberAvatar src={profileImage} nickname={nickname} isLeader />
          </li>
        ))}
      </ul>
      <div className={labelWrapper}>
        <h2 className={labelStyle}>스터디 멤버</h2>
        <CircleNumber>{partList.length}</CircleNumber>
      </div>
      <ul className={memberWrapper}>
        {partList.map(({ memberId, profileImage, nickname }) => (
          <li key={memberId}>
            <MemberAvatar src={profileImage} nickname={nickname} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupSidebar;
