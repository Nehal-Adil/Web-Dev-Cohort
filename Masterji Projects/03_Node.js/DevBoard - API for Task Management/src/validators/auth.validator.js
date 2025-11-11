import { body } from "express-validator";

export const registrationValidator = [
  body("fullName")
    .optional({ checkFalsy: true })
    .isString()
    .withMessage("Please enter your full name"),

  body("username")
    .notEmpty()
    .withMessage("Username is required")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Username must be between 4 and 20 characters long"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .trim()
    .isEmail()
    .withMessage("Please enter a valid email")
    .normalizeEmail(),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

export const loginValidator = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .trim()
    .isEmail()
    .withMessage("Please enter a valid email")
    .normalizeEmail(),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];
