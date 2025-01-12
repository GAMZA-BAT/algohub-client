import { z } from "zod";

export const AccountManagementSchema = z
  .object({
    currentPassword: z
      .string()
      .min(8)
      .max(15)
      .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*])[a-zA-Z\d~!@#$%^&*]+$/),

    changePassword: z
      .string()
      .min(8, {
        message: "영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리",
      })
      .max(15, {
        message: "영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리",
      })
      .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*])[a-zA-Z\d~!@#$%^&*]+$/, {
        message: "영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리",
      }),

    confirmPassword: z.string(),
  })
  .refine((data) => data.changePassword === data.confirmPassword, {
    message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
    path: ["confirmPassword"],
  });
