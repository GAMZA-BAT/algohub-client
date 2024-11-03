import { postSignin } from "@/api/user/signin";
import { loginSchema } from "@/view/login/LoginForm/schema";
import type { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import { getUser } from "./api/user/user";

export default {
  providers: [
    credentials({
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { data } = validatedFields;

          const { token } = await postSignin(data);
          const user = await getUser(token);
          if (!user) return null;
          return {
            ...user,
            accessToken: token,
          };
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
