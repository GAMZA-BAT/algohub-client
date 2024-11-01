import NextAuth from "next-auth";
import authConfig from "./auth.config";

// 컴포넌트에서 auth()를 통해 불러와 사용할 session 데이터를 수정할 수 있음
export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/login",
    error: "/error",
  },
  callbacks: {
    async signIn({ user, account }) {
      return true;
    },
    async jwt({ token, user }) {
      // 새로운 사용자 정보가 있으면 토큰에 추가
      if (user) {
        token = { ...token, ...user };
      }
      return token;
    },
    async session({ token, session }) {
      // 세션에 토큰 데이터를 포함시킴
      session.user = token;
      return session;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
