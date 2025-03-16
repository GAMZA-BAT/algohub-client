import { postSignin } from "@/app/api/auth";
import { getMyInfo } from "@/app/api/users";
import { loginSchema } from "@/view/login/LoginForm/schema";
import type { NextAuthConfig, User } from "next-auth";
import credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

export default {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    credentials({
      async authorize(credentials) {
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
      },
    }),
    credentials({
      id: "github-login",
      async authorize(credentials: Partial<User>): Promise<User | null> {
        const { accessToken, refreshToken, ...user } = credentials;
        if (!user) return null;
        if (user.profileImage === "null") user.profileImage = undefined;
        if (user.bjNickname === "null") user.bjNickname = undefined;
        return {
          ...user,
          accessToken: accessToken!,
          refreshToken: refreshToken!,
        };
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
