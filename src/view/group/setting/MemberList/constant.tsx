import type { MemberResponse, Role } from "@/app/api/groups/type";
import {
  useDeleteMemberMutation,
  usePatchMemberRoleMutation,
} from "@/app/group/[groupId]/setting/query";
import { IcnCalendarTable, IcnClose } from "@/asset/svg";
import Dropdown from "@/common/component/Dropdown";
import Menu from "@/common/component/Menu/Menu";
import { useBooleanState } from "@/common/hook/useBooleanState";
import { handleA11yClick } from "@/common/util/dom";
import PromptModal from "@/shared/component/PromptModal";
import { ROLE } from "@/shared/constant/role";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import type { TableDataType } from "@/shared/type/table";
import {} from "@/view/group/index/WithdrawDialog/index.css";
import RoleChip from "@/view/group/setting/MemberList/RoleList/RoleChip";
import {
  useMemberListDispatch,
  useMemberListState,
} from "@/view/group/setting/MemberList/hook";
import {
  removeBtnStyle,
  textStyle,
} from "@/view/group/setting/MemberList/index.css";
import SortIcon from "@/view/user/setting/GroupList/SortIcon";
import { dropdownStyle } from "@/view/user/setting/GroupList/StatusDropdownMenu/index.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
      const groupId = useGetGroupId();
      const { open, isOpen, close } = useBooleanState();
      const [confirmId, setConfirmId] = useState(0);
      const { mutate: patchMutate } = usePatchMemberRoleMutation(+groupId);
      const router = useRouter();

      const handleClick = (role: Role, memberId: number) => {
        if (role === "OWNER") {
          open();
          setConfirmId(memberId);
          return;
        }
        patchMutate({ memberId, role: role as Role });
      };

      const handleConfirm = () => {
        patchMutate({ memberId: confirmId, role: "OWNER" });
        router.push(`/group/${groupId}`);
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
          <PromptModal
            isOpen={isOpen}
            onClose={close}
            title={`${data.nickname}님에게 스터디장을 위임하시겠습니까?`}
            prompt={`하나의 스터디에 스터디장은 한 명만 존재합니다.\n${data.nickname}님을 스터디장으로 위임할 경우, 기존 스터디장은 스터디원이 됩니다.\n그래도 위임하시겠습니까?`}
            confirmText="위임하기"
            onConfirm={handleConfirm}
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
      const { isOpen, open, close } = useBooleanState();
      const groupId = useGetGroupId();
      const { mutate: deleteMutate } = useDeleteMemberMutation(+groupId);

      const handleConfirm = () => {
        deleteMutate(
          { memberId: data.memberId },
          {
            onSuccess: () => {
              setTimeout(() => {
                close();
              }, 1700);
            },
          },
        );
      };

      return (
        <>
          <IcnClose
            className={removeBtnStyle}
            width={20}
            height={20}
            onClick={open}
            aria-label="멤버 삭제하기"
          />
          <PromptModal
            isOpen={isOpen}
            onClose={close}
            title="멤버를 삭제하시겠습니까?"
            prompt={
              "멤버를 삭제해도 해당 멤버의 활동 기록은 지워지지 않습니다.\n멤버를 삭제해도 초대 링크를 통해 다시 초대할 수 있습니다.\n다시 초대할 경우 기존의 활동 데이터와 연동되지 않습니다.\n"
            }
            confirmText="삭제하기"
            onConfirm={handleConfirm}
          />
        </>
      );
    },
    width: 60,
  },
];
