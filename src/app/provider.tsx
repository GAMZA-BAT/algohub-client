"use client";

import ToastProvider from "@/common/component/Toast";
import JotaiProvider from "@/shared/component/Provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        {children}
        <ToastProvider />
      </JotaiProvider>
    </QueryClientProvider>
  );
};

export default Providers;
