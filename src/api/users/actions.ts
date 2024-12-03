"use server";

import type { loginSchema } from "@/view/login/LoginForm/schema";
import { AuthError } from "next-auth";
import type { z } from "zod";
import { signIn } from "../../auth";
import { DEFAULT_LOGIN_REDIRECT } from "../../routes";

export const loginAction = async (values: z.infer<typeof loginSchema>) => {
  try {
    await signIn("credentials", {
      ...values,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    return { success: "Successfully logged in!" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": {
          return { error: "Invalid credentials!" };
        }
        default: {
          return { error: "Something went wrong!" };
        }
      }
    }

    throw error; // AuthError가 아닐 경우 다른 try catch로 보내주기 위함
  }
};
