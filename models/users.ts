import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    password: {
      type: String,
    },
    birthdate: {
      type: Date,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model('users', UserSchema);
