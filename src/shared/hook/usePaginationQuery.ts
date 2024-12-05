import type { PaginationResponse } from "@/api/type";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type UsePaginationQueryProps<T> = {
  queryKey: (string | number)[];
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
  const [data, setData] = useState<T | null>(null);

  const queryClient = useQueryClient();

  const fetchData = async () => {
    const result = await queryFn(currentPage - 1);
    setData(result);
    setTotalPages((result as PaginationResponse).totalPages || 0);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, queryFn, queryKey, queryClient, totalPages]);

  if (currentPage < totalPages) {
    queryClient.prefetchQuery({
      queryKey: [...queryKey, currentPage],
      queryFn: () => queryFn(currentPage),
    });
  }

  return { data, currentPage, setCurrentPage, totalPages };
};
