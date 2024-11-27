import { kyInstance } from "@/api";
import type { SignInRequest } from "@/api/users/type";

export const postSignin = async (formData: SignInRequest) => {
  const response = await kyInstance
    .post("api/user/sign-in", {
      json: formData,
    })
    .json();

  return response;
};
