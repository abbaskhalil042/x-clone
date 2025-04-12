import { v2 as cloudinary } from "cloudinary";

import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const createPost = async (req, res) => {
  try {
    const { description } = req.body;

    console.log("from create post", req.body);
    let { image } = req.body;

    const userId = req.user._id.toString();

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "user not found" });
    }

    if (!description) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (image) {
      const uploadImage = await cloudinary.uploader(image);
      image = uploadImage.secure_url;
    }
    const newPost = await Post.create({
      description,
      image,
      user: userId,
    });

    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    if (post.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ error: " you are not Unauthorized" });
    }

    if (post.image) {
      const imgId = post.image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(imgId);
    }

    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Post deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const commentPost = async (req, res) => {
  try {
    const { text } = req.body;
    const postId = req.params.id;
    const userId = req.user._id;

    console.log(text);

    if (!text) {
      return res.status(400).json({ msg: "comment is required" });
    }
    const post = await Post.findById(postId);

    const comment = { user: userId, text };
    post.comments.push(comment);

    await post.save();

    res.status(201).json({ post });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Msg: "error in comment", error: error.message });
  }
};

export const likeUnlikePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user._id;
    const post = await Post.findById(postId);

    //* like and unlike
    const likeAndUnlike = post.likes.find(
      (like) => like.user.toString() === userId.toString()
    );
    if (likeAndUnlike) {
      post.likes = post.likes.filter(
        (like) => like.user.toString() !== userId.toString()
      );
    } else {
      post.likes.push({ user: userId });
    }
    await post.save();
    res.status(200).json({ post });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
