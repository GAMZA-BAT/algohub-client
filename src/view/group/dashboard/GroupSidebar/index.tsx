"use client";

import type { GroupResponse, MemberResponse } from "@/api/groups/type";
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
  memberList: MemberResponse[];
};

const GroupSidebar = ({ info, memberList }: GroupCardProps) => {
  const [ownerList, partList] = memberList.reduce(
    ([match, nonMatch]: [MemberResponse[], MemberResponse[]], item) => {
      if (item.role === "PARTICIPANT") match.push(item);
      else nonMatch.push(item);
      return [match, nonMatch];
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
