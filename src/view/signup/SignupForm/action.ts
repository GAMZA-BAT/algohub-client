"use server";

import { postSignUp } from "@/api/users";
import { redirect } from "next/navigation";

export const signUp = async (formData: FormData) => {
  try {
    await postSignUp(formData);
  } catch {
    throw new Error("fail to sign up");
  }

  redirect("/login");
};
