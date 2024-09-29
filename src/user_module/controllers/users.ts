import { Request, Response, Application } from 'express';
import { getUserList } from './../services/users';

const users = (req: Request, res: Response) => {
  const data = getUserList();
  res.json({
    data,
  });
};

const user = (req: Request, res: Response) => {
  const data = getUserList();
  res.json(data[Number(req.params.id)]);
};

export default {
  users,
  user,
}
