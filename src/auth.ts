import { postReissueToken } from "@/app/api/auth";
import { getMyInfo } from "@/app/api/users";
import authConfig from "@/auth.config";
import { HTTPError } from "ky";
import NextAuth from "next-auth";
import type { AdapterUser } from "../next-auth";

// 컴포넌트에서 auth()를 통해 불러와 사용할 session 데이터를 수정할 수 있음
export const { auth, handlers, signIn, signOut } = NextAuth({
  trustHost: true,
  pages: {
    signIn: "/login",
    error: "/error",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user as AdapterUser;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = Math.floor(Date.now() / 1000) + 25 * 60; // 25분마다 갱신
      }

      try {
        await getMyInfo(token.accessToken);
      } catch (error) {
        if (error instanceof HTTPError && error.response.status === 401) {
          const { accessToken, refreshToken } = await postReissueToken({
            expiredAccessToken: token.accessToken,
            refreshToken: token.refreshToken,
          });
          token.accessToken = accessToken;
          token.refreshToken = refreshToken;
        }
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;

      return session;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
