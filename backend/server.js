import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import { connectDB } from "./config/db.js";

const app = express();

app.use(express.json());
dotenv.config();
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5000, () => {
  connectDB();

  console.log("Server is running on port 5000");
});


MONGO_URI="mongodb://localhost:27017/digo"
JWT_SECRET="secret"
CLOUDINARY_CLOUD_NAME="cloud_name"
CLOUDINARY_API_KEY="api_key"
CLOUDINARY_API_SECRET="api_secret"
