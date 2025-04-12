import express from "express";
import { protectedRoute } from "../middleware/auth.js";
import { createPost, deletePost } from "../controllers/post.controller.js";   

const postRouter = express.Router();

postRouter.post("/create", protectedRoute, createPost);

// postRouter.get("/", protectedRoute, getPosts);

// postRouter.get("/:id", protectedRoute, getPost);

// postRouter.put("/like/:id", protectedRoute, likePost);

// postRouter.put("/unlike/:id", protectedRoute, unLikePost);

// postRouter.put("/comment/:id", protectedRoute, commentPost);

postRouter.delete("/:id", protectedRoute, deletePost);

export default postRouter;