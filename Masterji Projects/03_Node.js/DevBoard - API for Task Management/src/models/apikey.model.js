import mongoose, { Schema } from "mongoose";

const apiKeySchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    key: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  { timestamps: true },
);

export const ApiKey = mongoose.model("ApiKey", apiKeySchema);
