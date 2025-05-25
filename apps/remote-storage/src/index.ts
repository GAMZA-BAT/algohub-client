import { initApp } from "./initApp";

const HOST = process.env.HOST ?? "0.0.0.0";
const PORT = Number(process.env.PORT ?? "8000");

const { app } = initApp();

await app.listen({ host: HOST, port: PORT });
