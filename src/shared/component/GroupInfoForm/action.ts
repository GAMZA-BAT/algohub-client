"use server";

import { postCreateGroup } from "@/api/group";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createGroupAction = async (formData: FormData) => {
  try {
    await postCreateGroup(formData);
  } catch {
    throw new Error("fail to create group");
  }

  /** TODO: 실제 user id로 교체 */
  revalidatePath("/wuzoo");

  /** TODO: 실제 user id로 교체 */
  redirect("/wuzoo");
};
