import { ApiKey } from "../models/apikey.model.js";
import crypto from "crypto";

const createApiKey = async (req, res) => {
  try {
    // req.user is attached to the request object by the jwt.middleware.js
    const userId = req.user._id;

    let key, newApiKey;
    let attempts = 0;
    const maxAttempts = 5;

    while (attempts < maxAttempts) {
      key = crypto.randomBytes(32).toString("hex");

      const existingKey = await ApiKey.findOne({ key });
      if (!existingKey) {
        newApiKey = await ApiKey.create({ key, user: userId });
        break;
      }

      attempts++;
    }

    if (!newApiKey) {
      return res.status(400).json({ error: "Failed to create API key." });
    }

    res.status(200).json({
      success: true,
      message:
        "⚠️ API key generated successfully. Copy this key now — it will not be shown again!",
      apiKey: newApiKey.key,
    });
  } catch (error) {
    console.error("Error creating API key: ", error);
    res.status(500).json({ message: "Error creating API key." });
  }
};

export { createApiKey };
