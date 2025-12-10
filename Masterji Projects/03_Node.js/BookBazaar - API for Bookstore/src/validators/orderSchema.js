import { z } from "zod";

const orderItemSchema = z.object({
  bookId: z.number().int().positive("Book ID must be a positive number"),
  quantity: z.number().int().min(1, "Quantity must be at least 1"),
});

export const orderSchema = z.object({
  items: z.array(orderItemSchema).min(1, "At least one item is required"),
});
