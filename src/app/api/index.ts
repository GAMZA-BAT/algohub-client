import { auth } from "@/auth";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { getAccessToken, setAccessToken } from "@/shared/util/token";
import type { BeforeRetryHook, HTTPError, KyRequest } from "ky";
import ky from "ky";
import { getSession } from "next-auth/react";
import { reIssueAction } from "./auth/actions";

const insertToken = async (request: KyRequest) => {
  let accessToken =
    typeof window === "undefined"
      ? (await auth())?.accessToken
      : getAccessToken();

  if (!accessToken) {
    accessToken = (await getSession())?.accessToken;
    setAccessToken(accessToken);
  }
  if (accessToken) {
    request.headers.set("Authorization", `Bearer ${accessToken}`);
  }
};
const insertNewToken: BeforeRetryHook = async ({
  error,
  request,
  retryCount,
}) => {
  if (retryCount === 2) {
    // signOut();
    ky.stop;
  }
  const { response } = error as HTTPError;
  if (response?.status === HTTP_ERROR_STATUS.UNAUTHORIZED) {
    const newAccessToken = (await reIssueAction())?.accessToken;
    setAccessToken(newAccessToken);
    request.headers.set("Authorization", `Bearer ${newAccessToken}`);
  }
};
const RETRY = 2;

export const kyJsonInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_HOST,
  headers: {
    "Content-Type": "application/json",
  },
});

export const kyJsonWithTokenInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_HOST,
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
  prefixUrl: process.env.NEXT_PUBLIC_HOST,
});

export const kyFormWithTokenInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_HOST,
  hooks: {
    beforeRequest: [insertToken],
    beforeRetry: [insertNewToken],
  },
  retry: RETRY,
});
