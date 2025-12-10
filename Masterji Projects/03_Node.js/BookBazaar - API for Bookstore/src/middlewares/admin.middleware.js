import prisma from "../db/client.js";

export const requireAdmin = async (req, res, next) => {
  try {
    // req.user.id is set by authenticateToken middleware
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { role: true },
    });

    if (!user || user.role !== "admin") {
      return res.status(403).json({
        error: "Admin access required",
      });
    }

    next();
  } catch (error) {
    console.error("Admin middleware error:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};
