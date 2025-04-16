import express from "express";
import { protectedRoute } from "../middleware/auth.js";
import {
  commentPost,
  createPost,
  deletePost,
  getAllPosts,
  likeUnlikePost,
  getLikedPosts,
  getFollowingPosts,
  getUserPosts
} from "../controllers/post.controller.js";

const postRouter = express.Router();

postRouter.get("/all", protectedRoute, getAllPosts);
postRouter.get("/following", protectedRoute, getFollowingPosts);
postRouter.get("/user/:username", protectedRoute, getUserPosts);
postRouter.post("/create", protectedRoute, createPost);

postRouter.post("/like/:id", protectedRoute, likeUnlikePost);
postRouter.get("/likes/:id", protectedRoute, getLikedPosts);

postRouter.post("/comment/:id", protectedRoute, commentPost);

postRouter.delete("/:id", protectedRoute, deletePost);

export default postRouter;
