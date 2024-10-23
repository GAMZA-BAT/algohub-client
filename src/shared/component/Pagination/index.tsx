"use client";

import { IcnBtnArrowLeft, IcnBtnArrowRight } from "@/asset/svg";
import { getPageNumbers } from "@/shared/util/pagination";
import clsx from "clsx";
import type { ComponentProps, PropsWithChildren } from "react";
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "./Pagination";
import { iconSizeStyle, navStyle, paginationContentStyle } from "./index.css";

interface PaginationProps extends PropsWithChildren<ComponentProps<"nav">> {
  /** 페이지 수 */
  totalPages: number;
  /** 현재 페이지 번호 `state` */
  currentPage: number;
  /** 현재 페이지 번호 `setState` */
  onPageChange: (page: number) => void;
}

/** 외부에서 `const [page, setPage] = useState(1)`를 정의해서 `props`로 넣어주세요 */
const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
  className,
  ...props
}: PaginationProps) => {
  const pageNumbers = getPageNumbers(totalPages, currentPage);
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={clsx(navStyle, className)}
      {...props}
    >
      <PaginationContent>
        <PaginationItem
          aria-label="이전 페이지로 이동"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          <IcnBtnArrowLeft className={iconSizeStyle} />
        </PaginationItem>

        <div className={paginationContentStyle({ type: "content" })}>
          {pageNumbers.map((page, index) =>
            page === "ellipsis" ? (
              <PaginationEllipsis key={`ellipsis-${index}`} />
            ) : (
              <PaginationItem
                key={page}
                onClick={() => onPageChange(page)}
                isActive={page === currentPage}
              >
                {page}
              </PaginationItem>
            ),
          )}
        </div>

        <PaginationItem
          aria-label="다음 페이지로 이동"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          <IcnBtnArrowRight className={iconSizeStyle} />
        </PaginationItem>
      </PaginationContent>
    </nav>
  );
};

export default Pagination;
