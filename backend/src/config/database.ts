import mongoose from 'mongoose';

export async function connectToMongoDB(url: string): Promise<typeof mongoose> {
  return mongoose.connect(url);
}
