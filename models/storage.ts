import mongoose, { Schema } from 'mongoose';

interface IStorage {
  url: string;
  filename: string;
}

const StorageSchema: Schema<IStorage> = new mongoose.Schema<IStorage>(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model<IStorage>('storages', StorageSchema);
