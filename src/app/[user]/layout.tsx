import { IcnMy, IcnPlus, IcnSquare } from "@/asset/svg";
import NavBar from "@/shared/component/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AlgoHub 마이페이지",
  description: "특정 유저가 참여한 그룹 리스트를 볼 수 있는 페이지",
};

export default function UserLayout({
  children,
  params: { user },
}: Readonly<{
  children: React.ReactNode;
  params: { user: string };
}>) {
  return (
    <div>
      <NavBar>
        <NavBar.Item
          icon={<IcnSquare width={24} height={24} />}
          mode="fill"
          href={`/${user}`}
        >
          대시보드
        </NavBar.Item>
        <NavBar.Item
          icon={<IcnPlus width={24} height={24} />}
          mode="stroke"
          href={`/${user}/create-group`}
        >
          그룹 만들기
        </NavBar.Item>
        <NavBar.Item
          icon={<IcnMy width={24} height={24} />}
          mode="stroke"
          href={`/${user}/setting`}
        >
          마이페이지
        </NavBar.Item>
      </NavBar>
      {children}
    </div>
  );
}
