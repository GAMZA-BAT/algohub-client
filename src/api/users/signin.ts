import { kyInstance } from "@/api";
<<<<<<<< HEAD:src/api/users/signin.ts
import type { SignInRequest, SignInResponse } from "@/api/user/type";
========
import type { SignInRequest } from "@/api/users/type";
>>>>>>>> main:src/api/users/signIn/index.ts

export const postSignin = async (formData: SignInRequest) => {
  const response = await kyInstance
    .post<SignInResponse>("api/user/sign-in", {
      json: formData,
    })
    .json();

  return response;
};
