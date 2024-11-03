"use server";

import { signIn, signOut } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import type { loginSchema } from "@/view/login/LoginForm/schema";
import { AuthError } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect";
import type { z } from "zod";
import { deleteSignOut } from "./signOut";

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

export const logoutAction = async (accessToken: string) => {
  try {
    await deleteSignOut(accessToken);
    await signOut({
      redirectTo: "/login",
    });
  } catch (error) {
    if (isRedirectError(error)) {
      throw error; // AuthError가 아닐 경우 다른 try catch로 보내주기 위함
    }
    console.warn(error);
    return { error: "Failed to log out. Please try again later." };
  }
};
