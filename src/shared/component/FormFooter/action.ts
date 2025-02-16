"use server";

import { signIn } from "@/auth";

export const requestAuthorizationGithub = async () => {
  const response = await signIn("github", {
    redirect: false,
  });

  return response;
};
