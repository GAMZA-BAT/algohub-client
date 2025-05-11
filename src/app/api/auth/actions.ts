"use server";

import { auth, signIn, signOut, update } from "@/auth";
import type { loginSchema } from "@/view/login/LoginForm/schema";
import { HTTPError } from "ky";
import { AuthError, type Session } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import type { z } from "zod";
import { postReissueToken, postSignUp } from ".";
import type { APIResponse } from "../type";

export const signUpAction = async (token: string, formData: FormData) => {
  try {
    await postSignUp(token, formData);
  } catch (_err) {
    throw new Error("fail to sign up");
  }
  redirect("/login");
};

export const loginAction = async (
  values: z.infer<typeof loginSchema>,
): Promise<APIResponse> => {
  try {
    await signIn("credentials", {
      ...values,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CallbackRouteError":
        case "CredentialsSignin": {
          return (await (
            error.cause?.err as HTTPError
          ).response?.json()) as APIResponse;
        }
      }
    }
    throw error; // AuthError가 아닐 경우 다른 try catch로 보내주기 위함
  }

  return {
    status: 500,
    error: "서버에 문제가 발생했어요.",
  };
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

export const logoutAction = async () => {
  try {
    await signOut();
  } catch (error) {
    if (isRedirectError(error)) {
      throw error; // AuthError가 아닐 경우 다른 try catch로 보내주기 위함
    }
  }
};
