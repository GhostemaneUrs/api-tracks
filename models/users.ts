import mongoose, { Schema } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  role: 'user' | 'admin';
  password: string;
  birthdate: Date;
}

const UserSchema: Schema<IUser> = new mongoose.Schema<IUser>(
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

export default mongoose.model<IUser>('users', UserSchema);
