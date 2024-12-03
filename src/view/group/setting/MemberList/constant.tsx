import type { MemberResponse } from "@/api/groups/type";
import { useDeleteMemberMutation } from "@/app/group/[groupId]/setting/query";
import { IcnCalendarTable, IcnClose } from "@/asset/svg";
import { useBooleanState } from "@/common/hook/useBooleanState";
import PromptModal from "@/shared/component/PromptModal";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import type { TableDataType } from "@/shared/type/table";
import {} from "@/view/group/index/WithdrawDialog/index.css";
import {
  useMemberListDispatch,
  useMemberListState,
} from "@/view/group/setting/MemberList/hook";
import {
  removeBtnStyle,
  textStyle,
} from "@/view/group/setting/MemberList/index.css";
import SortIcon from "@/view/user/setting/StudyList/SortIcon";

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
      const direction = state?.find((c) => c.key === "joinDate")?.order;
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
      const direction = state?.find((c) => c.key === "achievement")?.order;
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
    Header: () => "역할",
    Cell: (data) => (data.role ? "스터디장" : "스터디 멤버"),
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
            // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
            prompt={`멤버를 삭제해도 해당 멤버의 활동 기록은 지워지지 않습니다.\n멤버를 삭제해도 초대 링크를 통해 다시 초대할 수 있습니다.\n다시 초대할 경우 기존의 활동 데이터와 연동되지 않습니다.\n`}
            confirmText="삭제하기"
            onConfirm={handleConfirm}
          />
        </>
      );
    },
    width: 60,
  },
];
