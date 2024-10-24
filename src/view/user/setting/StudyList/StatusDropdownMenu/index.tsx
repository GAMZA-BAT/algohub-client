import { IcnBtnArrowDown } from "@/asset/svg";
import Dropdown from "@/common/component/Dropdown";
import Menu from "@/common/component/Menu/Menu";
import { handleA11yClick } from "@/common/util/dom";
import StatusIcon from "../StatusIcon";
import { useStudyListDispatch } from "../StudyListTable/hook";
import {
  arrowDownStyle,
  dropdownStyle,
  textStyle,
  triggerButtonStyle,
} from "./index.css";

const statusOptions = [
  { label: "bookmarked", icon: <StatusIcon status="bookmarked" /> },
  { label: "inProgress", icon: <StatusIcon status="inProgress" /> },
  { label: "queued", icon: <StatusIcon status="queued" /> },
  { label: "done", icon: <StatusIcon status="done" /> },
];
const StatusDropdownMenu = () => {
  const dispatch = useStudyListDispatch();
  const handleFilterChange = (status: string) => {
    dispatch({
      type: "SET_FILTER",
      key: "status",
      value: status,
    });
  };

  return (
    <Menu
      label="status"
      renderTriggerButton={
        <div className={triggerButtonStyle}>
          <IcnBtnArrowDown className={arrowDownStyle} width={12} height={12} />
          <span className={textStyle}>상태</span>
        </div>
      }
      renderList={
        <Dropdown className={dropdownStyle}>
          {statusOptions.map((option) => {
            const handleClick = () => handleFilterChange(option.label);
            return (
              <li
                key={option.label}
                onClick={handleClick}
                onKeyDown={handleA11yClick(handleClick)}
              >
                {option.icon}
              </li>
            );
          })}
        </Dropdown>
      }
    />
  );
};

export default StatusDropdownMenu;
