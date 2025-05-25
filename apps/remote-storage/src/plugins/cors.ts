import fastifyCors from "@fastify/cors";
import fp from "fastify-plugin";

const allowOrigins = [
  "http://localhost:3000",
  "https://algohub.kr",
  "https://rc.algohub.kr",
];

export default fp(
  async (app) => {
    app.register(fastifyCors, {
      origin: (org, callback) => {
        const hostname = new URL(org ?? "").hostname;

        if (
          process.env.NODE_ENV === "development" &&
          hostname === "localhost"
        ) {
          callback(null, true);
          return;
        }

        if (allowOrigins.includes(hostname)) {
          callback(null, true);
          return;
        }

        callback(new Error("Not allowed"), false);
      },
    });
  },
  { name: "app.cors" },
);
