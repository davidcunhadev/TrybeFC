import { NextFunction, Request, Response } from 'express';
import * as JWT from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'jwt_secret';

const extractToken = (bearerToken: string) => bearerToken.split(' ')[1];

export default class Validations {
  static validateToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization || authorization === '') {
      return res.status(401).json({ message: 'Token not found' });
    }

    const token = extractToken(authorization);

    try {
      const user = JWT.verify(token, SECRET_KEY);

      if (!user) {
        return res.status(401).json({ message: 'Token must be a valid token' });
      }

      if (req.method === 'GET') {
        req.body = user;
      }

      next();
    } catch (error) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  }
}
