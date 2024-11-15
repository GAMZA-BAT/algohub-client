import { z } from "zod";

export const groupSchema = z
  .object({
    image: z.string().nullable(),
    name: z
      .string()
      .min(1, { message: "필수 항목입니다." })
      .max(15, { message: "최대 15자까지 입력할 수 있습니다." }),
    startDate: z.date(),
    endDate: z.date(),
    desc: z.string(),
  })
  .refine((data) => data.endDate >= data.startDate, {
    message: "종료 일자는 시작 일자보다 나중이어야 합니다.",
    path: ["endDate"],
  });
