import { IcnBtnArrowDown } from "@/asset/svg";
import Dropdown from "@/common/component/Dropdown";
import Menu from "@/common/component/Menu/Menu";
import { handleA11yClick } from "@/common/util/dom";
import { useGroupListDispatch } from "@/view/user/setting/GroupList/GroupListTable/hook";
import {
  arrowDownStyle,
  dropdownStyle,
  textStyle,
  triggerButtonStyle,
} from "@/view/user/setting/GroupList/StatusDropdownMenu/index.css";
import StatusIcon from "@/view/user/setting/GroupList/StatusIcon";

const statusOptions = [
  { label: "inProgress", icon: <StatusIcon status="inProgress" /> },
  { label: "queued", icon: <StatusIcon status="queued" /> },
  { label: "done", icon: <StatusIcon status="done" /> },
];
const StatusDropdownMenu = () => {
  const dispatch = useGroupListDispatch();
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
