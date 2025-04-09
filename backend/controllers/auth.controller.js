import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
  const { username, fullName, email, password } = req.body;
  try {
    const validEmail = /\S+@\S+\.\S+/.test(email);

    if (!validEmail) {
      return res.status(400).json({ error: "Invalid email" });
    }

    if (!username || !fullName || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      fullName,
      email,
      password: hashPassword,
    });
    //* generate token
    res.status(201).json({
      fullName: user.fullName,
      email: user.email,
      username: user.username,
      followers: user.followers,
      following: user.following,
      _id: user._id,
      profileImage: user.profileImage,
      coverImage: user.coverImage,
      bio: user.bio,
      links: user.links,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = generateToken(existingUser._id, res);
    console.log(token);
    res.status(200).json({
      username: existingUser.username,
      email: existingUser.email,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
    });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

//* get the authenticated user

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
