import NavBar from "@/shared/component/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AlgoHub 마이페이지",
  description: "특정 유저가 참여한 그룹 리스트를 볼 수 있는 페이지",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar>
        <NavBar.Item mode="fill" href="/user">
          대시보드
        </NavBar.Item>
        <NavBar.Item mode="stroke" href="/user/create-group">
          그룹 만들기
        </NavBar.Item>
        <NavBar.Item mode="stroke" href="/user/join-group">
          그룹 가입하기
        </NavBar.Item>
        <NavBar.Item mode="stroke" href="/user/setting">
          마이페이지
        </NavBar.Item>
      </NavBar>
      {children}
    </div>
  );
}
