import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import type { AdapterUser } from "../next-auth";
import { reIssueAction } from "./app/api/auth/actions";
import { getMyInfo } from "./app/api/users";

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

      return token;
    },
    async session({ session, token, trigger }) {
      if (trigger === "update") {
        try {
          const user = await getMyInfo(session.accessToken);
          session.user = user as AdapterUser;
        } catch {
          const { accessToken, refreshToken } = await reIssueAction(session);
          const user = await getMyInfo(accessToken);
          session.user = user as AdapterUser;
          session.accessToken = accessToken;
          session.refreshToken = refreshToken;

          return session;
        }
      } else {
        session.user = token.user;
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
      }

      return session;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
