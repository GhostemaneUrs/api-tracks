import { check } from 'express-validator';
import { validateResult } from '../utils/validations';
import { NextFunction, Response, Request } from 'express';

export const getTrackValidator = [
  check('id').exists().notEmpty().isMongoId(),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];

export const createTrackValidator = [
  check('name').exists().notEmpty(),
  check('album').exists().notEmpty(),
  check('cover').exists().notEmpty(),
  check('artist').exists().notEmpty(),
  check('duration').exists().notEmpty(),
  check('duration.end').exists().notEmpty(),
  check('duration.start').exists().notEmpty(),
  check('artist.name').exists().notEmpty(),
  check('artist.nickname').exists().notEmpty(),
  check('artist.nationality').exists().notEmpty(),
  check('mediaId').exists().notEmpty().isMongoId(),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];
