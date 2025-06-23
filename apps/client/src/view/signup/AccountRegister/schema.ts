import z from "zod";

export const baseSignupSchema = z.object({
  password: z
    .string()
    .min(8)
    .max(15)
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*])[a-zA-Z\d~!@#$%^&*]+$/),

  confirmPassword: z.string(),
  profile: z.union([z.string(), z.instanceof(File)]).nullable(),
  nickname: z
    .string()
    .regex(/[a-zA-Z0-9]/, "사용할 수 없는 닉네임입니다.")
    .max(16, { message: "닉네임은 16자 이하여야 합니다." })
    .min(3, { message: "닉네임은 3자 이상이여야 합니다." })
    .regex(/^[a-zA-Z0-9]+$/, "닉네임을 입력해주세요."),
});

export const signupSchema = baseSignupSchema.refine(
  (data) => {
    const { password, confirmPassword } = data;
    if (password.length < 8) return true;

    // 현재까지 입력된 부분이 일치하는지 확인
    return password.startsWith(confirmPassword);
  },
  {
    message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
    path: ["confirmPassword"],
  },
);

export const passwordCheckSchema = z
  .object({
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
