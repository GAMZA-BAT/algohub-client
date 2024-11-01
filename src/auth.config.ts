import { postSignin } from "@/api/user/signin";
import { loginSchema } from "@/view/login/LoginForm/schema";
import type { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";

export default {
  providers: [
    credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { data } = validatedFields;

          const user = await postSignin(data);
          if (!user) return null;
          return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
