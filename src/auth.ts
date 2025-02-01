import authConfig from "@/auth.config";
import { jwtDecode } from "jwt-decode";
import NextAuth from "next-auth";
import type { AdapterUser } from "../next-auth";
import { postReissueToken } from "./app/api/auth";
// 컴포넌트에서 auth()를 통해 불러와 사용할 session 데이터를 수정할 수 있음
export const { auth, handlers, signIn, signOut } = NextAuth({
  trustHost: true,
  pages: {
    signIn: "/login",
    error: "/error",
  },
  callbacks: {
    async jwt({ token, user, trigger }) {
      console.log({ trigger });
      try {
        if (trigger === "signIn") {
          token.user = user as AdapterUser;
          token.accessToken = user.accessToken;
          token.refreshToken = user.refreshToken;
          token.accessTokenExpires = jwtDecode(user.accessToken).exp! * 1000;
        } else if (
          trigger === "update" &&
          token.accessTokenExpires - Date.now() < 1000 * 60 * 5
        ) {
          const { accessToken, refreshToken } = await postReissueToken({
            expiredAccessToken: token.accessToken,
            refreshToken: token.refreshToken,
          });
          token.accessToken = accessToken;
          token.refreshToken = refreshToken;
          token.accessTokenExpires = jwtDecode(accessToken).exp! * 1000;
        }
      } catch (err) {
        console.log("err");
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.accessTokenExpires = token.accessTokenExpires;
      return session;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
