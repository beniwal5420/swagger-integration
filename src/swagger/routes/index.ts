import { Request, Response, Application } from 'express';
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./../swagger.json";

const routes = (app: Application) => {
  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
  );

  return app;
};

export default routes;
