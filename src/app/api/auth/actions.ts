"use server";

import { auth, signIn, update } from "@/auth";
import {
  type loginSchema,
  loginSchemaMessage,
} from "@/view/login/LoginForm/schema";
import { HTTPError } from "ky";
import { AuthError, type Session } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect";
import type { z } from "zod";
import { postReissueToken } from ".";

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

export const reIssueAction = async () => {
  try {
    const session = (await auth()) as Session;
    const { accessToken: expiredAccessToken, refreshToken } = session;
    const newTokens = await postReissueToken({
      expiredAccessToken,
      refreshToken,
    });
    await update({
      ...session,
      ...newTokens,
    });

    return newTokens;
  } catch (error) {
    if (error instanceof HTTPError) {
      console.warn("reIssueAction:", await error.response.json());
    }
    if (isRedirectError(error)) {
      throw error; // AuthError가 아닐 경우 다른 try catch로 보내주기 위함
    }
  }
};
