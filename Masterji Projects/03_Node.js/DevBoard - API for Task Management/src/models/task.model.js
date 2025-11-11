import mongoose, { Schema } from "mongoose";
import { AvailableTaskStatuses, TaskStatusEnum } from "../utils/constants.js";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      maxLength: 1000,
    },
    status: {
      type: String,
      enum: AvailableTaskStatuses,
      default: TaskStatusEnum.TODO,
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true },
);

taskSchema.index({ project: 1, owner: 1 });

export const Task = mongoose.model("Task", taskSchema);
