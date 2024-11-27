import z from "zod";

export const baseSignupSchema = z.object({
  profile: z.string(),

  id: z.string().email({ message: "이메일 형식이 아닙니다." }),

  password: z
    .string()
    .min(8)
    .max(15)
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*])[a-zA-Z\d~!@#$%^&*]+$/),

  confirmPassword: z.string(),

  nickname: z
    .string()
    .max(16, { message: "닉네임은 16자 이하여야 합니다." })
    .min(3, { message: "닉네임은 3자 이상이여야 합니다." })
    .regex(/^[a-zA-Z0-9]+$/, "닉네임을 입력해주세요."),

  baekjoonId: z
    .string()
    .min(4, { message: "백준 아이디를 확인해주세요" })
    .max(20, { message: "백준 아이디를 확인해주세요" })
    .regex(/^[a-zA-Z0-9_]+$/, "백준 아이디를 확인해주세요"),
});

export const signupSchema = baseSignupSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
    path: ["confirmPassword"],
  },
);
