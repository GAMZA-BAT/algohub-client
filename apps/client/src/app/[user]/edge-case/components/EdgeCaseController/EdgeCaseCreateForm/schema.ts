import { z } from "zod";

export const edgeCaseCreateFormSchema = z.object({
  problem: z.string().min(1, { message: "문제 번호 및 링크를 입력해주세요." }),
  input: z.string().min(1, { message: "반례 입력을 입력해주세요." }),
  output: z.string().min(1, { message: "반례 출력을 입력해주세요." }),
});
