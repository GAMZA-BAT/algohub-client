import { IcnBtnArrowDown, IcnBtnSort } from "@/asset/svg";
import { handleA11yClick } from "@/common/util/dom";
import { ascIconStyle, sortIconStyle } from "./index.css";

type SortIconProps = {
  direction?: "asc" | "desc";
  onClick: () => void;
};

const SortIcon = ({ direction: isActive, onClick }: SortIconProps) => {
  switch (isActive) {
    case undefined:
      return (
        <IcnBtnSort
          aria-label="오름차순 정렬하기"
          className={sortIconStyle}
          width={20}
          height={20}
          onClick={onClick}
          onKeyDown={handleA11yClick(onClick)}
          tabIndex={0}
        />
      );
    case "asc":
      return (
        <IcnBtnArrowDown
          aria-label="내림차순 정렬하기"
          className={ascIconStyle}
          width={20}
          height={20}
          onClick={onClick}
          onKeyDown={handleA11yClick(onClick)}
          tabIndex={0}
        />
      );
    case "desc":
      return (
        <IcnBtnArrowDown
          aria-label="정렬 해제하기"
          className={sortIconStyle}
          width={20}
          height={20}
          onClick={onClick}
          onKeyDown={handleA11yClick(onClick)}
          tabIndex={0}
        />
      );
    default:
      return null;
  }
};

export default SortIcon;
