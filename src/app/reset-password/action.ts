"use server";
import {
  getCheckPasswordToken,
  patchResetPassword,
  postEmailForResetPassword,
} from "@/app/api/auth";
import type { resetPasswordRequest } from "@/app/api/auth/type";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { HTTPError } from "ky";

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
  try {
    const response = await patchResetPassword(requestData);

    return response;
  } catch (error) {
    if (error instanceof HTTPError) {
      switch (error.response.status) {
        case HTTP_ERROR_STATUS.BAD_REQUEST:
          throw new Error("유효하지 않은 요청입니다.");
        case HTTP_ERROR_STATUS.GONE:
          throw new Error("기한이 만료된 요청입니다.");
        case HTTP_ERROR_STATUS.CONFLICT:
          throw new Error("이미 수정 완료된 요청입니다.");
        default:
          throw new Error("비밀번호가 정상적으로 변경되지 않았습니다.");
      }
    }
  }
};
