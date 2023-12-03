import { Login } from './Login';

export interface ILoginModel {
  verifyLogin(login: Login): Promise<string | null>
}
