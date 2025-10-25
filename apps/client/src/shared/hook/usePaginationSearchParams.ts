"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

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

  const [currentPage, _setCurrentPage] = useState(() => {
    return parseSafePositiveInteger(searchParams.get(queryKey));
  });

  useEffect(() => {
    const pageFromUrlQuery = searchParams.get(queryKey);

    if (pageFromUrlQuery !== null) {
      const pageFromUrl = parseSafePositiveInteger(pageFromUrlQuery);
      if (pageFromUrl !== currentPage) {
        _setCurrentPage(pageFromUrl);
      }
    }
  }, [searchParams, queryKey, currentPage]);

  const setCurrentPage = useCallback(
    (page: number) => {
      _setCurrentPage(page);

      const params = new URLSearchParams(searchParams.toString());
      params.set(queryKey, String(page));
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, queryKey, router, searchParams],
  );

  return { currentPage, setCurrentPage };
};

const parseSafePositiveInteger = (value: string | null): number => {
  if (value === null) return 1;
  const parsedNumber = Number.parseInt(value, 10);
  if (Number.isNaN(parsedNumber) || parsedNumber < 1) {
    return 1;
  }
  return parsedNumber;
};
