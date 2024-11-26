"use client";

import ToggleButton from "@/common/component/ToggleButton";
import type { TableDataType } from "@/shared/type/table";
import clsx from "clsx";
import { useState } from "react";
import { textStyle } from "./index.css";
import type { NotificationSettingsDataType } from "./type";

export const NOTIFICATION_SETTINGS_COLUMNS: TableDataType<NotificationSettingsDataType>[] =
  [
    {
      key: "alertSetting",
      Header: () => "알림 설정",
      Cell: ({ notification }) => {
        const [isSelected, setIsSelected] = useState(notification);
        const handleOnChange = () => setIsSelected(!isSelected);
        return (
          <ToggleButton isSelected={isSelected} onChange={handleOnChange} />
        );
      },
      width: 80,
    },
    {
      key: "groupName",
      Header: () => "그룹명",
      Cell: ({ notification, groupName }) => (
        <p className={clsx(textStyle({ isSelected: notification }))}>
          {groupName}
        </p>
      ),
      width: 120,
    },
    {
      key: "issueRegistration",
      Header: () => "문제 등록",
      Cell: ({ notification, problemRegistration }) => (
        <p className={clsx(textStyle({ isSelected: notification }))}>
          {problemRegistration ? "ON" : "OFF"}
        </p>
      ),
      width: 60,
    },
    {
      key: "solutionRegistration",
      Header: () => "풀이 등록",
      Cell: ({ notification, solutionRegistration }) => (
        <p className={clsx(textStyle({ isSelected: notification }))}>
          {solutionRegistration ? "ON" : "OFF"}
        </p>
      ),
      width: 100,
    },
    {
      key: "commentRegistration",
      Header: () => "코멘트 등록",
      Cell: ({ notification, commentRegistration }) => (
        <p className={clsx(textStyle({ isSelected: notification }))}>
          {commentRegistration ? "ON" : "OFF"}
        </p>
      ),
      width: 80,
    },
    {
      key: "newMember",
      Header: () => "신규 회원 가입",
      Cell: ({ notification, newMemberAllowed }) => (
        <p className={clsx(textStyle({ isSelected: notification }))}>
          {newMemberAllowed ? "ON" : "OFF"}
        </p>
      ),
      width: 100,
    },
    {
      key: "leave",
      Header: () => "마감 임박",
      Cell: ({ notification, endDateImminent }) => (
        <p className={clsx(textStyle({ isSelected: notification }))}>
          {endDateImminent ? "ON" : "OFF"}
        </p>
      ),
      width: 80,
    },
  ];
