import mongoose from "mongoose";
const connectionString = process.env.MONGODB_URL;

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("you are already connected to the database");
    return;
  }

  try {
    await mongoose.connect(connectionString!, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("you are connected to the database Now !");
  } catch (error) {
    console.log(error);
  }
};
export default connectDB