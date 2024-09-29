import { Request, Response, Application } from 'express';
import { userModule } from './../user_module';

const modules = (app: Application) => {
  userModule(app);
};

export default modules;
