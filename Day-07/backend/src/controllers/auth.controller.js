const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const postModel = require("../models/post.model");

const registerController = async (req, res) => {
  try {
    const { username, password } = req.body;

    const userExists = await userModel.findOne({ username });

    if (userExists) {
      return res.status(409).json({
        message: "User already exists!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await userModel.create({
      username,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username });

    if (!user) {
      return res.status(401).json({
        message: "Inavlid Credentials Email",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Credentials Pass",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax", // or "none" + secure in prod
      secure: false, // true in prod
    });

    res.status(200).json({
      message: "Logged In Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const profileController = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await userModel.findById(userId).select("-password").lean();

    const posts = await postModel.find({user: userId}).lean();

    res.status(200).json({
      message: "User fetched successfully",
      user,
      posts
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const logoutController = (req, res) => {
  try {
    res.clearCookie("token");

    res.json({
      message: "Logged Out Successfully!",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerController,
  loginController,
  profileController,
  logoutController,
};
