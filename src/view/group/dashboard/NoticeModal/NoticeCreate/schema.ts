import { z } from "zod";

export const registerNoticeSchema = z.object({
  category: z.string().min(1, { message: "필수 항목입니다." }),
  title: z.string().min(1, { message: "필수 항목입니다." }),
  content: z.string().min(1, { message: "필수 항목입니다." }),
});
