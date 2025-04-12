import { v2 as cloudinary } from "cloudinary";
import bcrypt from "bcryptjs";
import Notification from "../models/notification.model.js";
import User from "../models/user.model.js";

export const getUserProfile = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username }).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

//* followUnfollowUser*
export const followUnfollowUser = async (req, res) => {
  try {
    const { id: targetUserId } = req.params; // ID of the user to follow/unfollow
    const currentUserId = req.user._id; // Logged-in user's ID

    if (targetUserId === currentUserId.toString()) {
      return res.status(400).json({ error: "You cannot follow yourself" });
    }

    // Get both users
    const targetUser = await User.findById(targetUserId);
    const currentUser = await User.findById(currentUserId);

    if (!targetUser || !currentUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const isAlreadyFollowing = targetUser.followers.includes(currentUserId);

    if (isAlreadyFollowing) {
      // Unfollow: Remove current user from target's followers
      targetUser.followers = targetUser.followers.filter(
        (followerId) => followerId.toString() !== currentUserId.toString()
      );

      // And remove target user from current user's following
      currentUser.following = currentUser.following.filter(
        (followingId) => followingId.toString() !== targetUserId.toString()
      );

      await targetUser.save();
      await currentUser.save();

      // const notification = await Notification.findOne({
      //   from: currentUser._id,
      //   to: targetUser._id,
      //   type: "follow",
      // });

      // if (notification) {
      //   await Notification.findByIdAndDelete(notification._id);
      // }

      return res
        .status(200)
        .json({ message: `${currentUser.username} Unfollowed successfully` });
    } else {
      // Follow: Add current user to target's followers
      targetUser.followers.push(currentUserId);
      currentUser.following.push(targetUserId);

      await targetUser.save();
      await currentUser.save();

      //*sending follow notification
      const newNotification = new Notification({
        from: currentUser._id,
        to: targetUser._id,
        type: "follow",
      });

      await newNotification.save();

      return res.status(200).json({
        message: `${currentUser.username} Followed successfully to ${targetUser.username}`,
      });
    }
  } catch (err) {
    console.error("Follow/Unfollow Error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

export const getSuggestedUsers = async (req, res) => {
  try {
    const currentUserId = req.user._id;
    const userFollowedByCurrentUser = await User.findById(currentUserId).select(
      "following "
    );

    const suggestedUsers = await User.aggregate([
      {
        $match: {
          _id: { $ne: currentUserId },
        },
      },
      {
        $sample: {
          size: 10,
        },
      },
    ]);

    //*exlude the users that the current user is following
    const filteredUser = suggestedUsers.filter((user) => {
      return !userFollowedByCurrentUser.following.includes(user._id);
    });

    const suggestedUsersWithoutCurrentUser = filteredUser.slice(0, 4);

    suggestedUsersWithoutCurrentUser.forEach(
      (user) => (suggestedUsers.password = null)
    );

    res.status(200).json(suggestedUsersWithoutCurrentUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { fullName, username, email, currentPassword, newPassword, bio, link } =
    req.body;

  let { profileImage, coverImage } = req.body;
  const userId = req.user._id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (
      (!newPassword && currentPassword) ||
      (newPassword && !currentPassword)
    ) {
      return res.status(400).json({
        error: "Please provide both current password and new password",
      });
    }

    if (newPassword && currentPassword) {
      const isPasswordCorrect = await bcrypt.compare(
        currentPassword,
        user.password
      );
      if (!isPasswordCorrect)
        return res.status(401).json({ error: "Invalid current password" });
      if (newPassword.length < 6)
        return res
          .status(400)
          .json({ error: "Password must be at least 6 characters" });
      const hashPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashPassword;
    }

    if (profileImage) {
      if (user.profileImage) {
        await cloudinary.uploader.destroy(user.profileImage.split("/").pop().split(".")[0]);
      }
      const uploadedImage = await cloudinary.uploader.upload(profileImage);
      profileImage = uploadedImage.secure_url;
    }
    if (coverImage) {
      if (user.coverImage) {
        await cloudinary.uploader.destroy(user.coverImage.split("/").pop().split(".")[0]);
      }
      const uploadedImage = await cloudinary.uploader.upload(coverImage);
      coverImage = uploadedImage.secure_url;
    }

    user.fullName = fullName || user.fullName;
    user.username = username || user.username;
    user.email = email || user.email;
    user.bio = bio || user.bio;
    user.links = link || user.links;
    user.profileImage = profileImage || user.profileImage;
    user.coverImage = coverImage || user.coverImage;

    const updatedUser = await user.save();
    //* Remove password from the response
    user.password = null;

    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
