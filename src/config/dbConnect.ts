import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI as string);
      console.log("MongoDB Connected Successfully");
    } catch (error) {
      console.error("Database Connection Error:", error);
      process.exit(1);
    }
  };
  
  export default connectDB;