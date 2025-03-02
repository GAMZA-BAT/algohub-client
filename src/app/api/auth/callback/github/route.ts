// app/api/auth/callback/custom-oauth/route.ts
import { kyJsonInstance } from "@/app/api";
import { getMyInfo } from "@/app/api/users";
import { signIn } from "@/auth";
import { type NextRequest, NextResponse } from "next/server";
import type { tokenResponse } from "../../type";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { error: "Authorization code not found" },
      { status: 400 },
    );
  }

  const tokens = await kyJsonInstance
    .post<tokenResponse>(`api/oauth/github/sign-in?code=${code}`)
    .json();
  const user = await getMyInfo(tokens.accessToken);

  await signIn("github-login", {
    ...tokens,
    ...user,
    redirectTo: `/${user?.nickname}`,
  });
}
