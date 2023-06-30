import tracks from '../models/tracks';
import { Request, Response } from 'express';

export const getTrack = async (req: Request, res: Response): Promise<void> => {
  const data = await tracks.find({});
  res.send({ data });
};

export const getTracks = (req: Request, res: Response): void => {
  res.send({ message: 'Hello from tracks' });
};

export const createTrack = (req: Request, res: Response): void => {
  res.send({ message: 'Hello from tracks' });
};

export const updateTrack = (req: Request, res: Response): void => {
  res.send({ message: 'Hello from tracks' });
};

export const deleteTrack = (req: Request, res: Response): void => {
  res.send({ message: 'Hello from tracks' });
};
