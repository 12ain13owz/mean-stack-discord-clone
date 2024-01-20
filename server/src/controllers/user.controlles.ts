import { NextFunction, Request, Response } from 'express';
import { SignUpUserInput } from '../schema/user.schema';

export const signup = (
  req: Request<{}, {}, SignUpUserInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json({ message: req.body });
  } catch (error) {
    next(error);
  }
};
