"use client";

import type { GroupResponse, GroupStatus } from "@/app/api/groups/type";
import { useMyGroupsQueryObject } from "@/app/api/users/query";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import {
  btnArrowStyle,
  chipContainerStyle,
  chipTextStyleVariants,
  chipWrapperVariants,
  profileStyle,
  studyListContainerStyle,
  studyListItemStyle,
  studyTitleStyle,
  studyTitleWrapper,
} from "./index.css";
import Avatar from "@/common/component/Avatar";
import { IcnBtnArrowRight } from "@/asset/svg";
import Link from "next/link";

const CHIP_LABELS = ["전체", "즐겨찾는", "진행 중", "예정된", "완료된"];

const CHIP_FILTER_MAP: Record<string, GroupStatus | "all"> = {
  전체: "all",
  즐겨찾는: "bookmarked",
  "진행 중": "inProgress",
  예정된: "queued",
  완료된: "done",
};

const LeftSidebarContent = () => {
  const { data: myGroups } = useQuery(useMyGroupsQueryObject());
  const [selectedChip, setSelectedChip] = useState(CHIP_LABELS[0]);

  const handleChipClick = (label: string) => () => {
    setSelectedChip(label);
  };

  const filteredGroups = useMemo((): GroupResponse[] => {
    if (!myGroups) return [];

    const filterKey = CHIP_FILTER_MAP[selectedChip];

    if (filterKey === "all") {
      return Object.values<GroupResponse[]>(myGroups).flat();
    }

    return myGroups[filterKey];
  }, [myGroups, selectedChip]);

  return (
    <>
      <nav className={chipContainerStyle}>
        {CHIP_LABELS.map((label) => {
          const isSelected = label === selectedChip;
          return (
            <button
              key={label}
              className={
                chipWrapperVariants[isSelected ? "selected" : "default"]
              }
              onClick={handleChipClick(label)}
            >
              <span
                className={
                  chipTextStyleVariants[isSelected ? "selected" : "default"]
                }
              >
                {label}
              </span>
            </button>
          );
        })}
      </nav>
      <ul className={studyListContainerStyle}>
        {filteredGroups.map((group) => (
          <li key={group.id} className={studyListItemStyle}>
            <Link
              href={`/groups/${group.id}`}
              aria-label={`${group.name} 스터디 페이지로 이동`}
            >
              <div className={studyTitleWrapper}>
                <Avatar className={profileStyle} alt="" />
                <h3 className={studyTitleStyle}>{group.name}</h3>
              </div>
              <IcnBtnArrowRight className={btnArrowStyle} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LeftSidebarContent;
