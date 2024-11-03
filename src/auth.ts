import NextAuth from "next-auth";
import type { AdapterUser } from "../next-auth";
import authConfig from "./auth.config";

// 컴포넌트에서 auth()를 통해 불러와 사용할 session 데이터를 수정할 수 있음
export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/login",
    error: "/error",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user as AdapterUser;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
