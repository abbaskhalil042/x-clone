import { v2 as cloudinary } from "cloudinary";

import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import Notification from "../models/notification.model.js";

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

    res.status(200).json({ post });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Msg: "error in comment", error: error.message });
  }
};

export const likeUnlikePost = async (req, res) => {
  const postId = req.params.id;
  const userId = req.user._id;

  try {
    // Find the post by ID
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Check if the user has already liked the post
    const userAlreadyLiked = post.likes.includes(userId);

    if (userAlreadyLiked) {
      // Remove the user from the likes array
      post.likes = post.likes.filter(
        (like) => like.toString() !== userId.toString()
      );

      // Remove the post from the user's likedPosts array
      await User.updateOne({ _id: userId }, { $pull: { likedPosts: postId } });

      // Save the post after unliking
      await post.save();

      return res
        .status(200)
        .json({ msg: "Post unliked", likes: post.likes.length });
    } else {
      // Add the user to the likes array
      post.likes.push(userId);

      // Add the post to the user's likedPosts array
      await User.updateOne({ _id: userId }, { $push: { likedPosts: postId } });

      // Save the post after liking
      await post.save();

      // Notify the post owner if the user is not the post owner
      if (userId.toString() !== post.user.toString()) {
        const newNotification = new Notification({
          from: userId, // Current user's ID
          to: post.user, // Post owner's ID
          type: "like", // The notification type (can be changed to 'like')
          message: `${req.user.fullName} liked your post`, // Custom message for the notification
        });

        // Save the notification to the database
        await newNotification.save();
      }

      return res
        .status(200)
        .json({ msg: "Post liked", likes: post.likes.length });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: error.message });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate({
        path: "user",
        select: "-password",
      })
      .populate({
        path: "comments.user",
        select: "-password",
      });

    if (posts.length === 0) {
      return res.status(200).json([]);
    }
    res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getLikedPosts = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const likedPosts = await Post.find({
      _id: { $in: user.likedPosts },
    })
      .populate({
        path: "user",
        select: "-password",
      })
      .populate({
        path: "comments.user",
        select: "-password",
      });

    if (likedPosts.length === 0) {
      return res.status(200).json([]);
    }
    res.status(200).json(likedPosts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getFollowingPosts = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const following = user.following;

    const feedPosts = await Post.find({ user: { $in: following } })
      .sort({ createdAt: -1 })
      .populate({
        path: "user",
        select: "-password",
      })
      .populate({
        path: "comments.user",
        select: "-password",
      });

    if (feedPosts.length === 0) {
      return res.status(200).json([]);
    }
    res.status(200).json(feedPosts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const username = req.params.username;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const posts = await Post.find({ user: user._id })
      .sort({ createdAt: -1 })
      .populate({
        path: "user",
        select: "-password",
      })
      .populate({
        path: "comments.user",
        select: "-password",
      });
    if (posts.length === 0) {
      return res.status(200).json([]);
    }
    res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
