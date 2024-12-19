import { IcnBtnPin, IcnCalendarTable } from "@/asset/svg";
import {
  tableCellTextStyle,
  withdrawTextStyle,
} from "@/shared/component/Table/TableElements/index.css";
import { pinStyle } from "@/shared/component/Table/index.css";
import type { TableDataType } from "@/shared/type/table";
import { visibilityBtnStyle } from "@/view/user/setting/GroupList/GroupListTable/index.css";
import { format } from "date-fns";

import type { GroupSettingsContent } from "@/app/api/groups/type";
import { handleA11yClick } from "@/common/util/dom";
import {
  useBookmarkGroupMutation,
  useGroupListDispatch,
  useGroupListMutation,
  useGroupListState,
} from "@/view/user/setting/GroupList/GroupListTable/hook";
import SortIcon from "@/view/user/setting/GroupList/SortIcon";
import StatusDropdownMenu from "@/view/user/setting/GroupList/StatusDropdownMenu";
import { textStyle } from "@/view/user/setting/GroupList/StatusDropdownMenu/index.css";
import StatusIcon from "@/view/user/setting/GroupList/StatusIcon";

export const STUDY_LIST_COLUMNS: TableDataType<GroupSettingsContent>[] = [
  {
    key: "isBookmarked",
    Header: () => {
      const dispatch = useGroupListDispatch();
      const state = useGroupListState();
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
    Cell: ({ id, isBookmarked }) => {
      const bookmarkGroupMutate = useBookmarkGroupMutation();

      const handleClick = () => bookmarkGroupMutate(id);

      return (
        <IcnBtnPin
          aria-label="이 스터디를 즐겨찾기 설정"
          width={20}
          height={20}
          className={pinStyle({ active: isBookmarked })}
          onClick={handleClick}
          tabIndex={0}
          onKeyDown={handleA11yClick(handleClick)}
        />
      );
    },
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
      const dispatch = useGroupListDispatch();
      const state = useGroupListState();
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
    Cell: (data) => (data.role === "OWNER" ? "스터디장" : "스터디 멤버"),
    width: 100,
  },
  {
    key: "isPublic",
    Header: () => "공개여부",
    Cell: (data) => {
      const visibilityMutate = useGroupListMutation();
      return (
        <button
          onClick={() =>
            visibilityMutate({ groupId: data.id, flag: !data.isVisible })
          }
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
    Cell: (data) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <StatusIcon status={data.status} />
      </div>
    ),
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
