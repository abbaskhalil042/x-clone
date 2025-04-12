import express from "express";
import { protectedRoute } from "../middleware/auth.js";
import { followUnfollowUser, getSuggestedUsers, getUserProfile, updateUser } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/profile/:username", protectedRoute, getUserProfile);

userRouter.get("/suggested", protectedRoute, getSuggestedUsers);

userRouter.post("/follow/:id", protectedRoute,followUnfollowUser );

userRouter.post("/update", protectedRoute, updateUser);

export default userRouter;
