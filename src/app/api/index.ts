import { auth } from "@/auth";
import ky from "ky";
import { getSession } from "next-auth/react";

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
        const user = await getSession();
        if (user?.user?.accessToken) {
          request.headers.set(
            "Authorization",
            `Bearer ${user.user.accessToken}`,
          );
        }
      },
    ],
  },
});

export const kyFileInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_HOST,
  hooks: {
    beforeRequest: [
      async (request) => {
        const user = await auth();
        if (user?.accessToken) {
          request.headers.set("Authorization", `Bearer ${user.accessToken}`);
        }
      },
    ],
  },
});
