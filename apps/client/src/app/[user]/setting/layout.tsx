import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AlgoHub 마이페이지 - 설정",
  description: "유저의 정보 및 시스템을 설정할 수 있는 페이지",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
