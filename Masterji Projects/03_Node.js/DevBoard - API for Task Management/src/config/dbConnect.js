import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("Please set the MONGO_URI environment variable");
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);
    // console.log("conn.connection:", conn.connection.host);

    console.log(
      `✅ MongoDB Connected: ${conn.connection.host}/${conn.connection.port}`,
    );
    return conn;
  } catch (error) {
    console.log(`❌ Error connecting to MongoDB: `, error);
    throw error;
  }
};

export default connectDB;
