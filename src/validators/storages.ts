import { check } from 'express-validator';
import { validateResult } from '../utils/validations';
import { NextFunction, Response, Request } from 'express';

export const idStorageValidator = [
  check('id').exists().notEmpty().isMongoId(),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];
