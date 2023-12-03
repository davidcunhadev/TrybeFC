import { Request, Response, Router } from 'express';
import LoginController from '../controller/LoginController';
import loginValidations from '../middlewares/loginValidations';
import tokenValidations from '../middlewares/validateToken';

const loginController = new LoginController();

const loginRouter = Router();

loginRouter.post(
  '/',
  loginValidations.validateLogin,
  (req: Request, res: Response) => loginController.executeLogin(req, res),
);

loginRouter.get(
  '/role',
  tokenValidations.validateToken,
  (req: Request, res: Response) => LoginController.getUserRole(req, res),
);

export default loginRouter;
