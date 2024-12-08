import { kyBaseInstance, kyPublicInstance } from "@/app/api";
import type {
  SignInRequest,
  reissueTokenRequest,
  tokenResponse,
} from "@/app/api/auth/type";

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
  const response = await kyPublicInstance
    .post<tokenResponse>("api/auth/reissue-token", {
      json: requestData,
    })
    .json();

  return response;
};

export const deleteSignOut = async () => {
  const response = await kyBaseInstance.delete("api/auth/sign-out").json();

  return response;
};
