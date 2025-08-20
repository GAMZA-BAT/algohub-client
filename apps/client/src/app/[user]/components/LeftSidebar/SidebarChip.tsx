import { chipContainerStyle, chipTextStyle, chipWrapper } from "./index.css";

const SidebarChip = () => {
  return (
    <nav className={chipContainerStyle}>
      {CHIP_LABELS.map((label) => (
        <button key={label} className={chipWrapper}>
          <span className={chipTextStyle}>{label}</span>
        </button>
      ))}
    </nav>
  );
};

const CHIP_LABELS = ['전체', '즐겨찾는', '진행 중', '예정된', '완료된'];

export default SidebarChip;