import { z } from "zod";

export const registerProblemSchema = z
  .object({
    link: z
      .string({ message: "올바른 BOJ 링크를 입력해주시기 바랍니다." })
      .min(1, { message: "올바른 BOJ 링크를 입력해주시기 바랍니다." }),
    startDate: z.date(),
    endDate: z.date(),
  })
  .refine((data) => data.endDate >= data.startDate, {
    message: "종료 일자는 시작 일자보다 나중이어야 합니다.",
    path: ["endDate"],
  })
  .refine((data) => data.link.includes("acmicpc.net/problem/"), {
    message: "올바른 BOJ 링크를 입력해주시기 바랍니다.",
    path: ["link"],
  });
