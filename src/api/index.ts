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
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QGVtYWlsLmNvbSIsImlhdCI6MTczMzc2NTQ3MywiYXV0aCI6IlJPTEVfVVNFUiIsImxvZ2luSWQiOiI5ZmYwOTJiNy1mODc5LTRkNjEtYTc2My02YThjNDJjMzBjMWEiLCJleHAiOjE3MzM3NjcyNzN9.aOVKPEB7rd4_sTwyejr-Ct1Ah23XfHFCBKKBF_VfYFU",
  },
});

export const kyFileInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_HOST,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QGVtYWlsLmNvbSIsImlhdCI6MTczMzc2NTQ3MywiYXV0aCI6IlJPTEVfVVNFUiIsImxvZ2luSWQiOiI5ZmYwOTJiNy1mODc5LTRkNjEtYTc2My02YThjNDJjMzBjMWEiLCJleHAiOjE3MzM3NjcyNzN9.aOVKPEB7rd4_sTwyejr-Ct1Ah23XfHFCBKKBF_VfYFU",
  },
});
