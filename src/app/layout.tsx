import { auth } from "@/auth";
import Header from "@/shared/component/Header";
import Providers from "@/shared/component/Provider";
import QueryProvider from "@/shared/component/QueryProvider";
import "@/styles/globalStyles.css";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "AlgoHub",
  description: "알고리즘 스터디 플랫폼",
  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="ko">
      <body>
        <Header session={session} />
        <QueryProvider>
          <SessionProvider session={session}>
            <Providers>{children}</Providers>
          </SessionProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
