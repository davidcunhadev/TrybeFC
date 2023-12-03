import { ServiceResponse } from '../Interfaces/ServiceResponse';
import VerifyLogin from '../model/LoginModel';
import { Token } from '../Interfaces/Login/Token';
import { Login } from '../Interfaces/Login/Login';

export default class LoginService {
  constructor(
    private loginModel: VerifyLogin = new VerifyLogin(),
  ) { }

  public async executeLogin(login: Login) : Promise<ServiceResponse<Token>> {
    const foundUser = await this.loginModel.verifyLogin(login);

    if (!foundUser) {
      return { status: 'UNAUTHORIZED', data: { message: 'User not found' } };
    }

    return { status: 'SUCCESSFUL', data: { token: foundUser } };
  }
}
