import path from "node:path";
import fastifyAutoload from "@fastify/autoload";
import fastify from "fastify";

export const initApp = () => {
  const app = fastify();

  app.register(fastifyAutoload, {
    dir: path.resolve("./dist/plugins"),
  });

  return {
    app,
  };
};
