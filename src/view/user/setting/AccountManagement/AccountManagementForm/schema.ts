import { z } from "zod";

export const AccountManagementSchema = z
  .object({
    id: z
      .string()
      .min(6)
      .max(12)
      .regex(/^[a-zA-Z0-9]+$/),

    password: z
      .string()
      .min(8)
      .max(15)
      .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*])[a-zA-Z\d~!@#$%^&*]+$/),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
    path: ["confirmPassword"],
  });
