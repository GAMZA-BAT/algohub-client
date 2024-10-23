import { z } from "zod";

export const baseEditSchema = z.object({
  profile: z.string(),

  nickname: z
    .string()
    .max(16)
    .regex(/^[a-zA-Z가-하0-9]+$/, "닉네임을 입력해주세요."),

  baekjoonId: z
    .string()
    .min(4, { message: "백준 아이디를 확인해주세요" })
    .max(20, { message: "백준 아이디를 확인해주세요" })
    .regex(/^[a-zA-Z0-9_]+$/, "백준 아이디를 확인해주세요"),

  introduction: z.string(),
});
