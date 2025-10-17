// ES module imports
import express from "express";
import mongoose from "mongoose";
// import User from "../models/users.js";
import session from "express-session";
const app = express();

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

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

//adding users
// app.get("/addUser", async (req, res) => {
//   const newUser = new User({
//     username: "Vignesh",
//     email: "vig123@gmail.com",
//     password: "abc",
//   });
//   await newUser.save();
//   console.log(newUser);
//   res.send("created new user");
// });

// Basic route
app.get("/", (req, res) => {
  res.send("WebStitch API is running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
