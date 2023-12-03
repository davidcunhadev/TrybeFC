import * as bcrypt from 'bcryptjs';
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

    const { id, email, role } = foundUser.dataValues;

    const token = JWT.sign({ id, email, role });
    return token;
  }
}
