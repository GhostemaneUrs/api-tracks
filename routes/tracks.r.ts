import express from 'express';
import {
  getTrack,
  getTracks,
  updateTrack,
  createTrack,
} from '../controllers/tracks';
import { createTrackValidator } from '../validators/tracks';

const router = express.Router();
router.get('/', getTracks);
router.get('/:id', getTrack);
router.post('/', createTrackValidator, createTrack);
router.put('/:id', updateTrack);

module.exports = router;
