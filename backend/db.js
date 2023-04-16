import mongoose from "mongoose";

const connectDb = () => {
  try {
    const conn = mongoose.connect("mongodb://localhost:27017/tournament");
    console.log("MongoDb connected");
  } catch (error) {
    console.log("error in  ongodb connection " + error);
  }
};

export default connectDb;
