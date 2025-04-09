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
