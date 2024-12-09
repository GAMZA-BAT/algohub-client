"use server";

import { patchGroupInfo } from "@/app/api/groups";
import { revalidateTag } from "next/cache";

export const editGroup = async (groupId: number, formData: FormData) => {
  try {
    await patchGroupInfo(groupId, formData);

    revalidateTag("groupInfo");
  } catch {
    throw new Error("fail to patch info");
  }
};
