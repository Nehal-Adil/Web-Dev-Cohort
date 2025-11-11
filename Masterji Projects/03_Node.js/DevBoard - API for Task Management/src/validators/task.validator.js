import { body, param } from "express-validator";
import { AvailableTaskStatuses } from "../utils/constants.js";
import { isValidObjectId } from "mongoose";

export const createTaskValidator = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 4, max: 100 })
    .withMessage("Title must be 4-100 characters"),

  body("description")
    .optional()
    .isLength({ max: 500 })
    .withMessage("Description must be under 500 characters"),

  body("status")
    .optional()
    .isIn(AvailableTaskStatuses)
    .withMessage(
      "Status must be one of the following: " +
        AvailableTaskStatuses.join(", "),
    ),

  body("project")
    .notEmpty()
    .withMessage("Project ID is required")
    .isMongoId()
    .withMessage("Invalid project id"),

  body("assignee")
    .optional()
    .custom(isValidObjectId)
    .withMessage("Invalid assignee id"),
];

export const updateTaskValidator = [
  body("title")
    .optional()
    .isLength({ min: 4, max: 100 })
    .withMessage("Title must be 4-100 characters"),

  body("description")
    .optional()
    .isLength({ max: 500 })
    .withMessage("Description must be under 500 characters"),

  body("status")
    .optional()
    .isIn(AvailableTaskStatuses)
    .withMessage(
      "Status must be one of the following: " +
        AvailableTaskStatuses.join(", "),
    ),

  body("project")
    .optional()
    .custom(isValidObjectId)
    .withMessage("Invalid project id"),

  body("assignee")
    .optional()
    .custom(isValidObjectId)
    .withMessage("Invalid assignee id"),
];

export const taskIdValidator = [
  param("id").isMongoId().withMessage("Invalid task id"),
];
