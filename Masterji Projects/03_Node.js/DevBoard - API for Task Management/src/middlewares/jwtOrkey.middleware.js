import { requireApiKey } from "./apikey.middleware.js";
import { verifyJWT } from "./jwt.middleware.js";

export const requireJwtOrApiKey = async (req, res, next) => {
  console.log("Auth headers received:");
  console.log("- Authorization:", req.headers.authorization);
  console.log("- X-API-Key:", req.headers["x-api-key"]);

  if (req.headers["x-api-key"]) {
    return requireApiKey(req, res, next);
  }
  return verifyJWT(req, res, next);
};
