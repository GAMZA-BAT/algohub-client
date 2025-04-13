import authConfig from "@/auth.config";
import { jwtDecode } from "jwt-decode";
import { HTTPError } from "ky";
import NextAuth from "next-auth";
import type { AdapterUser } from "../next-auth";
import { deleteSignOut, postReissueToken } from "./app/api/auth";
import { getMyInfo } from "./app/api/users";
// 컴포넌트에서 auth()를 통해 불러와 사용할 session 데이터를 수정할 수 있음
export const {
  auth,
  handlers,
  signIn,
  signOut,
  unstable_update: update,
} = NextAuth({
  trustHost: true,
  pages: {
    signIn: "/login",
    error: "/error",
  },
  callbacks: {
    async jwt({ token, user, trigger }) {
      try {
        if (trigger === "signIn") {
          token.user = user as AdapterUser;
          token.accessToken = user.accessToken;
          token.refreshToken = user.refreshToken;
          token.accessTokenExpires = jwtDecode(user.accessToken).exp! * 1000;
        } else if (trigger === "update") {
          if (token.accessTokenExpires - Date.now() < 1000 * 60 * 5) {
            const { accessToken, refreshToken } = await postReissueToken({
              expiredAccessToken: token.accessToken,
              refreshToken: token.refreshToken,
            });
            token.accessToken = accessToken;
            token.refreshToken = refreshToken;
            token.accessTokenExpires = jwtDecode(accessToken).exp! * 1000;
          }
          token.user = (await getMyInfo(token.accessToken)) as AdapterUser;
        }
      } catch (err) {
        if (err instanceof HTTPError) {
          console.warn("auth.ts:", await err.response.json());
        }
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.accessTokenExpires = token.accessTokenExpires;
      session.isOAuthAccount = !token.user.githubName;
      return session;
    },
  },
  events: {
    signOut: async () => {
      try {
        await deleteSignOut();
      } catch (_e) {
        return;
      }
    },
  },
  session: { strategy: "jwt" },
  logger: {
    error: () => {},
  },
  ...authConfig,
});
