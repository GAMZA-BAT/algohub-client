import ky from "ky";

export const kyInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_HOST,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QGVtYWlsLmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3MzE0ODAzMTN9.cruEsS4OAKAVbOuKe5dCvLlHQDwidU9dL4rMTZNh2uE",
  },
});

export const kyFileInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_HOST,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QGVtYWlsLmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3MzE0ODAzMTN9.cruEsS4OAKAVbOuKe5dCvLlHQDwidU9dL4rMTZNh2uE",
  },
});
