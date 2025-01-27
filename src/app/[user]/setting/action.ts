"use server";
import { patchMyInfo, patchPassword } from "@/app/api/users";
import type { PasswordRequest } from "@/app/api/users/type";

export const patchMyInfoAction = async (formData: FormData) => {
  try {
    await patchMyInfo(formData);
  } catch {
    throw new Error("fail to patch my info");
  }
};

export const patchPasswordAction = async ({
  currentPassword,
  newPassword,
}: PasswordRequest) => {
  try {
    await patchPassword({ currentPassword, newPassword });
  } catch {
    throw new Error("fail to patch password");
  }
};
