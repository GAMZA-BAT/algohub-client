import type { PaginationResponse } from "@/app/api/type";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

type UsePaginationQueryProps<T> = {
  queryKey: (string | number | object)[];
  queryFn: (page: number) => Promise<T>;
  initialPage?: number;
};

export const usePaginationQuery = <T>({
  queryKey,
  queryFn,
  initialPage = 1,
}: UsePaginationQueryProps<T>) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

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
};
