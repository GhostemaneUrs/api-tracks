import { NextFunction, Response, Request } from 'express';
import { validationResult, Result } from 'express-validator';

export const validateResult = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors: Result<unknown> = validationResult(req);
    if (errors.isEmpty()) return next();
    res.status(403);
    res.send({
      message: 'Validation error',
      errors: errors.array(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
