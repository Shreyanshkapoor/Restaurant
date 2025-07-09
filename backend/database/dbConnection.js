import mongoose from "mongoose";
import dotenv from "dotenv"; // ✅
dotenv.config({ path: "./config/config.env" }); // ✅

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("✅ Connected to database!");
    })
    .catch((err) => {
      console.log(`❌ Some error occurred while connecting to database: ${err}`);
    });
};
