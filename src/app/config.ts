export const IS_RC =
  process.env.NODE_ENV === "production" &&
  process.env.NEXT_PUBLIC_APP_ENV === "rc";

export const IS_PROD =
  process.env.NODE_ENV === "production" &&
  process.env.NEXT_PUBLIC_APP_ENV === "production";

export const IS_LOCAL = process.env.NODE_ENV === "development";