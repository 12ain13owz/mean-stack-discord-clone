import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodError } from 'zod';

export const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      let message = '';
      let status = 500;
      res.locals.func = 'validate ' + req.baseUrl;

      if (error instanceof ZodError) {
        message = error.issues.map((issue) => issue.message).join(', ');
        status = 400;
      }

      const err = Object.assign(new Error(message), { status });
      next(err);
    }
  };
