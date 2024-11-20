import ky from "ky";

export const kyInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_HOST,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
});

export const kyFileInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_HOST,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QGVtYWlsLmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3MzE5OTUxNTJ9.k3pW8j3rHEqkrbaiFUJI7igCkYd9V6_NiQwvkR1bxuM",
  },
});
