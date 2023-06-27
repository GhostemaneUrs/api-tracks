import fs from 'fs';
import express from 'express';
const router = express.Router();
const PATH_ROUTES = __dirname;
import { removeExtension } from '../utils/files';

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const nameRouter = removeExtension(file);
  nameRouter !== 'index' && router.use(`/${nameRouter}`, require(`./${file}`));
});

module.exports = router;
