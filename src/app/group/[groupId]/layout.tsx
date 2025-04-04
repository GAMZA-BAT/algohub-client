import { getRoleByGroupId } from "@/app/api/groups";
import ResponsiveNav from "@/view/group/responsiveNav";
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
      <ResponsiveNav groupId={+groupId} isOwner={isOwner} />
      {children}
    </main>
  );
}
