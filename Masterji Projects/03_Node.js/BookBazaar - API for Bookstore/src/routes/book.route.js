import { Router } from "express";
import { bookSchema, updateBookSchema } from "../validators/bookSchemas.js";
import { validationMiddleware } from "../middlewares/validation.middleware.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";
import { requireAdmin } from "../middlewares/admin.middleware.js";
import {
  createBook,
  deleteBook,
  getBooksById,
  getBooksByQuery,
  updateBook,
} from "../controllers/book.controller.js";

const router = Router();

// public routes
router.get("/", getBooksByQuery);

router.get("/:id", getBooksById);

// private routes
router.post("/", authenticateToken, requireAdmin, validationMiddleware(bookSchema), createBook);

router.put(
  "/:id",
  authenticateToken,
  requireAdmin,
  validationMiddleware(updateBookSchema),
  updateBook
);

router.delete("/:id", authenticateToken, requireAdmin, deleteBook);

export default router;
