import { z } from "zod";

export const baseEditSchema = z.object({
  profileImage: z.string(),

  nickname: z
    .string()
    .max(16)
    .regex(/^[a-zA-Z가-하0-9]+$/, "닉네임을 입력해주세요."),

  bjNickname: z
    .string()
    .min(4, { message: "백준 아이디를 확인해주세요" })
    .max(20, { message: "백준 아이디를 확인해주세요" })
    .regex(/^[a-zA-Z0-9_]+$/, "백준 아이디를 확인해주세요"),

  description: z.string(),
});
