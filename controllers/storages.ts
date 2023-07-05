import fs from 'fs';
import storage from '../models/storages';
const PUBLIC_URL = process.env.PUBLIC_URL;
import { Request, Response } from 'express';
const MEDIA_PATH = `${__dirname}/../storage`;
import { matchedData } from 'express-validator';
import { responseError, responseSuccess } from '../utils/response';

export const getFile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = matchedData(req);
    const data = await storage.findById(id);
    if (data) responseSuccess(res, `Detail file retrieved successfully`, data);
  } catch (error) {
    responseError(res, 'Failed to retrieve detail file', `${error}`);
  }
};

export const getFiles = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await storage.find({});
    responseSuccess(res, 'Files retrieved successfully', data);
  } catch (error) {
    responseError(res, 'Failed to retrieve files', `${error}`);
  }
};

export const uploadFile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { file } = req;
    const data = await storage.create({
      fileName: file?.filename,
      url: `${PUBLIC_URL}/${file?.filename}`,
    });
    responseSuccess(res, 'File uploaded successfully', data, 201);
  } catch (error) {
    responseError(res, 'Failed to upload file', `${error}`);
  }
};

export const deleteFile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = matchedData(req);
    const data = await storage.findById(id);
    await data?.delete();
    if (data)
      responseSuccess(res, `File ${data?.fileName} has been deleted`, data);
  } catch (error) {
    responseError(res, 'Failed to retrieve detail file', `${error}`);
  }
};

export const deletePhysicalFile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = matchedData(req);
    const data = await storage.findById(id);
    const filePath = `${MEDIA_PATH}/${data?.fileName}`;
    fs.unlinkSync(filePath);
    await data?.delete();
    if (data)
      responseSuccess(res, `File ${data?.fileName} has been deleted`, data);
  } catch (error) {
    responseError(res, 'Failed to retrieve detail file', `${error}`);
  }
};
