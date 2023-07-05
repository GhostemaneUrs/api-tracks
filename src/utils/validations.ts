import { responseError } from './response';
import { NextFunction, Response, Request } from 'express';
import { validationResult, Result, ValidationError } from 'express-validator';

const extractedErrors = (errors: Result<ValidationError>) => {
  const extractedErrors: { [key: string]: string } = {};
  const validationErrors: { [key: string]: ValidationError } = errors.mapped();
  Object.keys(validationErrors).forEach((key) => {
    const error = validationErrors[key];
    extractedErrors[key] = error.msg;
  });
  return extractedErrors;
};

export const validateResult = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors: Result<ValidationError> = validationResult(req);
    if (errors.isEmpty()) return next();
    responseError(res, 'Validation Error', extractedErrors(errors));
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
