import { postSignin } from "@/app/api/auth";
import { getMyInfo } from "@/app/api/users";
import { loginSchema } from "@/view/login/LoginForm/schema";
import type { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";

export default {
  providers: [
    credentials({
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { data } = validatedFields;

          const { accessToken, refreshToken } = await postSignin(data);
          const user = await getMyInfo(accessToken);

          if (!user) return null;

          return {
            ...user,
            accessToken: accessToken,
            refreshToken: refreshToken,
          };
        }

        return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
