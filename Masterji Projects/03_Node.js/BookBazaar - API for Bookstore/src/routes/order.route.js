import { Router } from "express";
import { authenticateToken } from "../middlewares/auth.middleware.js";
import { validationMiddleware } from "../middlewares/validation.middleware.js";
import { requireOrderOwnership } from "../middlewares/orderOwnership.middleware.js";
import { createOrder, getOrderById, getOrdersByUser } from "../controllers/order.controller.js";
import { orderSchema } from "../validators/orderSchema.js";

const router = Router();

router.post("/", authenticateToken, validationMiddleware(orderSchema), createOrder);

router.get("/", authenticateToken, getOrdersByUser);

router.get("/:orderId", authenticateToken, requireOrderOwnership, getOrderById);

export default router;
