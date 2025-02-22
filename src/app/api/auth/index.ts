import {
  kyFormInstance,
  kyJsonInstance,
  kyJsonWithTokenInstance,
} from "@/app/api";
import type {
  SignInRequest,
  reissueTokenRequest,
  tokenResponse,
} from "@/app/api/auth/type";
import { HTTPError } from "ky";
import { logoutAction } from "./actions";

export const postSignUp = async (formData: FormData) => {
  const response = await kyFormInstance
    .post("api/auth/sign-up", {
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
