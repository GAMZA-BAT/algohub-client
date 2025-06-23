"use server";
import type { APIResponse } from "@/app/api/type";
import { patchMyInfo, patchPassword } from "@/app/api/users";
import type { PasswordRequest } from "@/app/api/users/type";
import { isHTTPError } from "@/shared/util/error";
import { HTTPError } from "ky";

export const patchMyInfoAction = async (
  formData: FormData,
): Promise<APIResponse> => {
  try {
    await patchMyInfo(formData);
    return {
      status: 200,
    };
  } catch (error) {
    if (error instanceof HTTPError) {
      return await error.response.json();
    }
    throw new Error("Failed patch my info");
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
