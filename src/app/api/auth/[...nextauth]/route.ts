import { postReissueToken } from "@/app/api/auth";
import { getMyInfo } from "@/app/api/users";
import { HTTPError } from "ky";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import type { AdapterUser } from "../../../../../next-auth";

// 컴포넌트에서 auth()를 통해 불러와 사용할 session 데이터를 수정할 수 있음
export const { GET, POST } = NextAuth((req) => {
  const code = req?.url.split("?code=").at(-1);

  return {
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ],
    callbacks: {
      async jwt({ token, user, account, profile }) {
        /**
         * if (account?.provider === "github" && !!code) {
          const { accessToken, refreshToken } = await kyPublicInstance
            .post<{ accessToken: string; refreshToken: string }>(
              `api/oauth/github/sign-in?code=${code}`,
            )
            .json();

          console.log(accessToken, refreshToken);

          return token;
        }
         */

        if (user) {
          token.user = user as AdapterUser;
          token.accessToken = user.accessToken;
          token.refreshToken = user.refreshToken;
          token.accessTokenExpires = Math.floor(Date.now() / 1000) + 25 * 60; // 25분마다 갱신
        }

        try {
          const user = await getMyInfo(token.accessToken);
          token.user = user as AdapterUser;
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
    debug: true,
    session: { strategy: "jwt" },
    secret: process.env.AUTH_SECRET,
  };
}).handlers;
