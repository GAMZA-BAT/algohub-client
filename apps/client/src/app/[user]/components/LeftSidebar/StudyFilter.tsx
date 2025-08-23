"use client";

import { useSidebrChip } from "./SidebarProvider/hook";
import {
  chipContainerStyle,
  chipTextStyleVariants,
  chipWrapperVariants,
} from "./index.css";

export const CHIP_LABELS = ["전체", "즐겨찾는", "진행 중", "예정된", "완료된"];
const StudyFilter = () => {
  const { selectedChip, setSelectedChip } = useSidebrChip();

  const handleChipClick = (label: string) => () => {
    setSelectedChip(label);
  };

  return (
    <nav className={chipContainerStyle} role="tablist" aria-label="스터디 필터">
      {CHIP_LABELS.map((label) => {
        const isSelected = label === selectedChip;
        return (
          <button
            key={label}
            className={chipWrapperVariants[isSelected ? "selected" : "default"]}
            role="tab"
            aria-selected={isSelected}
            aria-controls="study-list"
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
  );
};

export default StudyFilter;
