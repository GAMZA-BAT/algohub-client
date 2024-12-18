"use server";

import { postCreateGroup } from "@/app/api/groups";
import { revalidatePath } from "next/cache";

export const createGroupAction = async (formData: FormData) => {
  try {
    const response = await postCreateGroup(formData);

    /** TODO: 실제 user id로 교체 */
    revalidatePath("/wuzoo");

    return response.inviteCode;
  } catch {
    throw new Error("fail to create group");
  }
};
