import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import { connectDB } from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";

// These two lines are required for __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, ".env") });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));//! form data
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5000, () => {
  connectDB();

  console.log("Server is running on port 5000", process.env.MONGO_URI);
});
