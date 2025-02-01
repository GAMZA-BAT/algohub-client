import { auth } from "@/auth";
import { getAccessToken, setAccessToken } from "@/shared/util/token";
import type { KyRequest } from "ky";
import ky from "ky";
import { getSession } from "next-auth/react";

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
const RETRY = 2;

export const kyPublicInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_HOST,
  headers: {
    "Content-Type": "application/json",
  },
});

export const kyInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_HOST,
  headers: {
    "Content-Type": "application/json",
  },
  hooks: {
    beforeRequest: [insertToken],
  },
  retry: RETRY,
});

export const kyBaseInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_HOST,
});

export const kyFileBaseInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_HOST,
});
export const kyFileInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_HOST,
  hooks: {
    beforeRequest: [insertToken],
  },
  retry: RETRY,
});
