import mongoose from "mongoose";
import Admin from "../models/admin.js";
import initData from "./dataAdmin.js";

// Load .env in development
if (process.env.NODE_ENV !== "production") {
  const dotenv = await import("dotenv");
  dotenv.config({ path: "../.env" });
}

const MONGO_URL = process.env.MONGO_URL;

main()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// MongoDB connection
async function main() {
  await mongoose.connect(MONGO_URL);
}

const initAdminDb = async () => {
  await Admin.deleteMany();
  await Admin.insertMany(initData.data);
  console.log("data was initialized");
};

initAdminDb();
