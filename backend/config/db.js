import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connection.on("error", (err) => {
      console.log(`Error: ${err.message}`);
      process.exit(1);
    });
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
