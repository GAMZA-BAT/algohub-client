"use server";

import { signIn, signOut } from "@/auth";
import {
  type loginSchema,
  loginSchemaMessage,
} from "@/view/login/LoginForm/schema";
import { HTTPError } from "ky";
import { AuthError, type Session } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect";
import type { z } from "zod";
import { deleteSignOut, postReissueToken } from ".";

export const loginAction = async (values: z.infer<typeof loginSchema>) => {
  try {
    await signIn("credentials", {
      ...values,
    });
    return { success: "Successfully logged in!" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CallbackRouteError":
        case "CredentialsSignin": {
          return { error: loginSchemaMessage };
        }
        default: {
          return { error: "Something went wrong!" };
        }
      }
    }

    throw error; // AuthError가 아닐 경우 다른 try catch로 보내주기 위함
  }
};

export const logoutAction = async () => {
  try {
    await deleteSignOut();
    await signOut();
  } catch (error) {
    if (isRedirectError(error)) {
      throw error; // AuthError가 아닐 경우 다른 try catch로 보내주기 위함
    }
  }
};

export const reIssueAction = async (session: Session) => {
  try {
    const newToken = await postReissueToken({
      expiredAccessToken: session.accessToken,
      refreshToken: session.refreshToken,
    });
    return newToken;
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 401) {
      await signOut({ redirectTo: "/login" });
    }
    throw error;
  }
};
