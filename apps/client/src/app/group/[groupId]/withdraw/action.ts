"use server";

import { revalidatePath } from "next/cache";

export const revalidateUserPage = (nickname: string) => {
  revalidatePath(`/${nickname}`);
};
