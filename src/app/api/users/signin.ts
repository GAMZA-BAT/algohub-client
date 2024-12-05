import { kyPublicInstance } from "@/app/api";
import type { SignInRequest, SignInResponse } from "@/app/api/users/type";

export const postSignin = async (formData: SignInRequest) => {
  const response = await kyPublicInstance
    .post<SignInResponse>("api/users/sign-in", {
      json: formData,
    })
    .json();
  return response;
};
