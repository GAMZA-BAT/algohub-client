import {
  chipContainerStyle,
  chipTextStyleVariants,
  chipWrapperVariants,
} from "./index.css";

const SidebarChip = () => {
  return (
    <nav className={chipContainerStyle}>
      {CHIP_LABELS.map((label) => (
        <button key={label} className={chipWrapperVariants.default}>
          <span className={chipTextStyleVariants.default}>{label}</span>
        </button>
      ))}
    </nav>
  );
};

const CHIP_LABELS = ["전체", "즐겨찾는", "진행 중", "예정된", "완료된"];

export default SidebarChip;
