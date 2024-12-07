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
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QGVtYWlsLmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3MzM0NjY4NDh9.lDvrqFN5KH8gj7G_ZvmP6uX1N5JKChZA-ZH8LP1DmT0",
  },
});

export const kyFileInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_HOST,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QGVtYWlsLmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3MzM0NjY4NDh9.lDvrqFN5KH8gj7G_ZvmP6uX1N5JKChZA-ZH8LP1DmT0",
  },
});
