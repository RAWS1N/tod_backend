import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.COLLECTION}`, {
      dbName: process.env.DATABASE,
    });
    console.log(`database is connected with ${connection.connection.host}`);
  } catch (e) {
    console.log(e.message);
  }
};