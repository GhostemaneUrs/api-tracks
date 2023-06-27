import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import dbConnect from './config/mongoose';

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use('/api', require('./routes/index.r'));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

dbConnect();
