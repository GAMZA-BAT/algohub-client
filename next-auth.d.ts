
import "next-auth/jwt";

type UserRole = "OWNER" | "USER";

/**
 * auth.ts에서 정의한 session과 token의 타입을 확장
 * https://authjs.dev/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session {
    token: string
  }
  interface User {
    token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: UserRole;
    token: string;
  }
}

