"use client";

import type { GroupResponse, GroupStatus } from "@/app/api/groups/type";
import { useMyGroupsQueryObject } from "@/app/api/users/query";
import { IcnBtnArrowRight } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useMemo } from "react";
import { useSidebrChip } from "./SidebarProvider/hook";
import {
  btnArrowStyle,
  profileStyle,
  studyListContainerStyle,
  studyListItemStyle,
  studyTitleStyle,
  studyTitleWrapper,
} from "./index.css";

export const CHIP_LABELS = ["전체", "즐겨찾는", "진행 중", "예정된", "완료된"];
const CHIP_FILTER_MAP: Record<string, GroupStatus | "all"> = {
  전체: "all",
  즐겨찾는: "bookmarked",
  "진행 중": "inProgress",
  예정된: "queued",
  완료된: "done",
};
const StudyList = () => {
  const { selectedChip } = useSidebrChip();
  const { data: myGroups } = useQuery(useMyGroupsQueryObject());

  const filteredGroups = useMemo((): GroupResponse[] => {
    if (!myGroups) return [];

    const filterKey = CHIP_FILTER_MAP[selectedChip];

    if (filterKey === "all") {
      return Object.values<GroupResponse[]>(myGroups).flat();
    }

    return myGroups[filterKey];
  }, [myGroups, selectedChip]);

  return (
    <ul className={studyListContainerStyle} id="study-list">
      {filteredGroups.map((group) => (
        <li key={group.id}>
          <Link
            href={`/group/${group.id}`}
            className={studyListItemStyle}
            aria-label={`${group.name} 스터디 페이지로 이동`}
          >
            <div className={studyTitleWrapper}>
              <Avatar className={profileStyle} alt="" role="presentation" />
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
