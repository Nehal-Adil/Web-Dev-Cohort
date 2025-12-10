// This ensures only the review owner can delete it.

import prisma from "../db/client.js";

export const ownershipMiddleware = async (req, res, next) => {
  try {
    const reviewId = parseInt(req.params.reviewId);

    const review = await prisma.review.findUnique({
      where: { id: reviewId },
      select: { userId: true },
    });

    if (!review) return res.status(404).json({ message: "Review not found" });

    if (review.userId !== req.user.id)
      return res.status(403).json({ message: "You are not the owner of this review" });

    next();
  } catch (error) {
    console.error("Ownership middleware error:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};
