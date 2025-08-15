import { z } from "zod";

export const emailSchema = z.object({
  email: z.string().email("올바른 이메일 형식이 아닙니다"),
});
