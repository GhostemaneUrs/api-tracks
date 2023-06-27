import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import dbConnect from './config/mongoose';

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

dbConnect();
