"use client";

import type { GroupResponse } from "@/app/api/groups/type";
import { useMyGroupsQueryObject } from "@/app/api/users/query";
import { IcnBtnArrowRight } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import { useSuspenseQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useMemo } from "react";
import { useSidebarChip } from "./SidebarProvider";
import {
  btnArrowStyle,
  profileStyle,
  studyListContainerStyle,
  studyListItemStyle,
  studyTitleStyle,
  studyTitleWrapper,
} from "./index.css";

const StudyList = () => {
  const { selectedChip } = useSidebarChip();
  const { data: myGroups } = useSuspenseQuery(useMyGroupsQueryObject());

  const filteredGroups = useMemo((): GroupResponse[] => {
    if (!myGroups) return [];

    if (selectedChip === "all") {
      return Object.values<GroupResponse[]>(myGroups).flat();
    }
    return myGroups[selectedChip] ?? [];
  }, [myGroups, selectedChip]);

  return (
    <ul className={studyListContainerStyle}>
      {filteredGroups.map((group) => (
        <li key={group.id}>
          <Link
            href={`/group/${group.id}`}
            className={studyListItemStyle}
            aria-label={`${group.name} 스터디 페이지로 이동`}
          >
            <div className={studyTitleWrapper}>
              <Avatar
                className={profileStyle}
                src={group.groupImage}
                alt=""
                role="presentation"
              />
              <p className={studyTitleStyle}>{group.name}</p>
            </div>
            <IcnBtnArrowRight className={btnArrowStyle} aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default StudyList;
