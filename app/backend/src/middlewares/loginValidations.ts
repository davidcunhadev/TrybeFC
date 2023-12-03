import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export default class Validations {
  static validateLogin(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    if (!password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    next();
  }
}
