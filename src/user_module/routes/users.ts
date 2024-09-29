import { Request, Response, Application } from 'express';
import userController from './../controllers/users'

const routes = (app: Application) => {
  const userRoute = 'users';

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript + Node.js + Express!');
  });
  app.get(`/${userRoute}`, userController.users);
  app.get(`/${userRoute}/:id`, userController.user);

  return app;
};

export default routes;
