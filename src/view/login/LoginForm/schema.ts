import z from "zod";

export const loginSchemaMessage = "아이디 혹은 비밀번호를 확인해주세요";
export const loginSchema = z.object({
  identifier: z.string().min(1, { message: loginSchemaMessage }),
  password: z
    .string()
    .min(8, { message: "영문, 숫자, 특수문자 조합 8~15 자리" })
    .max(15, { message: "영문, 숫자, 특수문자 조합 8~15 자리" }),
});

export const withdrawSchema = z.discriminatedUnion("isOAuthAccount", [
  z.object({
    isOAuthAccount: z.literal(false),
    ...loginSchema.pick({ password: true }).shape,
  }),
  z.object({
    isOAuthAccount: z.literal(true),
    password: z
      .string()
      .min(1, "DELETE를 정확히 입력해주세요")
      .superRefine((val, ctx) => {
        const expectedText = "DELETE";
        const isDeleting = expectedText.startsWith(val);

        // DELETE 입력 중인 경우 - 메세지 없는 에러
        if (isDeleting && val !== expectedText) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "",
          });
          return false;
        }

        // DELETE가 아닌 다른 것을 입력한 경우 - 에러메세지 표시
        if (!isDeleting) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "DELETE를 정확히 입력해주세요",
          });
          return false;
        }

        return val === expectedText;
      }),
  }),
]);
