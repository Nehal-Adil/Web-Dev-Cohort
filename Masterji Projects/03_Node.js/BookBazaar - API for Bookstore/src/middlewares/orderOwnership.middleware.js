import prisma from "../db/client.js";

export const requireOrderOwnership = async (req, res, next) => {
  try {
    const orderId = parseInt(req.params.orderId);

    const order = await prisma.order.findUnique({
      where: { id: orderId },
      select: { userId: true },
    });
    if (!order) return res.status(404).json({ message: "Order not found" });

    if (order.userId !== req.user.id) {
      return res.status(403).json({ message: "You are not the owner of this order" });
    }

    next();
  } catch (error) {
    console.error("Order ownership middleware error:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};
