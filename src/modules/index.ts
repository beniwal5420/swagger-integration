import { Request, Response, Application } from 'express';
import { userModule } from './../user_module';
import swagger from './../swagger/routes';

const modules = (app: Application) => {
  userModule(app);
  swagger(app);
};

export default modules;
