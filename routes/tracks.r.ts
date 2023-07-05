import express from 'express';
import {
  getTrack,
  getTracks,
  updateTrack,
  createTrack,
  deleteTrack,
} from '../controllers/tracks';
import { valuesTrackValidator, idTrackValidator } from '../validators/tracks';

const router = express.Router();
router.get('/', getTracks);
router.get('/:id', idTrackValidator, getTrack);
router.post('/', valuesTrackValidator, createTrack);
router.delete('/:id', idTrackValidator, deleteTrack);
router.put('/:id', idTrackValidator, valuesTrackValidator, updateTrack);

module.exports = router;
