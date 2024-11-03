import { kyInstance } from "@/api";
import type { SignInRequest, SignInResponse } from "@/api/user/type";

export const postSignin = async (formData: SignInRequest) => {
  const response = await kyInstance
    .post<SignInResponse>("api/user/sign-in", {
      json: formData,
    })
    .json();

  return response;
};
