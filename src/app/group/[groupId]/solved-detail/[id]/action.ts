"use server";

import { postCommentInput } from "@/api/comment";
import { z } from "zod";

const commentSchema = z.object({
  solutionId: z.number(),
  content: z.string(),
});

export const commentAction = async (
  formData: z.infer<typeof commentSchema>,
) => {
  const validateData = commentSchema.safeParse({
    solutionId: formData.solutionId,
    content: formData.content,
  });

  if (!validateData.success) return;

  try {
    const response = await postCommentInput(formData);

    return response;
  } catch {
    throw new Error("post comment actions failed");
  }
};
