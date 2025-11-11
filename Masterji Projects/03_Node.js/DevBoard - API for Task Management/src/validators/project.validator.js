import { body, param } from "express-validator";

export const createProjectValidator = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 4, max: 100 })
    .withMessage("Title must be 4-100 characters"),

  body("description")
    .optional()
    .isLength({ max: 500 })
    .withMessage("Description must be under 500 characters"),
];

export const updateProjectValidator = [
  body("title")
    .optional()
    .isLength({ min: 1, max: 100 })
    .withMessage("Title must be 1-100 characters"),

  body("description")
    .optional()
    .isLength({ max: 500 })
    .withMessage("Description must be under 500 characters"),
];

export const projectIdValidator = [
  param("id").isMongoId().withMessage("Invalid project id"),
];
