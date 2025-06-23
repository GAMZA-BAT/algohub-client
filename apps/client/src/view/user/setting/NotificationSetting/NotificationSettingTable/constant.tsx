"use client";

import { useNotificationSettingMutation } from "@/app/[user]/setting/query";
import type { NotificationSettingContent } from "@/app/api/notifications/type";
import ToggleButton from "@/common/component/ToggleButton";
import { handleA11yClick } from "@/common/util/dom";
import type { TableDataType } from "@/shared/type/table";
import clsx from "clsx";
import { useState } from "react";
import { textStyle } from "./index.css";

export const NOTIFICATION_SETTINGS_COLUMNS: TableDataType<NotificationSettingContent>[] =
  [
    {
      key: "allNotifications",
      Header: () => "알림 설정",
      Cell: ({ groupId, allNotifications, ...rest }) => {
        const { mutate } = useNotificationSettingMutation();
        const [isSelected, setIsSelected] = useState(allNotifications);

        const handleOnChange = () => {
          mutate(
            { groupId, allNotifications: !isSelected, ...rest },
            {
              onSuccess: () => setIsSelected(!isSelected),
            },
          );
        };

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
      Cell: ({ groupId, allNotifications, newProblem, ...rest }) => {
        const { mutate } = useNotificationSettingMutation();

        const handleClick = () =>
          allNotifications &&
          mutate({
            groupId,
            newProblem: !newProblem,
            allNotifications,
            ...rest,
          });

        return (
          <p
            className={clsx(textStyle({ isSelected: allNotifications }))}
            onClick={handleClick}
            onKeyDown={handleA11yClick(handleClick)}
            aria-label={`문제 등록 알림 ${newProblem ? "끄기" : "켜기"}`}
          >
            {newProblem ? "ON" : "OFF"}
          </p>
        );
      },
      width: 60,
    },
    {
      key: "newSolution",
      Header: () => "풀이 등록",
      Cell: ({ groupId, allNotifications, newSolution, ...rest }) => {
        const { mutate } = useNotificationSettingMutation();

        const handleClick = () =>
          allNotifications &&
          mutate({
            groupId,
            newSolution: !newSolution,
            allNotifications,
            ...rest,
          });

        return (
          <p
            className={clsx(textStyle({ isSelected: allNotifications }))}
            onClick={handleClick}
            onKeyDown={handleA11yClick(handleClick)}
            aria-label={`풀이 등록 알림 ${newSolution ? "끄기" : "켜기"}`}
          >
            {newSolution ? "ON" : "OFF"}
          </p>
        );
      },
      width: 100,
    },
    {
      key: "newComment",
      Header: () => "댓글 등록",
      Cell: ({ groupId, allNotifications, newComment, ...rest }) => {
        const { mutate } = useNotificationSettingMutation();

        const handleClick = () =>
          allNotifications &&
          mutate({
            groupId,
            newComment: !newComment,
            allNotifications,
            ...rest,
          });

        return (
          <p
            className={clsx(textStyle({ isSelected: allNotifications }))}
            onClick={handleClick}
            onKeyDown={handleA11yClick(handleClick)}
            aria-label={`댓글 등록 알림 ${newComment ? "끄기" : "켜기"}`}
          >
            {newComment ? "ON" : "OFF"}
          </p>
        );
      },
      width: 80,
    },
    {
      key: "newMember",
      Header: () => "신규 회원 가입",
      Cell: ({ groupId, allNotifications, newMember, ...rest }) => {
        const { mutate } = useNotificationSettingMutation();

        const handleClick = () =>
          allNotifications &&
          mutate({ groupId, newMember: !newMember, allNotifications, ...rest });

        return (
          <p
            className={clsx(textStyle({ isSelected: allNotifications }))}
            onClick={handleClick}
            onKeyDown={handleA11yClick(handleClick)}
            aria-label={`신규 회원 가입 알림 ${newMember ? "끄기" : "켜기"}`}
          >
            {newMember ? "ON" : "OFF"}
          </p>
        );
      },
      width: 100,
    },
    {
      key: "deadlineReached",
      Header: () => "마감 임박",
      Cell: ({ groupId, allNotifications, deadlineReached, ...rest }) => {
        const { mutate } = useNotificationSettingMutation();

        const handleClick = () =>
          allNotifications &&
          mutate({
            groupId,
            deadlineReached: !deadlineReached,
            allNotifications,
            ...rest,
          });

        return (
          <p
            className={clsx(textStyle({ isSelected: allNotifications }))}
            onClick={handleClick}
            onKeyDown={handleA11yClick(handleClick)}
            aria-label={`마감 임박 알림 ${deadlineReached ? "끄기" : "켜기"}`}
          >
            {deadlineReached ? "ON" : "OFF"}
          </p>
        );
      },
      width: 80,
    },
  ];
