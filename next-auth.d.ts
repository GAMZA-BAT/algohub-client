import type { User } from "next-auth";
import "next-auth/jwt";

interface AdapterUser extends User {
  id: string;
  email: string;
  emailVerified: Date | null;
}
/**
 * auth.ts에서 정의한 session과 token의 타입을 확장
 * https://authjs.dev/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session {
    accessToken: string;
  }
  interface User {
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: User & AdapterUser;
    accessToken: string;
  }
}
