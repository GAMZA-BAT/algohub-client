// app/api/auth/callback/custom-oauth/route.ts
import { kyJsonInstance } from "@/app/api";
import { signIn } from "@/auth";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { error: "Authorization code not found" },
      { status: 400 },
    );
  }

  // 추출한 authorization code를 자체 서버로 전달
  const tokens = await kyJsonInstance
    .post<{ accessToken: string; refreshToken: string }>(
      `api/oauth/github/sign-in?code=${code}`,
    )
    .json();

  // 내부 API 호출 결과의 헤더(예: 세션 쿠키 등)를 클라이언트에 전달
  await signIn("github-login", tokens)
}
