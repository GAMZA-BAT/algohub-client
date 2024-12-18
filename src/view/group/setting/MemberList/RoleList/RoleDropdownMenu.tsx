import type { Role } from "@/app/api/groups/type";
import { IcnBtnArrowDown } from "@/asset/svg";
import Dropdown from "@/common/component/Dropdown";
import Menu from "@/common/component/Menu/Menu";
import { handleA11yClick } from "@/common/util/dom";
import { ROLE } from "@/shared/constant/role";
import RoleChip from "@/view/group/setting/MemberList/RoleList/RoleChip";
import { useMemberListDispatch } from "@/view/group/setting/MemberList/hook";
import {
  arrowDownStyle,
  dropdownStyle,
  textStyle,
  triggerButtonStyle,
} from "@/view/user/setting/StudyList/StatusDropdownMenu/index.css";

const RoleDropdownMenu = () => {
  const dispatch = useMemberListDispatch();
  const handleFilterChange = (role: Role) => {
    dispatch({
      type: "SET_FILTER",
      key: "role",
      value: role,
    });
  };

  return (
    <Menu
      label="status"
      renderTriggerButton={
        <div className={triggerButtonStyle}>
          <IcnBtnArrowDown className={arrowDownStyle} width={12} height={12} />
          <span className={textStyle}>역할</span>
        </div>
      }
      renderList={
        <Dropdown className={dropdownStyle}>
          {Object.keys(ROLE).map((role) => {
            const handleClick = () => handleFilterChange(role as Role);
            return (
              <li
                key={role}
                onClick={handleClick}
                onKeyDown={handleA11yClick(handleClick)}
              >
                <RoleChip role={role as Role} />
              </li>
            );
          })}
        </Dropdown>
      }
    />
  );
};

export default RoleDropdownMenu;
