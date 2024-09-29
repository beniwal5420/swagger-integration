import express, { Request, Response } from 'express';
import modules from './modules';
const app = express();
const port: number = 3000;

modules(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
