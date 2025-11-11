import { validationResult } from "express-validator";
import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  // check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullName, username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ errors: ["Email already exists"] });
    }

    const newUser = await User.create({
      fullName,
      username,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Registration error: ", error);
    res.status(500).json({
      success: false,
      error: "Error creating user",
    });
  }
};

const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password.",
      });
    }

    const accessToken = user.generateAccessToken();

    res.status(200).json({
      success: true,
      message: "Login successful.",
      accessToken,
      user: {
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error: ", error);
    res.status(500).json({
      success: false,
      message: "Internal server error during login.",
    });
  }
};

const getCurrentUser = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Current user fetched successfully.",
    user: {
      id: req.user._id,
      username: req.user.username,
      fullName: req.user.fullName,
      email: req.user.email,
    },
  });
};

export { registerUser, loginUser, getCurrentUser };
