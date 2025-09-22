import ChannelTalk from "@/app/components/ChannelTalk";
import Providers from "@/app/provider";
import { auth } from "@/auth";
import Header from "@/shared/component/Header";
import ModalPathProvider from "@/shared/component/ModalPathProvider";
import "@/styles/globalStyles.css";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "AlgoHub",
  description: "알고리즘 스터디 플랫폼",
  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const session = await auth();
  const cookieStore = cookies();
  const modalPath = cookieStore.get("modal-path")?.value;

  return (
    <html lang="ko">
      <body>
        <SessionProvider session={session}>
          <Providers>
            <ModalPathProvider modalPath={modalPath}>
              <Header session={session} />
              {children}
              {modal}
            </ModalPathProvider>
          </Providers>
          <ChannelTalk />
        </SessionProvider>
      </body>
    </html>
  );
}
