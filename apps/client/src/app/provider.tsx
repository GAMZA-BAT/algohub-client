"use client";

import ToastProvider from "@/common/component/Toast";
import { mixpanelTracker } from "@/sdk/mixpanel";
import JotaiProvider from "@/shared/component/Provider";
import QueryProvider from "@/shared/component/QueryProvider";
import RefreshTokenExpireTime from "@/shared/component/RefreshTokenExpireTime";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { type ReactNode, useEffect } from "react";

const BrowserProvider = dynamic(
  () => import("@/shared/component/BrowserProvider/BrowserProvider"),
  {
    ssr: false,
  },
);

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  const { data: session, update } = useSession();
  const { id, email, nickname, bjNickname } = session?.user ?? {};

  useEffect(() => {
    mixpanelTracker.initialize({
      $email: email ?? "",
      $name: nickname ?? "",
      id,
      bjNickname,
    });
  }, [email, nickname, id, bjNickname]);

  return (
    <QueryProvider>
      <RefreshTokenExpireTime session={session} update={update} />
      <BrowserProvider>
        <JotaiProvider>
          {children}
          <ToastProvider />
        </JotaiProvider>
      </BrowserProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryProvider>
  );
};

export default Providers;
