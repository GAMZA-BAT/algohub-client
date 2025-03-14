import { auth } from "@/auth";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { getAccessToken, setAccessToken } from "@/shared/util/token";
import type { BeforeRetryHook, HTTPError, KyRequest } from "ky";
import ky from "ky";
import { getSession } from "next-auth/react";
import { reIssueAction } from "./auth/actions";

const insertToken = async (request: KyRequest) => {
  const isServer = typeof window === "undefined";
  let accessToken = isServer ? (await auth())?.accessToken : getAccessToken();

  if (!(accessToken || isServer)) {
    accessToken = (await getSession())?.accessToken;
    setAccessToken(accessToken);
  }

  request.headers.set("Authorization", `Bearer ${accessToken}`);
};
const insertNewToken: BeforeRetryHook = async ({
  error,
  request,
  retryCount,
}) => {
  if (retryCount === 2) {
    // signOut(); reIssueAction에서 로그아웃 처리
    ky.stop;
  }
  const { response } = error as HTTPError;
  if (response?.status === HTTP_ERROR_STATUS.UNAUTHORIZED) {
    const newAccessToken = (await reIssueAction())?.accessToken;
    typeof window !== "undefined" && setAccessToken(newAccessToken);
    request.headers.set("Authorization", `Bearer ${newAccessToken}`);
  }
};
const RETRY = 2;

const prefixUrl =
  process.env.NEXT_PUBLIC_APP_ENV === "production"
    ? process.env.NEXT_PUBLIC_HOST
    : process.env.NEXT_PRIVATE_HOST;

export const kyJsonInstance = ky.create({
  prefixUrl,
  headers: {
    "Content-Type": "application/json",
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
});

export const kyFormWithTokenInstance = ky.create({
  prefixUrl,
  hooks: {
    beforeRequest: [insertToken],
    beforeRetry: [insertNewToken],
  },
  retry: RETRY,
});
