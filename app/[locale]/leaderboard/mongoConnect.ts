import mongoose from 'mongoose';


const { MONGO_URL } = process.env;

if (!MONGO_URL) throw new Error('MONGO_URL is not defined.');

let cached: { conn: any } = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null };
}

export const dbConnect = async () => {
  if (cached.conn) return cached.conn;

  cached.conn = await mongoose.connect(MONGO_URL);

  return cached.conn;
};