import { auth } from "@/auth";
import { getAccessToken } from "@/shared/component/RefreshTokenExpireTime";
import ky from "ky";

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
    beforeRequest: [
      async (request) => {
        const accessToken =
          typeof window === "undefined"
            ? (await auth())?.accessToken
            : getAccessToken();
        if (accessToken) {
          request.headers.set("Authorization", `Bearer ${accessToken}`);
        }
      },
    ],
  },
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
    beforeRequest: [
      async (request) => {
        const accessToken =
          typeof window === "undefined"
            ? (await auth())?.accessToken
            : getAccessToken();
        if (accessToken) {
          request.headers.set("Authorization", `Bearer ${accessToken}`);
        }
      },
    ],
  },
});
