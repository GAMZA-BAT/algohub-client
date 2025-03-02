import { postSignin } from "@/app/api/auth";
import { getMyInfo } from "@/app/api/users";
import { loginSchema } from "@/view/login/LoginForm/schema";
import type { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import type { tokenResponse } from "./app/api/auth/type";

export default {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    credentials({
      async authorize(credentials) {
        try {
          const validatedFields = loginSchema.safeParse(credentials);
          if (!validatedFields.success) return null;

          const { data } = validatedFields;
          const { accessToken, refreshToken } = await postSignin(data);
          const user = await getMyInfo(accessToken);
          if (!user) return null;

          return {
            ...user,
            accessToken,
            refreshToken,
          };
        } catch (_error) {
          return null;
        }
      },
    }),
    credentials({
      id: "github-login",
      async authorize(credentials) {
        const { accessToken, refreshToken } = credentials as tokenResponse;
        const user = await getMyInfo(accessToken);
        if (!user) return null;

        return {
          ...user,
          accessToken,
          refreshToken,
        };
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
