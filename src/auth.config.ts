import { postSignin } from "@/app/api/auth";
import { getMyInfo } from "@/app/api/users";
import { loginSchema } from "@/view/login/LoginForm/schema";
import type { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";

export default {
  providers: [
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
  ],
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
