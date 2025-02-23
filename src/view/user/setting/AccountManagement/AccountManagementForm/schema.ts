import { z } from "zod";

// 1. 기본 스키마 정의 (ZodObject)
const baseAccountManagementSchema = z.object({
  currentPassword: z
    .string()
    .min(8)
    .max(15)
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*])[a-zA-Z\d~!@#$%^&*]+$/),
  changePassword: z
    .string()
    .min(8, { message: "영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리" })
    .max(15, { message: "영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리" })
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*])[a-zA-Z\d~!@#$%^&*]+$/, {
      message: "영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리",
    }),
  confirmPassword: z.string(),
});

// 2. 원래 스키마: refine 적용
export const AccountManagementSchema = baseAccountManagementSchema.refine(
  (data) => data.changePassword === data.confirmPassword,
  {
    message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
    path: ["confirmPassword"],
  },
);

// 3. currentPassword를 생략한 스키마: base 스키마에서 omit 후 refine 재적용
export const resetPasswordSchema = baseAccountManagementSchema
  .omit({ currentPassword: true })
  .refine((data) => data.changePassword === data.confirmPassword, {
    message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
    path: ["confirmPassword"],
  });
