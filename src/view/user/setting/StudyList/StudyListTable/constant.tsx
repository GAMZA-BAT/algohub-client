import { useVisibilityMutation } from "@/app/[user]/setting/query";
import { IcnBtnPin, IcnCalendarTable } from "@/asset/svg";
import {
  tableCellTextStyle,
  withdrawTextStyle,
} from "@/shared/component/Table/TableElements/index.css";
import { pinStyle } from "@/shared/component/Table/index.css";
import type { TableDataType } from "@/shared/type/table";
import { visibilityBtnStyle } from "@/view/user/setting/StudyList/StudyListTable/index.css";
import { format } from "date-fns";
import SortIcon from "../SortIcon";
import StatusDropdownMenu from "../StatusDropdownMenu";
import { textStyle } from "../StatusDropdownMenu/index.css";
import StatusIcon from "../StatusIcon";
import { useStudyListDispatch, useStudyListState } from "./hook";
import type { StudyListType } from "./type";

export const STUDY_LIST_COLUMNS: TableDataType<StudyListType>[] = [
  {
    key: "isBookmarked",
    Header: () => {
      const dispatch = useStudyListDispatch();
      const state = useStudyListState();
      const direction = state.sortCriteria.find(
        (c) => c.key === "isBookmarked",
      )?.order;
      return (
        <>
          <IcnBtnPin
            aria-label="즐겨찾기"
            width={20}
            height={20}
            className={pinStyle({ active: true })}
          />
          <SortIcon
            direction={direction}
            onClick={() => dispatch({ type: "SET_SORT", key: "isBookmarked" })}
          />
        </>
      );
    },
    Cell: ({ isBookmarked }) => (
      <IcnBtnPin
        aria-label="이 스터디를 즐겨찾기 설정"
        width={20}
        height={20}
        className={pinStyle({ active: isBookmarked })}
      />
    ),
    width: 30,
    align: "left",
  },
  {
    key: "name",
    Header: () => "그룹명",
    Cell: (data) => data.name,
    width: 100,
    align: "left",
  },
  {
    key: "startDate",
    Header: () => {
      const dispatch = useStudyListDispatch();
      const state = useStudyListState();
      const direction = state.sortCriteria.find(
        (c) => c.key === "startDate",
      )?.order;
      return (
        <>
          <IcnCalendarTable width={20} height={20} />
          <span className={textStyle}>기간</span>
          <SortIcon
            direction={direction}
            onClick={() => dispatch({ type: "SET_SORT", key: "startDate" })}
          />
        </>
      );
    },
    Cell: ({ startDate, endDate }) => {
      const startDateStr = format(startDate, "yyyy-MM-dd");
      const endDateStr = format(endDate, "yyyy-MM-dd");
      return (
        <>
          <time className={tableCellTextStyle} dateTime={startDateStr}>
            {startDateStr}
          </time>{" "}
          ~{" "}
          <time className={tableCellTextStyle} dateTime={endDateStr}>
            {endDateStr}
          </time>
        </>
      );
    },
    width: 120,
  },
  {
    key: "role",
    Header: () => "역할",
    Cell: (data) => (data.isOwner ? "스터디장" : "스터디 멤버"),
    width: 100,
  },
  {
    key: "isPublic",
    Header: () => "공개여부",
    Cell: (data) => {
      const { mutate: visibilityMutate } = useVisibilityMutation(data.id);

      return (
        <button
          onClick={() => visibilityMutate(!data.isVisible)}
          className={visibilityBtnStyle}
        >
          {data.isVisible ? "ON" : "OFF"}
        </button>
      );
    },
    width: 100,
  },
  {
    key: "status",
    Header: () => <StatusDropdownMenu />,
    Cell: (data) => <StatusIcon status={data.status} />,
    width: 100,
  },
  {
    key: "withdraw",
    Header: () => "회원탈퇴",
    Cell: () => <button className={withdrawTextStyle}>회원 탈퇴</button>,
    width: 70,
    align: "right",
  },
];
