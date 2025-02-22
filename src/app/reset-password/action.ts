import {
  getCheckPasswordToken,
  patchResetPassword,
  postEmailForResetPassword,
} from "@/app/api/auth";
import type { resetPasswordRequest } from "@/app/api/auth/type";

export const sendEmailForResetPWAction = async (email: string) => {
  try {
    const response = await postEmailForResetPassword(email);

    return response;
  } catch (err) {
    return err;
  }
};

export const checkPasswordTokenAction = async (token: string) => {
  const response = await getCheckPasswordToken(token);

  return response;
};

export const patchResetPasswordAction = async (
  requestData: resetPasswordRequest,
) => {
  const response = await patchResetPassword(requestData);

  return response;
};
