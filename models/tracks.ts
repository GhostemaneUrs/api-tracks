import mongoose, { Schema } from 'mongoose';

interface ITracks {
  name: string;
  album: string;
  cover: Record<string, string>;
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

const coverValidator = {
  validator: (v: string): boolean => {
    return true;
  },
  message: (props: Record<string, string>) =>
    `${props.value} is not a valid URL!`,
};

const TracksSchema: Schema<ITracks> = new mongoose.Schema<ITracks>(
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

export default mongoose.model<ITracks>('tracks', TracksSchema);
