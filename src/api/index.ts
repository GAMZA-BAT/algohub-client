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
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QGVtYWlsLmNvbSIsImlhdCI6MTczMzY3Mjk0MiwiYXV0aCI6IlJPTEVfVVNFUiIsImxvZ2luSWQiOiJkNjkzOWRlZS02YjA4LTQ1NTYtOGZiZi0yOGZmNjZkNGU2MGMiLCJleHAiOjE3MzM2NzQ3NDJ9.iri3Oxc_dGaLfx-ksB0Ky5w2PbYTXtRhjQJZKDz1t_A",
  },
});

export const kyFileInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_HOST,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QGVtYWlsLmNvbSIsImlhdCI6MTczMzY3Mjk0MiwiYXV0aCI6IlJPTEVfVVNFUiIsImxvZ2luSWQiOiJkNjkzOWRlZS02YjA4LTQ1NTYtOGZiZi0yOGZmNjZkNGU2MGMiLCJleHAiOjE3MzM2NzQ3NDJ9.iri3Oxc_dGaLfx-ksB0Ky5w2PbYTXtRhjQJZKDz1t_A",
  },
});
