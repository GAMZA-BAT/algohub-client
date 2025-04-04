import { z } from "zod";

export const baseEditSchema = z.object({
  profileImage: z.union([z.string(), z.instanceof(File)]).nullable(),

  nickname: z
    .string()
    .max(16)
    .regex(/^[a-zA-Z가-하0-9]+$/, "닉네임을 입력해주세요."),

  description: z.string(),
});
