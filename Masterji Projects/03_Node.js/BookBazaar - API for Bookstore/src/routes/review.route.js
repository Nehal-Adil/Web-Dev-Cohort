import { Router } from "express";
import { createReview, deleteReview, getReviewsByBook } from "../controllers/review.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";
import { validationMiddleware } from "../middlewares/validation.middleware.js";
import { ownershipMiddleware } from "../middlewares/ownership.middleware.js";
import { reviewSchema } from "../validators/reviewSchema.js";

const router = Router({ mergeParams: true });

router.post("/", authenticateToken, validationMiddleware(reviewSchema), createReview);

router.get("/", getReviewsByBook);

router.delete("/:reviewId", authenticateToken, ownershipMiddleware, deleteReview);

export default router;
