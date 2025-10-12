"use client";

import type { PaginationResponse } from "@/app/api/type";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { usePaginationSearchParams } from "./usePaginationSearchParams";

type BasePaginationQueryProps<T> = {
  /** React Query의 queryKey */
  queryKey: (string | number | object)[];
  /** 페이지 번호를 인자로 받아 데이터를 fetching하는 비동기 함수 */
  queryFn: (page: number) => Promise<T>;
  /**
   * URL과 페이지네이션 상태를 동기화할지 여부
   * @default true
   */
  isUrlSync?: boolean;
};

// URL 동기화를 사용하지 않을 경우의 props
type UrlSyncDisabled = {
  isUrlSync?: false;
  searchParam?: never;
  initialPage?: number;
};

// URL 동기화를 사용할 경우의 props
type UrlSyncEnabled = {
  isUrlSync: true;
  searchParam?: string;
  initialPage?: never; // isUrlSync가 true일 때 initialPage 사용 방지
};

export type UsePaginationQueryProps<T> = BasePaginationQueryProps<T> &
  (UrlSyncDisabled | UrlSyncEnabled);

type PaginationState = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

/**
 * URL 동기화 없이 useState를 사용하여 페이지네이션 상태를 관리하는 간단한 훅
 */
const useLocalPaginationState = (initialPage = 1): PaginationState => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  return { currentPage, setCurrentPage };
};

/**
 * 데이터 fetching과 페이지네이션 상태 관리를 통합한 훅
 */
export const usePaginationQuery = <T>({
  queryKey,
  queryFn,
  isUrlSync = true,
  initialPage = 1,
  searchParam,
}: UsePaginationQueryProps<T>) => {
  const { currentPage, setCurrentPage }: PaginationState = isUrlSync
    ? usePaginationSearchParams({
        queryKey: searchParam || queryKey[0].toString(),
      }) // URL 동기화
    : useLocalPaginationState(initialPage); // 로컬 상태 관리

  const query = useQuery({
    queryKey: [...queryKey, currentPage],
    queryFn: () => queryFn(currentPage - 1),
    placeholderData: keepPreviousData,
    enabled: Number.isInteger(currentPage) && currentPage > 0,
  });

  const totalPages = (query.data as PaginationResponse)?.totalPages || 0;

  useEffect(() => {
    if (!isUrlSync) {
      return;
    }

    const isValidNumber = Number.isInteger(currentPage) && currentPage > 0;
    if (!isValidNumber) {
      setCurrentPage(1);
      return;
    }

    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  return {
    ...query,
    currentPage,
    setCurrentPage,
    totalPages: (query.data as PaginationResponse)?.totalPages || 1,
  };
};
