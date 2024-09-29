import { Application } from 'express';
import routes from './routes/users';

export const userModule = (app: Application) => {
  routes(app);
};
