"use client";

import ToggleButton from "@/common/component/ToggleButton";
import type { TableDataType } from "@/shared/type/table";
import clsx from "clsx";
import { useState } from "react";
import { textStyle } from "./index.css";
import type { AlarmSettingsDataType } from "./type";

export const ALARM_SETTINGS_COLUMNS: TableDataType<AlarmSettingsDataType>[] = [
  {
    key: "alertSetting",
    Header: () => "알림 설정",
    Cell: ({ alarm }) => {
      const [isSelected, setIsSelected] = useState(alarm);
      const handleOnChange = () => setIsSelected(!isSelected);
      return <ToggleButton isSelected={isSelected} onChange={handleOnChange} />;
    },
    width: 80,
  },
  {
    key: "groupName",
    Header: () => "그룹명",
    Cell: ({ alarm, groupName }) => (
      <p className={clsx(textStyle({ isSelected: alarm }))}>{groupName}</p>
    ),
    width: 120,
  },
  {
    key: "issueRegistration",
    Header: () => "문제 등록",
    Cell: ({ alarm, problemRegistration }) => (
      <p className={clsx(textStyle({ isSelected: alarm }))}>
        {problemRegistration ? "ON" : "OFF"}
      </p>
    ),
    width: 60,
  },
  {
    key: "solutionRegistration",
    Header: () => "풀이 등록",
    Cell: ({ alarm, solutionRegistration }) => (
      <p className={clsx(textStyle({ isSelected: alarm }))}>
        {solutionRegistration ? "ON" : "OFF"}
      </p>
    ),
    width: 100,
  },
  {
    key: "commentRegistration",
    Header: () => "코멘트 등록",
    Cell: ({ alarm, commentRegistration }) => (
      <p className={clsx(textStyle({ isSelected: alarm }))}>
        {commentRegistration ? "ON" : "OFF"}
      </p>
    ),
    width: 80,
  },
  {
    key: "newMember",
    Header: () => "신규 회원 가입",
    Cell: ({ alarm, newMemberAllowed }) => (
      <p className={clsx(textStyle({ isSelected: alarm }))}>
        {newMemberAllowed ? "ON" : "OFF"}
      </p>
    ),
    width: 100,
  },
  {
    key: "leave",
    Header: () => "마감 임박",
    Cell: ({ alarm, endDateImminent }) => (
      <p className={clsx(textStyle({ isSelected: alarm }))}>
        {endDateImminent ? "ON" : "OFF"}
      </p>
    ),
    width: 80,
  },
];
