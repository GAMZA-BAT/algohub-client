import Providers from "@/app/provider";
import Header from "@/shared/component/Header";
import StoreProviders from "@/shared/component/Provider";
import "@/styles/globalStyles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AlgoHub",
  description: "알고리즘 스터디 플랫폼",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Header />
          <StoreProviders>{children}</StoreProviders>
        </Providers>
      </body>
    </html>
  );
}
