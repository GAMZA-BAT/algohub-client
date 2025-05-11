import { auth, signOut } from "@/auth";
import { HTTP_ERROR_STATUS, NO_RETRY_STATUSES } from "@/shared/constant/api";
import { logError } from "@/shared/util/error";
import { getAccessToken, setAccessToken } from "@/shared/util/token";
import { isServer } from "@tanstack/react-query";
import type {
  AfterResponseHook,
  BeforeRetryHook,
  HTTPError,
  KyRequest,
} from "ky";
import ky from "ky";
import { signOut as cSignOut, getSession } from "next-auth/react";
import { IS_PROD } from "../../shared/constant/config";
import { reIssueAction } from "./auth/actions";

// beforeRequest
const insertToken = async (request: KyRequest) => {
  const isServer = typeof window === "undefined";
  let accessToken = isServer ? (await auth())?.accessToken : getAccessToken();

  if (!(accessToken || isServer)) {
    accessToken = (await getSession())?.accessToken;
    setAccessToken(accessToken);
  }

  request.headers.set("Authorization", `Bearer ${accessToken}`);
};

// beforeRetry
const insertNewToken: BeforeRetryHook = async ({
  error,
  request,
  retryCount,
}) => {
  if (retryCount === 2) {
    if (isServer) {
      await signOut();
    } else {
      await cSignOut();
      setAccessToken("");
    }
    ky.stop;
    return;
  }
  const { response } = error as HTTPError;
  if (
    response?.status === HTTP_ERROR_STATUS.UNAUTHORIZED ||
    error.message === "Failed to fetch"
  ) {
    const newAccessToken = (await reIssueAction())?.accessToken;
    typeof window !== "undefined" && setAccessToken(newAccessToken);
    request.headers.set("Authorization", `Bearer ${newAccessToken}`);
  }
};
const handleAbortRetryError: BeforeRetryHook = async ({
  request,
  retryCount,
}) => {
  if (retryCount === 2 && request.headers.get("AbortRetryError")) {
    throw new Error("AbortRetryError");
  }
};

const handleErrorResponse: AfterResponseHook = async (
  request,
  _option,
  response,
) => {
  const status = response.status;
  const shouldRetry = !NO_RETRY_STATUSES.includes(status);

  if (!response.ok) {
    const clonedResponse = response.clone();
    const errorData = (await clonedResponse.json())?.error;

    logError({
      request,
      status,
      errorData,
    });
    if (!shouldRetry) request.headers.append("AbortRetryError", "true");
  }
  return response;
};
const RETRY = 2;

const prefixUrl = IS_PROD
  ? process.env.NEXT_PUBLIC_HOST
  : process.env.NEXT_PUBLIC_RC_HOST;

export const kyJsonInstance = ky.create({
  prefixUrl,
  headers: {
    "Content-Type": "application/json",
  },
  hooks: {
    beforeRetry: [handleAbortRetryError],
    afterResponse: [handleErrorResponse],
  },
});

export const kyJsonWithTokenInstance = ky.create({
  prefixUrl,
  headers: {
    "Content-Type": "application/json",
  },
  hooks: {
    beforeRequest: [insertToken],
    beforeRetry: [insertNewToken],
  },
  retry: RETRY,
});

export const kyFormInstance = ky.create({
  prefixUrl,
  hooks: {
    beforeRetry: [handleAbortRetryError],
    afterResponse: [handleErrorResponse],
  },
});

export const kyFormWithTokenInstance = ky.create({
  prefixUrl,
  hooks: {
    beforeRequest: [insertToken],
    beforeRetry: [insertNewToken],
  },
  retry: RETRY,
});
