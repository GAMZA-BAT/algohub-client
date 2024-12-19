import type { PaginationResponse } from "@/app/api/type";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

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
  const [totalPages, setTotalPages] = useState<number>(0);

  const query = useQuery({
    queryKey: [...queryKey, currentPage],
    queryFn: () => queryFn(currentPage),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    setTotalPages((query.data as PaginationResponse)?.totalPages || 0);
  }, [...queryKey]);

  return { ...query, currentPage, setCurrentPage, totalPages };
};
