import express from 'express';
import { getTrack, getTracks } from '../controllers/tracks';

const router = express.Router();
router.get('/', getTracks);
router.get('/:id', getTrack);

module.exports = router;
