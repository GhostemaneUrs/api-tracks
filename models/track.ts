import mongoose from 'mongoose';

const coverValidator = {
  validator: (v: string): boolean => {
    return true;
  },
  message: (props: Record<string, string>) =>
    `${props.value} is not a valid URL!`,
};

const TracksSchema = new mongoose.Schema(
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

export default mongoose.model('tracks', TracksSchema);
