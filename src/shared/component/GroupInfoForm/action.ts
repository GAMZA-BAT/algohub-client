"use server";

import { postCreateGroup } from "@/app/api/groups";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export const createGroupAction = async (formData: FormData) => {
  const session = await auth();
  try {
    const response = await postCreateGroup(formData);

    revalidatePath(`/${session?.user?.nickname}`);

    return response.inviteCode;
  } catch {
    throw new Error("fail to create group");
  }
};
