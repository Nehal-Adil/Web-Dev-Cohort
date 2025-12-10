import { verifyToken } from "../utils/jwt.utils.js";

const authenticateToken = (req, res, next) => {
  // 1. get token from authorization header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Error extracting token from request - middleware failed" });
  }

  try {
    const decoded = verifyToken(token);
    req.user = { id: decoded.userId }; // attach user to request
    next();
  } catch (error) {
    return res.status(403).json({
      error: "Invalid or expired token",
    });
  }
};

export { authenticateToken };
