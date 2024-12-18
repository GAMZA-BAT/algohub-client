import type { User } from "next-auth";
import "next-auth/jwt";

interface AdapterUser extends User {
  email: string;
  id: string;
  emailVerified: Date | null;
}
/**
 * auth.ts에서 정의한 session과 token의 타입을 확장
 * https://authjs.dev/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session {
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number;
  }
  interface User {
    nickname: string;
    profileImage?: string;
    bjNickname: string;
    description?: string;
    accessToken: string;
    refreshToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: User & AdapterUser;
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number;
  }
}
