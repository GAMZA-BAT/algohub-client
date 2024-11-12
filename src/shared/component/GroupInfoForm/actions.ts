"use server";

import { postCreateGroup } from "@/api/group";
import { groupSchema } from "@/api/group/schema";
import type { z } from "zod";

export const createGroup = async (formData: z.infer<typeof groupSchema>) => {
  const data = {
    image: formData.image,
    name: formData.name,
    startDate: formData.startDate.toISOString().slice(0, 10),
    endDate: formData.endDate.toISOString().slice(0, 10),
    introduction: formData.introduction,
  };

  const validateForm = groupSchema.safeParse(data);

  if (!validateForm.success) return;

  try {
    const response = await postCreateGroup(formData);

    /** TODO: group list 조회 무효화 후 최신화 */

    return response;
  } catch {
    throw new Error("fail to create group error");
  }
};
