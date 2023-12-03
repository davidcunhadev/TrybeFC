import { Request, Response, Router } from 'express';
import LoginController from '../controller/LoginController';
import Validations from '../middlewares/loginValidations';

const loginController = new LoginController();

const loginRouter = Router();

loginRouter.post(
  '/',
  Validations.validateLogin,
  (req: Request, res: Response) => loginController.executeLogin(req, res),
);

export default loginRouter;
