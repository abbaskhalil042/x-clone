import express from "express";
import { getMe, login, logout, signup } from "../controllers/auth.controller.js";
import { protectedRoute } from "../middleware/auth.js";
const authRouter = express.Router();

authRouter.get("/me",protectedRoute, getMe);
authRouter.post("/signup", signup);

authRouter.post("/login", login);

authRouter.post("/logout", logout);

export default authRouter;
