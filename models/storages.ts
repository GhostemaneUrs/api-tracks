import mongoose from 'mongoose';
import mongooseDelete, { SoftDeleteDocument } from 'mongoose-delete';

interface Storage extends SoftDeleteDocument {
  url: string;
  fileName: string;
}

const StorageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    fileName: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

StorageSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
const StorageModel = mongoose.model<Storage>('storages', StorageSchema);

export default StorageModel;
