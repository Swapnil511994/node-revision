import clientModule from "./modules/client/index.js";
import express from "express";

export const registerAllModuleRoutes = (app) => {
  const modules = [
    {
      path: "/client",
      config: clientModule,
    },
  ];

  const router = express.Router();

  modules.forEach(({ path, config }) => {
    router.use(path, config);
  });

  app.use(router);
};
