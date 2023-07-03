import tracks from '../models/tracks';
import { Request, Response } from 'express';
import { matchedData } from 'express-validator';
import { responseError, responseSuccess } from '../utils/response';

export const getTrack = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await tracks.find({});
    res.send({ data });
  } catch (error) {
    // httpError(res, error?.message, 403);
  }
};

export const getTracks = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await tracks.find({});
    responseSuccess(res, 'Tracks retrieved successfully', data);
  } catch (error) {
    responseError(res, 'Failed to retrieve tracks', `${error}`);
  }
};

export const createTrack = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await tracks.create(matchedData(req, { locations: ['body'] }));
    responseSuccess(res, 'Track created successfully', data, 201);
  } catch (error) {
    responseError(res, 'Failed to create track', `${error}`);
  }
};

export const updateTrack = (req: Request, res: Response): void => {
  res.send({ message: 'Hello from tracks' });
};

export const deleteTrack = (req: Request, res: Response): void => {
  res.send({ message: 'Hello from tracks' });
};
