import { kyBaseInstance, kyInstance, kyPublicInstance } from "@/app/api";
import type {
  SignInRequest,
  reissueTokenRequest,
  tokenResponse,
} from "@/app/api/auth/type";
import { HTTPError } from "ky";
import { signOut } from "next-auth/react";

export const postSignup = async (formData: FormData) => {
  const response = await kyBaseInstance
    .post("api/auth/sign-up", {
      body: formData,
    })
    .json();

  return response;
};

export const postSignin = async (formData: SignInRequest) => {
  const response = await kyPublicInstance
    .post<tokenResponse>("api/auth/sign-in", {
      json: formData,
    })
    .json();

  return response;
};

export const postReissueToken = async (requestData: reissueTokenRequest) => {
  let response = null;
  try {
    response = await kyPublicInstance
      .post<tokenResponse>("api/auth/reissue-token", {
        json: requestData,
      })
      .json();
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 401) {
      await signOut({ redirectTo: "/login" });
    }
    throw error;
  }
  return response;
};

export const deleteSignOut = async () => {
  const response = await kyInstance.delete("api/auth/sign-out").json();

  return response;
};
