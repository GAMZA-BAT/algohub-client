import fastify from "fastify";

export const initApp = () => {
  const app = fastify();

  /** configuring fastify */

  return {
    app,
  };
};
