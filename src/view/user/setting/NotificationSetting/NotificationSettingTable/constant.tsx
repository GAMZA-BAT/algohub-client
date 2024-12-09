"use client";

import type { NotificationSettingContent } from "@/api/notifications/type";
import ToggleButton from "@/common/component/ToggleButton";
import type { TableDataType } from "@/shared/type/table";
import clsx from "clsx";
import { useState } from "react";
import { textStyle } from "./index.css";

export const NOTIFICATION_SETTINGS_COLUMNS: TableDataType<NotificationSettingContent>[] =
  [
    {
      key: "allNotifications",
      Header: () => "알림 설정",
      Cell: ({ allNotifications }) => {
        const [isSelected, setIsSelected] = useState(allNotifications);
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
      Cell: ({ allNotifications, groupName }) => (
        <p className={clsx(textStyle({ isSelected: allNotifications }))}>
          {groupName}
        </p>
      ),
      width: 120,
    },
    {
      key: "newProblem",
      Header: () => "문제 등록",
      Cell: ({ allNotifications, newProblem }) => (
        <p className={clsx(textStyle({ isSelected: allNotifications }))}>
          {newProblem ? "ON" : "OFF"}
        </p>
      ),
      width: 60,
    },
    {
      key: "newSolution",
      Header: () => "풀이 등록",
      Cell: ({ allNotifications, newSolution }) => (
        <p className={clsx(textStyle({ isSelected: allNotifications }))}>
          {newSolution ? "ON" : "OFF"}
        </p>
      ),
      width: 100,
    },
    {
      key: "newComment",
      Header: () => "코멘트 등록",
      Cell: ({ allNotifications, newComment }) => (
        <p className={clsx(textStyle({ isSelected: allNotifications }))}>
          {newComment ? "ON" : "OFF"}
        </p>
      ),
      width: 80,
    },
    {
      key: "newMember",
      Header: () => "신규 회원 가입",
      Cell: ({ allNotifications, newMember }) => (
        <p className={clsx(textStyle({ isSelected: allNotifications }))}>
          {newMember ? "ON" : "OFF"}
        </p>
      ),
      width: 100,
    },
    {
      key: "deadlineReached",
      Header: () => "마감 임박",
      Cell: ({ allNotifications, deadlineReached }) => (
        <p className={clsx(textStyle({ isSelected: allNotifications }))}>
          {deadlineReached ? "ON" : "OFF"}
        </p>
      ),
      width: 80,
    },
  ];
