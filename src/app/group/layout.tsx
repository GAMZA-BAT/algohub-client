import { IcnCalculator, IcnPlus, IcnSetting, IcnSquare } from "@/asset/svg";
import NavBar from "@/shared/component/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "그룹 페이지",
  description: "알고리즘 스터디 플랫폼 그룹 페이지",
};

export default function GroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar>
        <NavBar.Item
          icon={<IcnSquare width={24} height={24} />}
          mode="fill"
          href="/group"
        >
          대시보드
        </NavBar.Item>
        <NavBar.Item
          icon={<IcnPlus width={16} height={16} />}
          mode="stroke"
          href="/group/solved-list"
        >
          문제 리스트
        </NavBar.Item>
        <NavBar.Item
          icon={<IcnCalculator width={20} height={20} />}
          mode="stroke"
          href="/group/my-solved"
        >
          내가 푼 문제
        </NavBar.Item>
        <NavBar.Item
          icon={<IcnSetting width={16} height={16} />}
          mode="stroke"
          href="/group/setting"
        >
          스터디 관리
        </NavBar.Item>
      </NavBar>
      {children}
    </main>
  );
}
