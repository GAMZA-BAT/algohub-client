"use client";

import { GROUP_STATUS_MAPPING } from "../constant";
import { type SelectedChipType, useSidebarChip } from "./SidebarProvider";
import {
  chipContainerStyle,
  chipTextStyleVariants,
  chipWrapperVariants,
} from "./index.css";

const filterOptions = [
  {
    label: "전체",
    status: "all" as const,
  },
  ...GROUP_STATUS_MAPPING.map(({ label, status }) => ({
    label: label.replace(" 스터디", ""),
    status,
  })),
];

const StudyFilter = () => {
  const { selectedChip, setSelectedChip } = useSidebarChip();

  const handleChipClick = (label: SelectedChipType) => () => {
    setSelectedChip(label);
  };

  return (
    <nav className={chipContainerStyle} role="tablist" aria-label="스터디 필터">
      {filterOptions.map(({ label, status }) => {
        const isSelected = status === selectedChip;
        return (
          <button
            key={label}
            className={chipWrapperVariants[isSelected ? "selected" : "default"]}
            role="tab"
            aria-selected={isSelected}
            aria-controls="study-list"
            onClick={handleChipClick(status)}
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
  );
};

export default StudyFilter;
