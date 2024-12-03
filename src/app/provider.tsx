"use client";

import ToastProvider from "@/common/component/Toast";
import JotaiProvider from "@/shared/component/Provider";
import {
  QueryClient,
  QueryClientProvider,
  isServer,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const BrowserProvider = dynamic(
  () => import("@/shared/component/BrowserProvider/BrowserProvider"),
  {
    ssr: false,
  },
);

type ProvidersProps = {
  children: ReactNode;
};

const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
};

let browserQueryClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (isServer) {
    return createQueryClient();
  }
  if (!browserQueryClient) {
    browserQueryClient = createQueryClient();
  }

  return browserQueryClient;
};

const Providers = ({ children }: ProvidersProps) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserProvider>
        <JotaiProvider>
          {children}
          <ToastProvider />
        </JotaiProvider>
      </BrowserProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Providers;
