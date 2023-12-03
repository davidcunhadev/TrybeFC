import * as bcrypt from 'bcryptjs';
import { IUser, Role } from '../Interfaces/User/IUser';
import { Login } from '../Interfaces/Login/Login';
import { ILoginModel } from '../Interfaces/Login/ILoginModel';
import SequelizeUser from '../database/models/SequelizeUser';
import JWT from '../utils/jwt';

export default class LoginModel implements ILoginModel {
  private model = SequelizeUser;

  async verifyLogin(login: Login): Promise<string | null> {
    const foundUser = await this.model.findOne({ where: { email: login.email } });

    if (!foundUser || !bcrypt.compareSync(login.password, foundUser.dataValues.password)) {
      return null;
    }

    const { id, email } = foundUser.dataValues;

    const token = JWT.sign({ id, email });
    return token;
  }

  async getUserRole(user: IUser): Promise<Role | null> {
    const foundUser = await this.model.findOne({ where: { email: user.email } });

    if (!foundUser) {
      return null;
    }

    return { role: foundUser.dataValues.role };
  }
}
