const BrowserProvider = dynamic(() => import("@/app/browserProvider"), {
  ssr: false,
});

import Header from "@/shared/component/Header";
import Providers from "@/shared/component/Provider";
import "@/styles/globalStyles.css";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

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
        <BrowserProvider>
          <Header />
          <Providers>{children}</Providers>
        </BrowserProvider>
      </body>
    </html>
  );
}
