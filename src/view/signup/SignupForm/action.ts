"use server";

import { postSignUp } from "@/api/users";

export const signUp = async (formData: FormData) => {
  try {
    await postSignUp(formData);
  } catch {
    throw new Error("fail to sign up");
  }
};
