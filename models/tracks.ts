import mongoose from 'mongoose';
import mongooseDelete, { SoftDeleteDocument } from 'mongoose-delete';

const coverValidator = {
  validator: (v: string): boolean => {
    return true;
  },
  message: (props: Record<string, string>) =>
    `${props.value} is not a valid URL!`,
};

interface Tracks extends SoftDeleteDocument {
  name: string;
  album: string;
  cover: Record<string, any>;
  artist: {
    name: string;
    nickname: string;
    nationality: string;
  };
  duration: {
    start: number;
    end: number;
  };
  mediaId: mongoose.Schema.Types.ObjectId;
}

const TracksSchema = new mongoose.Schema<Tracks>(
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
      validate: coverValidator,
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nationality: {
        type: String,
      },
    },
    duration: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    mediaId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

TracksSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
const TracksModel = mongoose.model<Tracks>('tracks', TracksSchema);

export default TracksModel;
