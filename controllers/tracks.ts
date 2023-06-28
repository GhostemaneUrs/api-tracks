import { Request, Response } from 'express';

export const getTrack = (req: Request, res: Response): void => {
  res.send({ message: 'Hello from track' });
};

export const getTracks = (req: Request, res: Response): void => {
  res.send({ message: 'Hello from tracks' });
};

export const createTrack = (req: Request, res: Response): void => {};

export const updateTrack = (req: Request, res: Response): void => {};

export const deleteTrack = (req: Request, res: Response): void => {};
