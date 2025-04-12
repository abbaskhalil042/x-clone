import express from "express";
import { protectedRoute } from "../middleware/auth.js";
import { commentPost, createPost, deletePost, likeUnlikePost } from "../controllers/post.controller.js";   

const postRouter = express.Router();

postRouter.post("/create", protectedRoute, createPost);

// postRouter.get("/", protectedRoute, getPosts);
// postRouter.get("/:id", protectedRoute, getPost);
// postRouter.put("/like/:id", protectedRoute, likePost);

postRouter.post("/unlike/:id", protectedRoute, likeUnlikePost);

postRouter.post("/comment/:id", protectedRoute, commentPost);

postRouter.delete("/:id", protectedRoute, deletePost);

export default postRouter;