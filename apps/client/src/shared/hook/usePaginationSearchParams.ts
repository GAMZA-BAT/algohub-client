"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

type UsePaginationSearchParamsProps = {
  queryKey: string;
};

type UsePaginationSearchParamsReturn = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

export const usePaginationSearchParams = ({
  queryKey,
}: UsePaginationSearchParamsProps): UsePaginationSearchParamsReturn => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = useMemo(() => {
    const pageFromUrl = searchParams.get(queryKey);
    return pageFromUrl ? Number(pageFromUrl) : 1;
  }, [searchParams, queryKey]);

  const setCurrentPage = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(queryKey, String(page));
      router.replace(`${pathname}?${params.toString()}`);
    },
    [pathname, queryKey, router, searchParams],
  );

  return { currentPage, setCurrentPage };
};
