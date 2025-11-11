import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const verifyJWT = async (req, res, next) => {
  // 1. get token from header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      error: "Authorization header is missing or invalid.",
    });
  }

  console.log("Auth Header: ", authHeader);
  const token = authHeader.split(" ")[1];
  console.log("token: ", token);

  try {
    // 2. verify token
    const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log("decoded: ", decoded);

    // 3. fetch user from DB
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        success: false,
        error: "User not found: Invalid token.",
      });
    }

    // 4. attach user to request
    req.user = user;
    next();
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    res.status(401).json({
      success: false,
      message: "Invalid token.",
    });
  }
};

export { verifyJWT };
