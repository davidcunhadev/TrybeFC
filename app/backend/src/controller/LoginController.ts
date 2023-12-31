import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import LoginService from '../services/LoginService';

export default class LoginController {
  constructor(
    private loginService = new LoginService(),
  ) { }

  public async executeLogin(req: Request, res: Response) {
    const serviceResponse = await this.loginService.executeLogin(req.body);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  static getUserRole(req: Request, res: Response) {
    const { role } = req.body;

    return res.status(200).json({ role });
  }
}
