import type { StudyGroupResponse } from "@/api/group/type";
import type { Status } from "@/view/user/index/type";
import type { ComponentProps, FC } from "react";
import type TableHead from "../component/Table/TableElements/TableHead";

export type TableType = "스터디리스트" | "알림설정";

export type TableDataType<T> = {
  key: keyof T | string | undefined;
  Header: FC;
  Cell: FC<T>;
  props?: ComponentProps<typeof TableHead>;
  align?: "left" | "right";
  width: number;
};

export type StudyListType = {
  status: Status;
  startDate: Date;
  endDate: Date;
} & Omit<
  StudyGroupResponse,
  | "introduction"
  | "groupImage"
  | "ownerNickname"
  | "id"
  | "startDate"
  | "endDate"
>;

export type AlarmSettingsDataType = {
  alarm: boolean;
  groupName: string;
  problemRegistration: boolean;
  solutionRegistration: boolean;
  commentRegistration: boolean;
  newMemberAllowed: boolean;
  endDateImminent: boolean;
};
