import { Router } from "express";
import { validationMiddleware } from "../middlewares/validation.middleware.js";
import { registerSchema, loginSchema } from "../validators/authSchemas.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";
import { getMe, loginUser, registerUser } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", validationMiddleware(registerSchema), registerUser);

router.post("/login", validationMiddleware(loginSchema), loginUser);

router.get("/me", authenticateToken, getMe);

export default router;
