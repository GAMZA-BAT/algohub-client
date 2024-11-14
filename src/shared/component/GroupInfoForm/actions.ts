"use server";

import { postCreateGroup } from "@/api/group";
import { groupSchema } from "@/api/group/schema";
import type { GroupRequest } from "@/api/group/type";
import type { z } from "zod";

export const createGroup = async (formData: z.infer<typeof groupSchema>) => {
  const validateForm = groupSchema.safeParse(formData);

  if (!validateForm.success) return;

  const data: GroupRequest = {
    request: {
      name: formData.name,
      introduction: formData.introduction,
      startDate: formData.startDate.toISOString().slice(0, 10),
      endDate: formData.endDate.toISOString().slice(0, 10),
    },
    profileImage: formData.profileImage,
  };

  try {
    const response = await postCreateGroup(data);

    return response;
  } catch {
    throw new Error("fail to create group");
  }
};
