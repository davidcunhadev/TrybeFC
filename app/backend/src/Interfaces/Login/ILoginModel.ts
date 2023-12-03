import { IUser, Role } from '../User/IUser';
import { Login } from './Login';

export interface ILoginModel {
  verifyLogin(login: Login): Promise<string | null>
  getUserRole(user: IUser): Promise<Role | null>
}
