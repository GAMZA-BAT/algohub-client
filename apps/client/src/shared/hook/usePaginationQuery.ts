"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useState } from "react";
import type { PaginationResponse } from "@/app/api/type";
import { usePaginationSearchParams } from "./usePaginationSearchParams";

type BasePaginationProps<T> = {
  /** React Query의 queryKey */
  queryKey: (string | number | object)[];
  /** 페이지 번호를 인자로 받아 데이터를 fetching하는 비동기 함수 */
  queryFn: (page: number) => Promise<T>;
};

// URL 동기화를 사용하지 않을 경우의 props
type UrlSyncDisabled = {
  isUrlSync?: false;
  urlQueryKey?: never; // isUrlSync가 false일 때 urlQueryKey 사용 방지
  initialPage?: number;
};

// URL 동기화를 사용할 경우의 props
type UrlSyncEnabled = {
  isUrlSync: true;
  urlQueryKey: string;
  initialPage?: never; // isUrlSync가 true일 때 initialPage 사용 방지
};

export type UsePaginationProps<T> = BasePaginationProps<T> &
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
 * 데이터 fetching과 페이지네이션 상태 관리를 통합한 훅입니다.
 * @param props {UsePaginationProps<T>} 훅 설정 객체
 */
export const usePaginationQuery = <T>({
  queryKey,
  queryFn,
  ...props
}: UsePaginationProps<T>) => {
  const { currentPage, setCurrentPage }: PaginationState = props.isUrlSync
    ? usePaginationSearchParams({ queryKey: props.urlQueryKey }) // URL 동기화
    : useLocalPaginationState(props.initialPage); // 로컬 상태 관리

  const query = useQuery({
    queryKey: [...queryKey, currentPage],
    queryFn: () => queryFn(currentPage - 1),
    placeholderData: keepPreviousData,
  });

  return {
    ...query,
    currentPage,
    setCurrentPage,
    totalPages: (query.data as PaginationResponse)?.totalPages || 1,
  };
}