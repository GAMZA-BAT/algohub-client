const BrowserProvider = dynamic(() => import("@/app/browserProvider"), {
  ssr: false,
});
import Providers from "@/app/provider";
import Header from "@/shared/component/Header";
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
          <Providers>
            <Header />
            {children}
          </Providers>
        </BrowserProvider>
      </body>
    </html>
  );
}
