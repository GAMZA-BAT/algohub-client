import type { MemberResponse, Role } from "@/app/api/groups/type";
import { IcnCalendarTable, IcnClose } from "@/asset/svg";
import Dropdown from "@/common/component/Dropdown";
import Menu from "@/common/component/Menu/Menu";
import { handleA11yClick } from "@/common/util/dom";
import { ROLE } from "@/shared/constant/role";
import type { TableDataType } from "@/shared/type/table";
import {} from "@/view/group/index/WithdrawDialog/index.css";
import RoleChip from "@/view/group/setting/MemberList/RoleList/RoleChip";
import {
  useChangeOwner,
  useDeleteClick,
  useMemberListDispatch,
  useMemberListState,
  usePatchMemberRoleMutation,
} from "@/view/group/setting/MemberList/hook";
import {
  removeBtnStyle,
  textStyle,
} from "@/view/group/setting/MemberList/index.css";
import SortIcon from "@/view/user/setting/GroupList/SortIcon";
import { dropdownStyle } from "@/view/user/setting/GroupList/StatusDropdownMenu/index.css";

export const MEMBER_LIST_COLUMNS: TableDataType<MemberResponse>[] = [
  {
    key: "nickname",
    Header: () => "ID",
    Cell: (data) => data.nickname,
    width: 50,
  },
  {
    key: "joinDate",
    Header: () => {
      const dispatch = useMemberListDispatch();
      const state = useMemberListState();
      const direction = state.sortCriteria.find(
        (c) => c.key === "joinDate",
      )?.order;
      return (
        <>
          <IcnCalendarTable width={20} height={20} />
          <span className={textStyle}>가입 날짜</span>
          <SortIcon
            direction={direction}
            onClick={() => dispatch({ type: "SET_SORT", key: "joinDate" })}
          />
        </>
      );
    },
    Cell: (data) => data.joinDate,
    width: 100,
  },
  {
    key: "achievement",
    Header: () => {
      const dispatch = useMemberListDispatch();
      const state = useMemberListState();
      const direction = state.sortCriteria.find(
        (c) => c.key === "achievement",
      )?.order;
      return (
        <>
          <IcnCalendarTable width={20} height={20} />
          <span className={textStyle}>성취도</span>
          <SortIcon
            direction={direction}
            onClick={() => dispatch({ type: "SET_SORT", key: "achievement" })}
          />
        </>
      );
    },
    Cell: (data) => data.achievement,
    width: 80,
  },
  {
    key: "role",
    // Header: () => <RoleDropdownMenu />,
    Header: () => "역할",
    Cell: (data) => {
      const handleOwnerChange = useChangeOwner();
      const patchMutate = usePatchMemberRoleMutation();

      const handleClick = (role: Role, memberId: number) => {
        if (role === "OWNER") {
          handleOwnerChange(data.memberId, data.nickname);
          return;
        }
        patchMutate({ memberId, role: role as Role });
      };

      return (
        <>
          <Menu
            label="role"
            renderTriggerButton={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "fit-content",
                }}
              >
                <RoleChip role={data.role as Role} />
              </div>
            }
            renderList={
              <Dropdown className={dropdownStyle}>
                {Object.keys(ROLE).map((role) => {
                  if (role === data.role) return;
                  return (
                    <li
                      key={role}
                      onClick={() => handleClick(role as Role, data.memberId)}
                      onKeyDown={handleA11yClick(() =>
                        handleClick(role as Role, data.memberId),
                      )}
                    >
                      <RoleChip role={role as Role} />
                    </li>
                  );
                })}
              </Dropdown>
            }
          />
        </>
      );
    },
    width: 80,
  },
  {
    key: "delete",
    Header: () => "멤버 삭제",
    Cell: (data) => {
      const handleDeleteClick = useDeleteClick();

      return (
        <>
          <IcnClose
            className={removeBtnStyle}
            width={20}
            height={20}
            onClick={() => handleDeleteClick(data.memberId)}
            aria-label="멤버 삭제하기"
          />
        </>
      );
    },
    width: 60,
  },
];
