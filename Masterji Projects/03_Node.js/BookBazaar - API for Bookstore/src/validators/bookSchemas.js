import { z } from "zod";

export const bookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  description: z.string().optional(),
  price: z.number().positive("Price must be a positive number"),
  genre: z.string().optional(),
  stock: z.number().int().nonnegative().default(0),
});

export const updateBookSchema = bookSchema.partial();

// .partial() makes all fields optional — perfect for PUT requests.
