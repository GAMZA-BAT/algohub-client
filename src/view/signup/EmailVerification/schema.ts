import { z } from "zod";

const emailVerificationSchema = z
  .object({
    email: z.string().email({ message: "이메일 형식이 아닙니다." })
  })

export default emailVerificationSchema;