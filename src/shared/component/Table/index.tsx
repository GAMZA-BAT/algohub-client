"use client";
import type { TableDataType, TableType } from "@/shared/type/table";
import Body from "./TableElements/Body";
import Header from "./TableElements/Header";
import {
  tableCaptionStyle,
  tableStyle,
  wrapperStyle,
} from "./TableElements/index.css";

type DataTableProps<T> = {
  /** 좌상단 제목 */
  title?: string;
  /** 테이블 타입: 테이블 내부 요소들에서 recipe()로 스타일 변경 */
  type: TableType;
  /** 원본 데이터 배열 */
  rows: T[];
  /** 테이블 메타데이터(행, 열) 배열 */
  cols: TableDataType<T>[];
};

export const DataTable = <T,>({
  title,
  type,
  rows,
  cols,
}: DataTableProps<T>) => {
  return (
    <div className={wrapperStyle}>
      <table className={tableStyle({ type })}>
        {title && (
          <caption className={tableCaptionStyle({ type })}>{title}</caption>
        )}
        <Header columns={cols} type={type} />
        <Body rows={rows} cols={cols} type={type} />
      </table>
    </div>
  );
};
