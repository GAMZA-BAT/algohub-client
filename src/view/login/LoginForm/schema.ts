import z from "zod";

export const loginSchemaMessage = "아이디 혹은 비밀번호를 확인해주세요";
export const loginSchema = z.object({
  identifier: z.string().min(1, { message: loginSchemaMessage }),
  password: z
    .string()
    .min(8, { message: "영문, 숫자, 특수문자 조합 8~15 자리" })
    .max(15, { message: "영문, 숫자, 특수문자 조합 8~15 자리" }),
});

export const passwordSchema = loginSchema.pick({ password: true });
export const accountDeleteSchema = z.object({
  password: z
    .string()
    .refine((val) => val === "DELETE", {
      message: "DELETE를 정확하게 입력해 주세요.",
    }),
});
