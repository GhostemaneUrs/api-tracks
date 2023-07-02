import tracks from '../models/tracks';
import { Request, Response } from 'express';

export const getTrack = async (req: Request, res: Response): Promise<void> => {
  const data = await tracks.find({});
  res.send({ data });
};

export const getTracks = async (req: Request, res: Response): Promise<void> => {
  const data = await tracks.find({});
  res.send({ data });
};

export const createTrack = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { body } = req;
  const data = await tracks.create(body);
  res.send({ data });
};

export const updateTrack = (req: Request, res: Response): void => {
  res.send({ message: 'Hello from tracks' });
};

export const deleteTrack = (req: Request, res: Response): void => {
  res.send({ message: 'Hello from tracks' });
};
