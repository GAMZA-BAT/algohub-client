"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
};

const QueryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [client] = useState(createQueryClient());

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
