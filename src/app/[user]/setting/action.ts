"use server";
import { patchMyInfo, patchPassword } from "@/app/api/users";
import type { PasswordRequest } from "@/app/api/users/type";
import { isHTTPError } from "@/shared/util/error";

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
    const response = await patchPassword({ currentPassword, newPassword });
    return response;
  } catch (error) {
    if (isHTTPError(error)) {
      const customError = { status: error?.response?.status };
      throw new Error(JSON.stringify(customError));
    }
    throw error;
  }
};
