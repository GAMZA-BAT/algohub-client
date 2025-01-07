import z from "zod";

export const loginSchemaMessage = "아이디 혹은 비밀번호를 확인해주세요";
export const loginSchema = z.object({
  email: z.string().min(6).max(18),
  password: z
    .string()
    .min(8, { message: "영문, 숫자, 특수문자 조합 8~15 자리" })
    .max(15, { message: "영문, 숫자, 특수문자 조합 8~15 자리" }),
});

export const passwordSchema = loginSchema.pick({ password: true });
