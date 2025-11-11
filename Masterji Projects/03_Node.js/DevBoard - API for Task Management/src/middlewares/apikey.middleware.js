import { ApiKey } from "../models/apikey.model.js";

const requireApiKey = async (req, res, next) => {
  // 1. get api key from header
  const apiKey = req.headers["x-api-key"];
  if (!apiKey) {
    return res.status(401).json({ error: "No API key provided." });
  }

  try {
    // 2. Find apiKey in database
    const keyRecord = await ApiKey.findOne({ key: apiKey }).populate(
      "user",
      "-password",
    );
    // populate('user', '-password') to attach the full user object (without password) to req.user — so the controllers work identically whether auth came from JWT or API key.
    if (!keyRecord) {
      return res.status(401).json({ error: "Invalid API key." });
    }

    req.user = keyRecord.user;
    next();
  } catch (error) {
    console.error("Api key validation error: ", error);
    return res
      .status(500)
      .json({ message: "Internal server error during Api key validation." });
  }
};

export { requireApiKey };
