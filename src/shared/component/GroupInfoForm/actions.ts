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

  revalidatePath("/wuzoo");

  redirect("/wuzoo");
};
