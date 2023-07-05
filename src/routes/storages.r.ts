import express from 'express';
import { uploadMiddleware } from '../middleware/storage';
import {
  getFile,
  getFiles,
  deleteFile,
  uploadFile,
  deletePhysicalFile,
} from '../controllers/storages';
import { idStorageValidator } from '../validators/storages';

const router = express.Router();
router.get('/', getFiles);
router.get('/:id', idStorageValidator, getFile);
router.delete('/:id', idStorageValidator, deleteFile);
router.delete('/:id', idStorageValidator, deletePhysicalFile);
router.post('/', uploadMiddleware.single('file'), uploadFile);

module.exports = router;
