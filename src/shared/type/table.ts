import type { FC } from "react";

export type TableDataType<T> = {
  key: keyof T | string | undefined;
  Header: FC;
  Cell: FC<T>;
  align?: "left" | "right";
  width: number;
};
