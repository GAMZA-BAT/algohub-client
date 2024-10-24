import type { MemberResponse } from "@/api/group/type";
import { IcnCalendarTable } from "@/asset/svg";
import type { TableDataType } from "@/shared/type/table";
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
    key: "achivement",
    Header: () => {
      const dispatch = useMemberListDispatch();
      const state = useMemberListState();
      const direction = state?.find((c) => c.key === "achivement")?.order;
      return (
        <>
          <IcnCalendarTable width={20} height={20} />
          <span className={textStyle}>성취도</span>
          <SortIcon
            direction={direction}
            onClick={() => dispatch({ type: "SET_SORT", key: "achivement" })}
          />
        </>
      );
    },
    Cell: (data) => data.achivement,
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
    Cell: (_data) => {
      // TODO: 멤버 삭제 API 넣기
      return <button className={removeBtnStyle}>멤버 삭제</button>;
    },
    width: 60,
  },
];
