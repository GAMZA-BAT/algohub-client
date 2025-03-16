import {
  kyFormInstance,
  kyJsonInstance,
  kyJsonWithTokenInstance,
} from "@/app/api";
import type {
  SignInRequest,
  reissueTokenRequest,
  resetPasswordRequest,
  tokenResponse,
} from "@/app/api/auth/type";
import { HTTPError } from "ky";
import { notFound } from "next/navigation";
import { logoutAction } from "./actions";

export const postSignUp = async (token: string, formData: FormData) => {
  const response = await kyFormInstance
    .post(`api/auth/sign-up?token=${token}`, {
      body: formData,
    })
    .json();

  return response;
};

export const postSignin = async (formData: SignInRequest) => {
  const response = await kyJsonInstance
    .post<tokenResponse>("api/auth/sign-in", {
      json: formData,
    })
    .json();

  return response;
};

export const postReissueToken = async (requestData: reissueTokenRequest) => {
  let response = null;
  try {
    response = await kyJsonInstance
      .post<tokenResponse>("api/auth/reissue-token", {
        json: requestData,
      })
      .json();
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 401) {
      await logoutAction();
    }
    throw error;
  }
  return response;
};

export const deleteSignOut = async () => {
  const response = await kyJsonWithTokenInstance
    .delete("api/auth/sign-out")
    .json();

  return response;
};

export const postEmailForResetPassword = async (email: string) => {
  const response = await kyJsonInstance
    .post(`api/auth/reset-password?email=${email}`)
    .json();

  return response;
};

export const patchResetPassword = async (requestData: resetPasswordRequest) => {
  const response = await kyJsonInstance
    .patch("api/auth/reset-password", {
      json: requestData,
    })
    .json();

  return response;
};

export const getCheckPasswordToken = async (token: string) => {
  const response = await kyJsonInstance
    .get(`api/auth/check-password-token?token=${token}`)
    .json();

  return response;
};

export const postVerifyEmail = async (email: string) => {
  const response = await kyJsonInstance
    .post("api/auth/verify/send", {
      json: {
        email,
      },
    })
    .json();

  return response;
};

export const getVerifyEmail = async (token: string) => {
  try {
    await kyJsonInstance.get(`api/auth/verify?token=${token}`).json();
  } catch (_error) {
    notFound();
  }
};
