import storage from '../models/storages';
import { Request, Response } from 'express';
const PUBLIC_URL = process.env.PUBLIC_URL;

export const getFile = async (req: Request, res: Response): Promise<void> => {
  const data = await storage.find({});
  res.send({ data });
};

export const uploadFile = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { file } = req;
  const data = await storage.create({
    fileName: file?.filename,
    url: `${PUBLIC_URL}/${file?.filename}`,
  });
  res.send({ data });
};

export const deleteFile = (req: Request, res: Response): void => {
  res.send({ message: 'Hello from storage' });
};
