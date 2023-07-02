import express from 'express';
import { uploadFile } from '../controllers/storages';
import { uploadMiddleware } from '../utils/storages';

const router = express.Router();
router.post('/', uploadMiddleware.single('file'), uploadFile);

module.exports = router;
