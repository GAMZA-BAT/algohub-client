"use server";

import { postCommentInput } from "@/app/api/comments";
import { z } from "zod";

const commentSchema = z.object({
  content: z.string(),
});

export const commentAction = async (solutionId: number, content: string) => {
  const validateData = commentSchema.safeParse({
    content,
  });

  if (!validateData.success) return;

  try {
    await postCommentInput(solutionId, content);
  } catch {
    throw new Error("post comment actions failed");
  }
};
