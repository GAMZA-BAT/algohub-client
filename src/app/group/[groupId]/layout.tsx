import { getRoleByGroupId } from "@/api/groups";
import {
  IcnCalculator,
  IcnExit,
  IcnPlus,
  IcnSetting,
  IcnSquare,
} from "@/asset/svg";
import NavBar from "@/shared/component/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "그룹 페이지",
  description: "알고리즘 스터디 플랫폼 그룹 페이지",
};

export default async function GroupLayout({
  children,
  params: { groupId },
}: Readonly<{
  children: React.ReactNode;
  params: { groupId: string };
}>) {
  const role = await getRoleByGroupId(+groupId);
  const isOwner = role !== "PARTICIPANT";

  return (
    <main>
      <NavBar>
        <NavBar.Item
          icon={<IcnSquare width={24} height={24} />}
          mode="fill"
          href={`/group/${groupId}`}
        >
          대시보드
        </NavBar.Item>
        <NavBar.Item
          icon={<IcnPlus width={16} height={16} />}
          mode="stroke"
          href={`/group/${groupId}/problem-list`}
        >
          문제 리스트
        </NavBar.Item>
        <NavBar.Item
          icon={<IcnCalculator width={20} height={20} />}
          mode="stroke"
          href={`/group/${groupId}/my-solved`}
        >
          내가 푼 문제
        </NavBar.Item>
        {isOwner && (
          <NavBar.Item
            icon={<IcnSetting width={16} height={16} />}
            mode="stroke"
            href={`/group/${groupId}/setting`}
          >
            스터디 관리
          </NavBar.Item>
        )}
        {!isOwner && (
          <NavBar.Item
            icon={<IcnExit width={24} height={24} />}
            mode="stroke"
            href={`/group/${groupId}/withdraw`}
          >
            스터디 나가기
          </NavBar.Item>
        )}
      </NavBar>
      {children}
    </main>
  );
}
