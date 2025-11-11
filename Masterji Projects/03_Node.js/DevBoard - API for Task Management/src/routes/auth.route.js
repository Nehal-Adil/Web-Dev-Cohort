import { Router } from "express";
import {
  getCurrentUser,
  loginUser,
  registerUser,
} from "../controllers/auth.controller.js";
import {
  loginValidator,
  registrationValidator,
} from "../validators/auth.validator.js";
import { verifyJWT } from "../middlewares/jwt.middleware.js";
import { createApiKey } from "../controllers/apikey.controller.js";

const router = Router();

router.post("/register", registrationValidator, registerUser);
router.post("/login", loginValidator, loginUser);
router.get("/me", verifyJWT, getCurrentUser);
router.post("/api-key", verifyJWT, createApiKey);

export default router;
