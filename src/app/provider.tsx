"use client";

import ToastProvider from "@/common/component/Toast";
import JotaiProvider from "@/shared/component/Provider";
import {
  QueryClient,
  QueryClientProvider,
  isServer,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { ReactNode } from "react";

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

/** 클라이언트에서 동작할 쿼리 클라이언트 */
let browserQueryClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (isServer) {
    /** 서버에서는 항상 클라이언트를 새로 생성. 매 요청마다 새로운 인스턴스를 생성하여 각 사용자가 독립된 데이터를 볼 수 있도록 함 */
    return createQueryClient();
  }
  if (!browserQueryClient) {
    /**
     * 클라이언트에서는 없다면 만들고, 있으면 그대로 반환
     */

    browserQueryClient = createQueryClient();
  }

  return browserQueryClient;
};

const Providers = ({ children }: ProvidersProps) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        {children}
        <ToastProvider />
      </JotaiProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Providers;
