"use client";

import ToggleButton from "@/common/component/ToggleButton";
import type { AlarmSettingsDataType, TableDataType } from "@/shared/type/table";

export const ALARM_SETTINGS_COLUMNS: TableDataType<AlarmSettingsDataType>[] = [
  {
    key: "alertSetting",
    Header: () => "알림 설정",
    Cell: () => <ToggleButton isSelected onChange={() => {}} />,
    width: 80,
  },
  {
    key: "groupName",
    Header: () => "그룹명",
    Cell: (data) => data.groupName,
    width: 120,
  },
  {
    key: "issueRegistration",
    Header: () => "문제 등록",
    Cell: (data) => (data.problemRegistration ? "ON" : "OFF"),
    width: 100,
  },
  {
    key: "solutionRegistration",
    Header: () => "풀이 등록",
    Cell: (data) => (data.solutionRegistration ? "ON" : "OFF"),
    width: 100,
  },
  {
    key: "commentRegistration",
    Header: () => "코멘트 등록",
    Cell: (data) => (data.commentRegistration ? "ON" : "OFF"),
    width: 100,
  },
  {
    key: "newMember",
    Header: () => "신규 회원 가입",
    Cell: (data) => (data.newMemberAllowed ? "ON" : "OFF"),
    width: 100,
  },
  {
    key: "leave",
    Header: () => "마감 임박",
    Cell: (data) => (data.endDateImminent ? "ON" : "OFF"),
    width: 80,
  },
];
