"use server";

import { signIn } from "@/auth";
import type { loginSchema } from "@/view/login/LoginForm/schema";
import { AuthError } from "next-auth";
import { getSession } from "next-auth/react";
import type { z } from "zod";

export const loginAction = async (values: z.infer<typeof loginSchema>) => {
  try {
    await signIn("credentials", {
      ...values,
    });

    const session = await getSession();
    const redirectTo = `/${session?.user?.nickname}`;
    window.location.href = redirectTo;

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
