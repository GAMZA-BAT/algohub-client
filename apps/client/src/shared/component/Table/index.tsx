"use client";
import type { TableDataType } from "@/shared/type/table";
import clsx from "clsx";
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
  /** 원본 데이터 배열 */
  rows: T[];
  /** 테이블 메타데이터(행, 열) 배열 */
  cols: TableDataType<T>[];

  wrapperClassName?: string;
  tableClassName?: string;
  captionClassName?: string;
  theadClassName?: string;
  thClassName?: string;
  /** tbody의 tr만 적용. thead의 tr은 적용되지 않음 */
  trClassName?: string;
  tdClassName?: string;
  /** 행 호버 동기화 인덱스 */
  hoveredRowIndex?: number | null;
  /** 행 호버 변경 핸들러 */
  onRowHoverChange?: (rowIndex: number | null) => void;
};

export const DataTable = <T,>({
  title,
  rows,
  cols,
  wrapperClassName,
  tableClassName,
  captionClassName,
  theadClassName,
  thClassName,
  trClassName,
  tdClassName,
  hoveredRowIndex,
  onRowHoverChange,
}: DataTableProps<T>) => {
  return (
    <div className={clsx(wrapperStyle, wrapperClassName)}>
      <table className={clsx(tableClassName, tableStyle)}>
        {title && (
          <caption className={clsx(captionClassName, tableCaptionStyle)}>
            {title}
          </caption>
        )}
        <Header
          columns={cols}
          theadClassName={theadClassName}
          thClassName={thClassName}
        />
        <Body
          rows={rows}
          cols={cols}
          trClassName={trClassName}
          tdClassName={tdClassName}
          hoveredRowIndex={hoveredRowIndex}
          onRowHoverChange={onRowHoverChange}
        />
      </table>
    </div>
  );
};
