"use client";

import { useSelectedLayoutSegment } from "next/navigation";

type Props = {
  children: React.ReactNode;
  me: React.ReactNode;
  profile: React.ReactNode;
  isMe: boolean;
};

export default function UserLayoutClient({
  children,
  me,
  profile,
  isMe,
}: Props) {
  const segment = useSelectedLayoutSegment();
  // /[user]/setting 에 들어왔다면?
  // segment === "setting"
  if (segment) return children; // 기존의 page.tsx파일 렌더링
  return <>{isMe ? me : profile}</>; // 새로 만든 me, profile의 page.tsx 렌더링
}
