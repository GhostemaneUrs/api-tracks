import mongoose from 'mongoose';

const dbConnect = async (): Promise<void> => {
  const DB_URI: string = process.env.DB_URI || '';
  try {
    await mongoose.connect(DB_URI, {});
    console.log('Connected to database');
  } catch (error) {
    throw new Error(`Unable to connect to database: ${error}`);
  }
};

export default dbConnect;
