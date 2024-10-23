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
